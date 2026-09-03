const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const chromePath = '/root/.cache/puppeteer/chrome/linux-151.0.7922.71/chrome-linux64/chrome';
  
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--window-size=1440,900'
    ],
    ignoreHTTPSErrors: true
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.setCacheEnabled(false); // Disable cache for hard refresh

  // Collect console errors
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push({
        text: msg.text(),
        location: msg.location()
      });
    }
  });

  page.on('pageerror', err => {
    consoleErrors.push({
      type: 'pageerror',
      message: err.message
    });
  });

  let screenshotDir = '/workspace/screenshots';
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  }

  try {
    // ============== STEP 1: Navigate with hard refresh ==============
    console.log('[STEP 1] Navigating to http://localhost:8080/ with cache disabled...');
    await page.goto('http://localhost:8080/', { 
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    // Hard reload (disable cache)
    await page.reload({ waitUntil: 'networkidle0', timeout: 30000 });
    await new Promise(r => setTimeout(r, 3000)); // Wait 3 seconds
    await page.screenshot({ path: path.join(screenshotDir, '01_homepage.png'), fullPage: true });
    console.log('[STEP 1] Done. Homepage screenshot saved.');

    // ============== STEP 2: Expand 系统管理 → click 数据监控 ==============
    console.log('[STEP 2] Looking for sidebar: 系统管理 → 数据监控...');
    
    // Try to find and click 系统管理 to expand
    const expandSelectors = [
      '//span[contains(text(), "系统管理")]/ancestor::div[contains(@class,"el-submenu") or contains(@class,"menu") or contains(@class,"sidebar")][1]',
      '//div[contains(text(), "系统管理")]/ancestor::div[contains(@class,"menu") or contains(@class,"sidebar")][1]',
      '//*[contains(text(),"系统管理") and contains(@class,"title")]',
    ];
    
    let systemManageClicked = false;
    for (const xpath of expandSelectors) {
      try {
        const elements = await page.$x(xpath);
        if (elements.length > 0) {
          // Find the clickable parent (menu title area)
          const elem = elements[0];
          const box = await elem.boundingBox();
          if (box) {
            await page.evaluate(el => { el.scrollIntoView({block:'center'}); }, elem);
            await new Promise(r => setTimeout(r, 500));
            await elem.click();
            systemManageClicked = true;
            console.log('[STEP 2] Clicked 系统管理 using xpath:', xpath.substring(0,60)+'...');
            break;
          }
        }
      } catch (e) {
        // continue to next selector
      }
    }

    if (!systemManageClicked) {
      // Fallback: try by text content more broadly
      try {
        await page.evaluate(() => {
          const all = document.querySelectorAll('*');
          for (const el of all) {
            if (el.textContent && el.textContent.trim() === '系统管理' && el.children.length === 0) {
              el.click();
              return true;
            }
          }
          // Also check submenu titles
          const subs = document.querySelectorAll('[class*="submenu"] [class*="title"], [class*="menu"] [class*="item"]');
          for (const el of subs) {
            if (el.textContent && el.textContent.includes('系统管理')) {
              el.click();
              return true;
            }
          }
          return false;
        });
        systemManageClicked = true;
        console.log('[STEP 2] Clicked 系统管理 via evaluate fallback');
      } catch(e) {
        console.log('[STEP 2] WARNING: Could not click 系统管理:', e.message);
      }
    }

    await new Promise(r => setTimeout(r, 2000)); // Wait 2 seconds

    // Now click 数据监控
    console.log('[STEP 2] Looking for 数据监控...');
    let dataMonitorClicked = false;
    const monitorSelectors = [
      '//*[contains(text(),"数据监控") and (contains(@class,"menu-item") or contains(@class,"item") or contains(@class,"link") or name()="li" or name()="a" or name()="span")]',
      '//li[contains(text(),"数据监控")]',
      '//a[contains(text(),"数据监控")]',
      '//span[contains(text(),"数据监控")]',
    ];
    
    for (const xpath of monitorSelectors) {
      try {
        const elements = await page.$x(xpath);
        for (const elem of elements) {
          const box = await elem.boundingBox();
          if (box && box.width > 0 && box.height > 0) {
            await page.evaluate(el => { el.scrollIntoView({block:'center'}); }, elem);
            await new Promise(r => setTimeout(r, 500));
            await elem.click();
            dataMonitorClicked = true;
            console.log('[STEP 2] Clicked 数据监控');
            break;
          }
        }
        if (dataMonitorClicked) break;
      } catch (e) {}
    }

    if (!dataMonitorClicked) {
      try {
        const result = await page.evaluate(() => {
          const all = document.querySelectorAll('*');
          for (const el of all) {
            if (el.textContent && el.textContent.trim() === '数据监控') {
              const style = window.getComputedStyle(el);
              if (style.display !== 'none' && style.visibility !== 'hidden') {
                el.click();
                return true;
              }
            }
          }
          return false;
        });
        if (result) {
          dataMonitorClicked = true;
          console.log('[STEP 2] Clicked 数据监控 via evaluate fallback');
        }
      } catch(e) {
        console.log('[STEP 2] WARNING: evaluate fallback failed:', e.message);
      }
    }

    await new Promise(r => setTimeout(r, 2000)); // Wait 2 seconds
    await page.screenshot({ path: path.join(screenshotDir, '02_data_monitor.png'), fullPage: true });
    console.log('[STEP 2] Done. Data monitor screenshot saved.');

    // ============== STEP 3: Click sub-tab "应用运营总览" ==============
    console.log('[STEP 3] Looking for sub-tab "应用运营总览"...');
    let tabClicked = false;
    const tabSelectors = [
      '//*[contains(text(),"应用运营总览") and (contains(@class,"tab") or contains(@class,"el-tabs") or name()="div" or name()="span" or name()="a")]',
      '//div[contains(@class,"tab") and contains(text(),"应用运营总览")]',
      '//span[contains(@class,"tabs") and contains(text(),"应用运营总览")]',
    ];
    
    for (const xpath of tabSelectors) {
      try {
        const elements = await page.$x(xpath);
        for (const elem of elements) {
          const box = await elem.boundingBox();
          if (box && box.width > 0 && box.height > 0) {
            await page.evaluate(el => { el.scrollIntoView({block:'center'}); }, elem);
            await new Promise(r => setTimeout(r, 500));
            await elem.click();
            tabClicked = true;
            console.log('[STEP 3] Clicked 应用运营总览 tab');
            break;
          }
        }
        if (tabClicked) break;
      } catch (e) {}
    }

    if (!tabClicked) {
      try {
        const result = await page.evaluate(() => {
          // Look in tab-like containers
          const tabs = document.querySelectorAll('[class*="tab"], [role="tab"], [class*="tabs"] > *');
          for (const t of tabs) {
            if (t.textContent && t.textContent.includes('应用运营总览')) {
              t.click();
              return true;
            }
          }
          // Fallback: find any element with this text
          const all = document.querySelectorAll('div, span, a, li');
          for (const el of all) {
            if (el.textContent && el.textContent.trim() === '应用运营总览') {
              const style = window.getComputedStyle(el);
              if (style.display !== 'none' && style.visibility !== 'hidden' && el.offsetParent !== null) {
                el.click();
                return true;
              }
            }
          }
          return false;
        });
        if (result) {
          tabClicked = true;
          console.log('[STEP 3] Clicked 应用运营总览 via evaluate fallback');
        }
      } catch(e) {
        console.log('[STEP 3] WARNING: evaluate fallback failed:', e.message);
      }
    }

    await new Promise(r => setTimeout(r, 3000)); // Wait 3 seconds
    await page.screenshot({ path: path.join(screenshotDir, '03_app_ops_overview.png'), fullPage: true });
    console.log('[STEP 3] Done. App ops overview screenshot saved.');

    // ============== STEP 4: Scroll to "专家列表" table at bottom ==============
    console.log('[STEP 4] Scrolling to 专家列表 table at the bottom...');
    
    // Scroll to find 专家列表
    let expertTableFound = false;
    const scrollSteps = 15;
    for (let i = 0; i < scrollSteps; i++) {
      const found = await page.evaluate(() => {
        const all = document.querySelectorAll('*');
        for (const el of all) {
          if ((el.tagName === 'H2' || el.tagName === 'H3' || el.tagName === 'DIV' || el.tagName === 'SPAN' || el.tagName === 'CAPTION') 
              && el.textContent && el.textContent.trim() === '专家列表') {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return true;
          }
          // Also check table containing 专家列表
          if (el.textContent && el.textContent.includes('专家列表') && 
              (el.classList.contains('card-header') || el.classList.contains('panel-title') || 
               el.querySelector('table'))) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return true;
          }
        }
        return false;
      });
      
      if (found) {
        expertTableFound = true;
        break;
      }
      // Scroll down by viewport height
      await page.evaluate(() => window.scrollBy(0, window.innerHeight * 0.8));
      await new Promise(r => setTimeout(r, 500));
    }
    
    // Also try scroll to bottom if not found
    if (!expertTableFound) {
      await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
      await new Promise(r => setTimeout(r, 1500));
    }

    await new Promise(r => setTimeout(r, 2000));

    // Now take screenshot of ROI column in the table
    console.log('[STEP 4] Taking screenshot of expert list table with ROI column...');
    
    // Try to find the table element
    let tableSelector = null;
    const tableInfo = await page.evaluate(() => {
      // Look for a table that contains ROI in headers or has ops-roi-btn class
      const tables = document.querySelectorAll('table');
      for (let i = 0; i < tables.length; i++) {
        const tbl = tables[i];
        const hasRoiBtn = tbl.querySelector('.ops-roi-btn');
        const hasRoiHeader = tbl.textContent.includes('ROI') || tbl.textContent.includes('Roi') || tbl.textContent.includes('roi率');
        if (hasRoiBtn || hasRoiHeader) {
          tbl.scrollIntoView({ block: 'center', behavior: 'smooth' });
          // Check for nearby 专家列表 text
          let expertLabel = false;
          let parent = tbl.parentElement;
          for (let j = 0; j < 5; j++) {
            if (!parent) break;
            if (parent.textContent && parent.textContent.includes('专家列表')) {
              expertLabel = true;
              break;
            }
            parent = parent.parentElement;
          }
          return { 
            index: i, 
            expertLabel,
            html: tbl.outerHTML.substring(0, 500)
          };
        }
      }
      return null;
    });

    console.log('[STEP 4] Table info:', JSON.stringify(tableInfo));

    // Take screenshot focused on the table area
    await new Promise(r => setTimeout(r, 1500));
    
    // Try to clip to the table
    let tableClip = null;
    try {
      tableClip = await page.evaluate(() => {
        const tables = document.querySelectorAll('table');
        for (let i = 0; i < tables.length; i++) {
          const tbl = tables[i];
          const hasRoiBtn = tbl.querySelector('.ops-roi-btn');
          if (hasRoiBtn || tbl.textContent.includes('ROI') || tbl.textContent.includes('Roi')) {
            const r = tbl.getBoundingClientRect();
            return { x: r.left, y: r.top, width: r.width, height: r.height, scrollX: window.scrollX, scrollY: window.scrollY };
          }
        }
        return null;
      });
    } catch(e) {
      console.log('[STEP 4] Warning getting table clip:', e.message);
    }

    const screenshotOpts = { path: path.join(screenshotDir, '04_expert_list_roi.png') };
    if (tableClip) {
      screenshotOpts.clip = {
        x: Math.max(0, tableClip.x - 20),
        y: Math.max(0, tableClip.y + tableClip.scrollY - 50),
        width: Math.min(tableClip.width + 40, 1440),
        height: Math.min(tableClip.height + 100, 900)
      };
    }
    await page.screenshot(screenshotOpts);
    console.log('[STEP 4] ROI table screenshot saved to:', screenshotOpts.path);

    // ============== STEP 5: Verification ==============
    console.log('\n[STEP 5] Starting verification...\n');
    
    const verification = await page.evaluate(() => {
      const result = {
        firstRowRoi: null,
        otherRows: [],
        totalRows: 0,
        firstRowHasPercentage: false,
        otherRowsAllHaveButton: true,
        roiColumnIndex: -1,
        details: []
      };

      // Find the expert list table
      let expertTable = null;
      const tables = document.querySelectorAll('table');
      
      // Strategy 1: find table with .ops-roi-btn and "专家列表" nearby
      for (const tbl of tables) {
        const hasRoiBtn = tbl.querySelector('.ops-roi-btn');
        if (!hasRoiBtn) continue;
        
        // Check for nearby 专家列表
        let isExpertTable = false;
        let parent = tbl.parentElement;
        for (let j = 0; j < 8; j++) {
          if (!parent) break;
          if (parent.textContent && parent.textContent.includes('专家列表')) {
            isExpertTable = true;
            break;
          }
          parent = parent.parentElement;
        }
        if (isExpertTable) {
          expertTable = tbl;
          break;
        }
        // If not found, just take the first table with ops-roi-btn
        if (!expertTable) expertTable = tbl;
      }

      if (!expertTable) {
        result.details.push('ERROR: Could not find expert list table with ROI buttons');
        return result;
      }

      // Find ROI column index from header
      const headers = expertTable.querySelectorAll('thead th, thead td, tr:first-child th, tr:first-child td');
      headers.forEach((th, idx) => {
        const text = (th.textContent || '').trim();
        if (text.includes('ROI') || text.includes('Roi') || text.includes('roi率') || text.includes('投资回报率')) {
          result.roiColumnIndex = idx;
        }
      });

      // Get all data rows (skip header)
      const tbodyRows = expertTable.querySelectorAll('tbody tr');
      const allRows = expertTable.querySelectorAll('tr');
      let dataRows = tbodyRows.length > 0 ? Array.from(tbodyRows) : Array.from(allRows).slice(1);
      
      result.totalRows = dataRows.length;
      result.details.push(`Found ${dataRows.length} data rows, ROI column index: ${result.roiColumnIndex}`);

      dataRows.forEach((row, rowIdx) => {
        const cells = row.querySelectorAll('td, th');
        
        // Determine ROI cell
        let roiCell = null;
        if (result.roiColumnIndex >= 0 && cells[result.roiColumnIndex]) {
          roiCell = cells[result.roiColumnIndex];
        } else {
          // Fallback: find cell containing ops-roi-btn or percentage
          for (const cell of cells) {
            if (cell.querySelector('.ops-roi-btn') || 
                (cell.textContent && cell.textContent.match(/\d+\.?\d*%/))) {
              roiCell = cell;
              break;
            }
          }
        }

        if (!roiCell) {
          result.details.push(`Row ${rowIdx}: No ROI cell found`);
          return;
        }

        const cellText = (roiCell.textContent || '').trim();
        const hasButton = roiCell.querySelector('.ops-roi-btn, button') !== null;
        const hasPercentage = /\d+\.?\d*%/.test(cellText);

        if (rowIdx === 0) {
          // First row check
          result.firstRowRoi = cellText;
          result.firstRowHasPercentage = hasPercentage && !hasButton;
          result.details.push(`Row 0 (FIRST): text="${cellText}", hasButton=${hasButton}, hasPercentage=% match=${/\d+\.?\d*%/.test(cellText)}`);
        } else {
          // Other rows check
          result.otherRows.push({
            index: rowIdx,
            text: cellText,
            hasButton: hasButton
          });
          if (!hasButton) {
            result.otherRowsAllHaveButton = false;
          }
          result.details.push(`Row ${rowIdx}: text="${cellText}", hasButton=${hasButton}`);
        }
      });

      return result;
    });

    console.log('=== VERIFICATION RESULTS ===');
    console.log('First row ROI:', verification.firstRowRoi);
    console.log('First row is percentage (not "计算"):', verification.firstRowHasPercentage);
    console.log('Total rows:', verification.totalRows);
    console.log('ROI column index:', verification.roiColumnIndex);
    console.log('All other rows have "计算" button:', verification.otherRowsAllHaveButton);
    console.log('Other rows count:', verification.otherRows.length);
    console.log('');
    console.log('Details:');
    verification.details.forEach(d => console.log('  -', d));
    
    console.log('');
    console.log('Console errors:', consoleErrors.length);
    consoleErrors.slice(0, 10).forEach(e => console.log('  -', JSON.stringify(e)));

    // ============== FINAL CHECKS ==============
    console.log('\n=== FINAL CHECKLIST ===');
    let check1Pass = verification.firstRowHasPercentage;
    // Also check if firstRowRoi contains "93.8" or is a percentage
    if (verification.firstRowRoi) {
      const has938 = /93\.?8/.test(verification.firstRowRoi);
      const isPercent = /\d+\.?\d*%/.test(verification.firstRowRoi);
      check1Pass = (isPercent && !verification.firstRowRoi.includes('计算'));
      if (has938) console.log('✓ Check 1a: First row contains "93.8" value');
      else console.log(`? Check 1a: First row value is "${verification.firstRowRoi}" (expected ~93.8%)`);
    }
    console.log(check1Pass ? '✓' : '✗', 'Check 1: First row ROI shows percentage, not "计算" button');
    
    const check2Pass = verification.otherRowsAllHaveButton && verification.otherRows.length > 0;
    console.log(check2Pass ? '✓' : '✗', 'Check 2: All OTHER rows show "计算" button');
    
    const check3Pass = consoleErrors.length === 0;
    console.log(check3Pass ? '✓' : '✗', `Check 3: Console has ${consoleErrors.length} errors`);

    console.log('\n=== SUMMARY ===');
    const allPass = check1Pass && check2Pass && check3Pass;
    console.log(allPass ? 'ALL CHECKS PASSED ✓' : 'SOME CHECKS FAILED ✗');
    
    // Save verification JSON
    fs.writeFileSync(path.join(screenshotDir, 'verification.json'), JSON.stringify({
      verification,
      consoleErrors,
      checks: { check1Pass, check2Pass, check3Pass, allPass }
    }, null, 2));

  } catch (err) {
    console.error('FATAL ERROR:', err);
    console.error(err.stack);
    // Save error screenshot
    await page.screenshot({ path: path.join(screenshotDir, 'ERROR_screenshot.png'), fullPage: true });
  } finally {
    await browser.close();
    console.log('\nBrowser closed. Task completed.');
  }
})();

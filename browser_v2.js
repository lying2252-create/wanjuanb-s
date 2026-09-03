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
      '--window-size=1440,1200',
      '--lang=zh-CN'
    ],
    ignoreHTTPSErrors: true
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1200 });
  await page.setCacheEnabled(false);
  
  // Set extra headers for Chinese
  await page.setExtraHTTPHeaders({ 'Accept-Language': 'zh-CN,zh;q=0.9' });

  // Collect console errors  
  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      const text = msg.text();
      // Ignore favicon 404 as it's trivial
      if (!text.includes('favicon.ico')) {
        consoleErrors.push({ type: 'console', text });
      }
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push({ type: 'pageerror', message: err.message });
  });

  const screenshotDir = '/workspace/screenshots';
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

  try {
    // ============== STEP 1: Navigate with hard refresh ==============
    console.log('[STEP 1] Navigating to http://localhost:8080/ (hard refresh)...');
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2', timeout: 30000 });
    await page.reload({ waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({ path: path.join(screenshotDir, 'v2_01_home.png'), fullPage: true });
    
    // Dump page text for debugging
    const pageText1 = await page.evaluate(() => document.body.innerText.substring(0, 1000));
    console.log('[STEP 1] Page text snippet:', JSON.stringify(pageText1));

    // ============== STEP 2: Expand 系统管理 → click 数据监控 ==============
    console.log('\n[STEP 2] Sidebar navigation...');
    
    // Find all visible menu items with click
    await page.evaluate(() => {
      // Click 系统管理 - look for sidebar elements
      const candidates = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      let node;
      while (node = walker.nextNode()) {
        const text = (node.innerText || node.textContent || '').trim();
        if ((text === '系统管理' || text.includes('系统管理')) && node.children.length <= 3) {
          candidates.push({ node, text, tag: node.tagName, cls: node.className });
        }
      }
      // Try to find the sidebar one (usually in a menu/submenu structure)
      for (const c of candidates) {
        // Find clickable ancestor
        let el = c.node;
        for (let i = 0; i < 6; i++) {
          if (!el) break;
          const cls = (el.className || '').toString();
          if (cls.includes('submenu') || cls.includes('menu') || cls.includes('sidebar') || cls.includes('el-sub')) {
            el.click();
            window.__clicked1 = true;
            break;
          }
          // If it's already a clickable thing
          if (el.onclick || cls.includes('item') || el.tagName === 'LI') {
            el.click();
            window.__clicked1 = true;
            break;
          }
          el = el.parentElement;
        }
        if (window.__clicked1) break;
      }
      // Last resort: click the element directly if not found
      if (!window.__clicked1 && candidates.length > 0) {
        candidates[0].node.click();
      }
    });
    await new Promise(r => setTimeout(r, 2000));

    // Now click 数据监控
    await page.evaluate(() => {
      const candidates = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      let node;
      while (node = walker.nextNode()) {
        const text = (node.innerText || node.textContent || '').trim();
        if (text === '数据监控' || text.includes('数据监控')) {
          const style = window.getComputedStyle(node);
          if (style.display !== 'none' && style.visibility !== 'hidden' && node.offsetParent !== null) {
            candidates.push(node);
          }
        }
      }
      // Find the menu item one (should be a sidebar link)
      for (const c of candidates) {
        let el = c;
        for (let i = 0; i < 4; i++) {
          if (!el) break;
          const cls = (el.className || '').toString();
          if (cls.includes('item') || el.tagName === 'LI' || el.tagName === 'A' || cls.includes('menu-item') || cls.includes('el-menu')) {
            el.click();
            window.__clicked2 = true;
            return;
          }
          el = el.parentElement;
        }
      }
      if (candidates.length > 0) candidates[0].click();
    });
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: path.join(screenshotDir, 'v2_02_data_monitor.png'), fullPage: true });
    
    const pageText2 = await page.evaluate(() => document.body.innerText.substring(0, 1500));
    console.log('[STEP 2] Page text after navigating:', JSON.stringify(pageText2.substring(0,500)));

    // ============== STEP 3: Click sub-tab "应用运营总览" ==============
    console.log('\n[STEP 3] Clicking 应用运营总览 tab...');
    await page.evaluate(() => {
      const candidates = [];
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
      let node;
      while (node = walker.nextNode()) {
        const text = (node.innerText || node.textContent || '').trim();
        if (text === '应用运营总览' || (text.length < 20 && text.includes('应用运营总览'))) {
          const style = window.getComputedStyle(node);
          if (style.display !== 'none' && style.visibility !== 'hidden' && node.offsetParent !== null) {
            candidates.push(node);
          }
        }
      }
      // Prefer tab-looking elements
      for (const c of candidates) {
        let el = c;
        for (let i = 0; i < 4; i++) {
          if (!el) break;
          const cls = (el.className || '').toString();
          if (cls.includes('tab') || cls.includes('el-tabs') || el.tagName === 'LI') {
            el.click();
            window.__tabClicked = true;
            return;
          }
          el = el.parentElement;
        }
      }
      if (candidates.length > 0) candidates[0].click();
    });
    await new Promise(r => setTimeout(r, 3000));
    await page.screenshot({ path: path.join(screenshotDir, 'v2_03_overview.png'), fullPage: true });

    // ============== STEP 4: Scroll to bottom (专家列表) ==============
    console.log('\n[STEP 4] Scrolling to find 专家列表 table...');
    
    // Scroll all the way to bottom in steps, waiting each time
    const scrollResult = await page.evaluate(async () => {
      // This runs in page - need to use non-async approach instead
      return 0;
    });
    
    // Do scrolling in puppeteer context
    let prevScrollHeight = 0;
    let attempts = 0;
    while (attempts < 25) {
      const { scrollHeight, scrollY, foundExpert } = await page.evaluate(() => {
        const found = document.body.innerText.includes('专家列表') || 
                      Array.from(document.querySelectorAll('.ops-roi-btn')).length > 0;
        return {
          scrollHeight: document.body.scrollHeight,
          scrollY: window.scrollY,
          foundExpert: found
        };
      });
      
      if (foundExpert) {
        console.log(`[STEP 4] Found expert list content at scroll ${scrollY}/${scrollHeight}`);
        break;
      }
      
      if (scrollHeight === prevScrollHeight && attempts > 5) {
        // Already at bottom
        break;
      }
      prevScrollHeight = scrollHeight;
      
      await page.evaluate(() => window.scrollBy(0, 600));
      await new Promise(r => setTimeout(r, 400));
      attempts++;
    }
    
    // Final scroll to bottom and then scroll a bit to center the table
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(r => setTimeout(r, 1500));
    
    // Now try to find table with ROI buttons and scroll to it
    await page.evaluate(() => {
      const roiBtns = document.querySelectorAll('.ops-roi-btn, [data-handler="h48"], [class*="roi"]');
      if (roiBtns.length > 0) {
        roiBtns[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        // Scroll to tables at the bottom
        const tables = document.querySelectorAll('table');
        if (tables.length > 0) {
          const lastTbl = tables[tables.length - 1];
          lastTbl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
    await new Promise(r => setTimeout(r, 2000));
    
    await page.screenshot({ path: path.join(screenshotDir, 'v2_04_bottom.png'), fullPage: true });
    
    // Debug: dump all text content
    const fullText = await page.evaluate(() => document.body.innerText);
    console.log('[STEP 4] Full text snippet (bottom):', JSON.stringify(fullText.substring(fullText.length - 2000)));
    
    // Debug: count tables and buttons
    const pageDebug = await page.evaluate(() => {
      const tables = Array.from(document.querySelectorAll('table'));
      const roiBtns = Array.from(document.querySelectorAll('.ops-roi-btn'));
      const allBtns = Array.from(document.querySelectorAll('button'));
      return {
        tablesCount: tables.length,
        roiBtnCount: roiBtns.length,
        allBtnCount: allBtns.length,
        tables: tables.map((t, i) => {
          const rows = t.querySelectorAll('tr').length;
          const hasRoi = t.querySelector('.ops-roi-btn') !== null;
          const textSample = t.innerText.substring(0, 200);
          return { idx: i, rows, hasRoi, textSample };
        }),
        roiBtnTexts: roiBtns.map(b => ({ text: b.innerText, html: b.outerHTML.substring(0, 150) })),
        allBtnSample: allBtns.filter(b => b.innerText && (b.innerText.includes('计算') || b.innerText.includes('ROI') || b.innerText.includes('%'))).map(b => b.innerText).slice(0, 20)
      };
    });
    console.log('[STEP 4] Page debug:', JSON.stringify(pageDebug, null, 2));
    
    // ============== STEP 5: Take ROI table screenshot ==============
    console.log('\n[STEP 5] Taking ROI table screenshot...');
    
    // Try to screenshot the table (first table with ROI buttons, or last table on page)
    let clipResult = await page.evaluate(() => {
      // Find expert list table - prefer one with ROI buttons
      let targetTable = null;
      const tables = document.querySelectorAll('table');
      
      for (const t of tables) {
        if (t.querySelector('.ops-roi-btn') || t.innerText.includes('ROI')) {
          targetTable = t;
          break;
        }
      }
      
      // If still not found and there are tables, use the last one with most rows (likely expert list)
      if (!targetTable && tables.length > 0) {
        let maxRows = 0;
        for (const t of tables) {
          const rc = t.querySelectorAll('tr').length;
          if (rc >= maxRows) {
            maxRows = rc;
            targetTable = t;
          }
        }
      }
      
      if (!targetTable) return null;
      
      targetTable.scrollIntoView({ block: 'center' });
      const r = targetTable.getBoundingClientRect();
      const sx = window.scrollX;
      const sy = window.scrollY;
      
      // Also find cells with ROI info
      const rows = targetTable.querySelectorAll('tbody tr, tr');
      const firstRows = [];
      rows.forEach((row, i) => {
        if (i < 5) {
          const cells = row.querySelectorAll('td, th');
          cells.forEach(cell => {
            if (cell.querySelector('.ops-roi-btn') || /%/.test(cell.innerText) || cell.innerText.includes('计算')) {
              firstRows.push({ row: i, text: cell.innerText.trim(), hasBtn: !!cell.querySelector('.ops-roi-btn') });
            }
          });
        }
      });
      
      return {
        x: r.left, y: r.top, width: r.width, height: r.height,
        scrollX: sx, scrollY: sy,
        firstRows
      };
    });
    
    console.log('[STEP 5] Table clip result:', JSON.stringify(clipResult));
    
    const roiShotPath = path.join(screenshotDir, 'v2_05_roi_table.png');
    if (clipResult) {
      await page.screenshot({
        path: roiShotPath,
        clip: {
          x: Math.max(0, clipResult.x - 30),
          y: clipResult.y + clipResult.scrollY - 60,
          width: Math.min(clipResult.width + 60, 1440),
          height: Math.min(clipResult.height + 120, 1200)
        }
      });
    } else {
      // Fallback: full page shot
      await page.screenshot({ path: roiShotPath, fullPage: true });
    }
    console.log('[STEP 5] ROI screenshot saved:', roiShotPath);
    
    // ============== STEP 6: VERIFICATION ==============
    console.log('\n[STEP 6] VERIFICATION...');
    
    const verification = await page.evaluate(() => {
      const result = {
        expertListFound: false,
        firstRowRoi: null,
        firstRowIsPercentage: false,
        otherRowsAllButton: true,
        otherRowsCount: 0,
        rows: [],
        tablesCount: document.querySelectorAll('table').length,
        totalRows: 0
      };
      
      // Find the right table: with .ops-roi-btn and ideally near "专家列表"
      const tables = document.querySelectorAll('table');
      let targetTable = null;
      let targetScore = -1;
      
      tables.forEach(tbl => {
        let score = 0;
        if (tbl.querySelector('.ops-roi-btn')) score += 10;
        // Check parent text for "专家列表"
        let p = tbl.parentElement;
        for (let j = 0; j < 8; j++) {
          if (!p) break;
          if (p.innerText && p.innerText.includes('专家列表')) { score += 20; break; }
          p = p.parentElement;
        }
        const rows = tbl.querySelectorAll('tbody tr, tr:not(:first-child)');
        if (rows.length >= 2) score += 2;
        if (score > targetScore) {
          targetScore = score;
          targetTable = tbl;
        }
      });
      
      if (!targetTable && tables.length > 0) {
        // Fallback: table with most rows
        let mr = -1;
        tables.forEach(t => {
          const rc = t.querySelectorAll('tr').length;
          if (rc > mr) { mr = rc; targetTable = t; }
        });
      }
      
      if (!targetTable) {
        result.error = 'No target table found';
        return result;
      }
      
      result.expertListFound = targetScore >= 10;
      
      // Find header to detect ROI column
      const headerCells = targetTable.querySelectorAll('thead th, thead td, tr:first-child th, tr:first-child td');
      let roiColIndex = -1;
      headerCells.forEach((cell, idx) => {
        const txt = (cell.innerText || cell.textContent || '').trim();
        if (/ROI|Roi|roi率|投资回报率|回报率/.test(txt)) {
          roiColIndex = idx;
        }
      });
      result.roiColIndex = roiColIndex;
      result.headerTexts = Array.from(headerCells).map(c => (c.innerText||'').trim());
      
      // Get data rows
      const tbodyRows = targetTable.querySelectorAll('tbody tr');
      let dataRows = tbodyRows.length > 0 
        ? Array.from(tbodyRows) 
        : Array.from(targetTable.querySelectorAll('tr')).slice(1); // skip header
      
      result.totalRows = dataRows.length;
      
      dataRows.forEach((row, rowIdx) => {
        const cells = row.querySelectorAll('td, th');
        let roiCell = null;
        let roiText = '';
        let hasRoiBtn = false;
        
        // Try by column index first
        if (roiColIndex >= 0 && cells[roiColIndex]) {
          roiCell = cells[roiColIndex];
        }
        
        // Fallback: search cells for ROI button or percentage
        if (!roiCell) {
          for (const cell of cells) {
            if (cell.querySelector('.ops-roi-btn')) {
              roiCell = cell;
              break;
            }
            const txt = (cell.innerText || '').trim();
            if (/\d+\.?\d*\s*%/.test(txt) && !txt.match(/^\d+$/) && txt.length < 20) {
              roiCell = cell;
              break;
            }
          }
        }
        
        if (roiCell) {
          roiText = (roiCell.innerText || roiCell.textContent || '').trim();
          hasRoiBtn = !!roiCell.querySelector('.ops-roi-btn, button');
        } else {
          // Check if any cell has the button
          for (const cell of cells) {
            if (cell.querySelector('.ops-roi-btn, button')) {
              roiCell = cell;
              roiText = (cell.innerText || '').trim();
              hasRoiBtn = true;
              break;
            }
          }
        }
        
        const rowData = {
          rowIndex: rowIdx,
          roiText,
          hasRoiBtn,
          isPercentage: !hasRoiBtn && /\d+\.?\d*\s*%/.test(roiText),
          isComputeBtn: hasRoiBtn && /计算/.test(roiText)
        };
        result.rows.push(rowData);
        
        if (rowIdx === 0) {
          result.firstRowRoi = roiText;
          result.firstRowIsPercentage = rowData.isPercentage;
        } else {
          if (!rowData.isComputeBtn) {
            result.otherRowsAllButton = false;
          }
          result.otherRowsCount++;
        }
      });
      
      return result;
    });
    
    console.log('\n========= VERIFICATION RESULTS =========');
    console.log('Tables found:', verification.tablesCount);
    console.log('Expert list table identified:', verification.expertListFound, '(score-based)');
    console.log('Header texts:', verification.headerTexts);
    console.log('ROI column index:', verification.roiColIndex);
    console.log('Total data rows:', verification.totalRows);
    console.log('');
    
    verification.rows.forEach(r => {
      const marker = r.rowIndex === 0 ? '★FIRST' : '  ROW';
      console.log(`${marker} ${r.rowIndex}: roiText="${r.roiText}", isPercentage=${r.isPercentage}, hasBtn=${r.hasRoiBtn}, isComputeBtn=${r.isComputeBtn}`);
    });
    
    console.log('');
    console.log('First row ROI value:', verification.firstRowRoi);
    console.log('');
    
    // ============== CHECKLIST ==============
    console.log('\n========== FINAL CHECKLIST ==========');
    
    // Check 1: First row is percentage (should be ~93.8%)
    const check1 = verification.firstRowIsPercentage;
    const firstRowHas938 = verification.firstRowRoi && /93\.?\s*8/.test(verification.firstRowRoi);
    console.log(`${check1 ? '✓ PASS' : '✗ FAIL'} 检查1: 第一行ROI列显示百分比，不是"计算"按钮`);
    if (verification.firstRowRoi) {
      console.log(`         实际值: "${verification.firstRowRoi}"`);
      if (firstRowHas938) console.log('         ✓ 包含"93.8"预期值');
      else console.log('         ⚠ 不包含预期的"93.8"值');
    }
    
    // Check 2: Other rows all show "计算" button
    const check2 = verification.otherRowsCount > 0 && verification.otherRowsAllButton;
    console.log(`${check2 ? '✓ PASS' : '✗ FAIL'} 检查2: 所有其他行显示"计算"按钮`);
    console.log(`         其他行数: ${verification.otherRowsCount}, 全部为按钮: ${verification.otherRowsAllButton}`);
    
    // Check 3: Console errors
    const seriousConsoleErrors = consoleErrors.filter(e => 
      !(e.text && e.text.includes('favicon'))
    );
    const check3 = seriousConsoleErrors.length === 0;
    console.log(`${check3 ? '✓ PASS' : '✗ FAIL'} 检查3: 控制台无错误 (忽略 favicon 404)`);
    if (!check3) {
      seriousConsoleErrors.slice(0, 8).forEach(e => {
        console.log(`         - ${e.type}: ${e.message || e.text}`);
      });
    }
    
    const allPassed = check1 && check2 && check3;
    console.log(`\n总结果: ${allPassed ? '全部通过 ✓' : '部分失败 ✗'}`);
    
    // Save results
    fs.writeFileSync(path.join(screenshotDir, 'v2_verification.json'), JSON.stringify({
      verification,
      consoleErrors: seriousConsoleErrors,
      checks: { check1, check2, check3, firstRowHas938, allPassed }
    }, null, 2));

  } catch (err) {
    console.error('FATAL ERROR:', err.message);
    console.error(err.stack);
    try {
      await page.screenshot({ path: path.join(screenshotDir, 'v2_ERROR.png'), fullPage: true });
      // Save HTML
      const html = await page.content();
      fs.writeFileSync(path.join(screenshotDir, 'v2_error_page.html'), html);
    } catch(e) {}
  } finally {
    await browser.close();
    console.log('\nTask complete.');
  }
})();

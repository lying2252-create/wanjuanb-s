const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const chromePath = '/root/.cache/puppeteer/chrome/linux-151.0.7922.71/chrome-linux64/chrome';
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox','--disable-setuid-sandbox','--disable-dev-shm-usage','--disable-gpu','--window-size=1440,1200','--lang=zh-CN'],
    ignoreHTTPSErrors: true
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1200 });
  await page.setCacheEnabled(false);
  await page.setExtraHTTPHeaders({ 'Cache-Control': 'no-cache', 'Pragma': 'no-cache' });

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error' && !msg.text().includes('favicon.ico')) {
      consoleErrors.push({ type: 'console', text: msg.text() });
    }
  });
  page.on('pageerror', err => {
    consoleErrors.push({ type: 'pageerror', message: err.message });
  });

  const dir = '/workspace/screenshots';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  try {
    // ============ STEP 1: Navigate with hard refresh ============
    console.log('[1/5] 导航到 localhost:8080 (硬刷新)...');
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2', timeout: 30000 });
    await page.reload({ waitUntil: 'networkidle2', timeout: 30000 }); // hard reload
    await new Promise(r => setTimeout(r, 3000));

    // ============ STEP 2: 展开系统管理 → 点击数据监控 ============
    console.log('[2/5] 展开系统管理 → 数据监控...');
    
    // 点击 系统管理 的 menu-group-head button
    await page.evaluate(() => {
      const groups = document.querySelectorAll('.menu-group');
      for (const g of groups) {
        const head = g.querySelector('.menu-group-head');
        if (head && head.textContent && head.textContent.includes('系统管理')) {
          head.click();
          window.__systemMgmtClicked = true;
          break;
        }
      }
    });
    await new Promise(r => setTimeout(r, 2000));

    // 点击 数据监控 的 submenu-item button
    await page.evaluate(() => {
      const items = document.querySelectorAll('.submenu-item, .menu-item');
      for (const item of items) {
        if (item.textContent && item.textContent.trim() === '数据监控') {
          item.click();
          window.__dataMonitorClicked = true;
          break;
        }
      }
    });
    await new Promise(r => setTimeout(r, 2000));

    console.log('       当前URL:', page.url());
    await page.screenshot({ path: path.join(dir, 'final_02_data_monitor.png') });

    // ============ STEP 3: 点击子标签 "应用运营总览" ============
    console.log('[3/5] 点击子标签 应用运营总览...');
    
    await page.evaluate(() => {
      // Find tab inside ops-pills
      const pillsContainer = document.querySelector('.subtabs.ops-pills, .ops-pills, .subtabs');
      if (pillsContainer) {
        // Find clickable children with text "应用运营总览"
        const children = pillsContainer.querySelectorAll('*');
        for (const child of children) {
          const txt = (child.textContent || '').trim();
          if (txt === '应用运营总览') {
            // Find the clickable one (closest parent with click handler or button)
            let el = child;
            for (let i = 0; i < 4; i++) {
              if (!el) break;
              const cls = (el.className || '').toString();
              if (el.tagName === 'BUTTON' || cls.includes('tab') || cls.includes('item') || cls.includes('pill') || el.onclick !== null) {
                el.click();
                window.__appOpsClicked = true;
                return;
              }
              el = el.parentElement;
            }
            // Fallback: direct click on the text element or its immediate parent
            (child.parentElement || child).click();
            window.__appOpsClicked = true;
            return;
          }
        }
      }
      // Fallback: any button/div with text
      const els = document.querySelectorAll('button, div, span');
      for (const el of els) {
        if (el.textContent && el.textContent.trim() === '应用运营总览') {
          const style = window.getComputedStyle(el);
          if (style.display !== 'none' && el.offsetParent !== null) {
            el.click();
            window.__appOpsClicked = true;
            return;
          }
        }
      }
    });
    await new Promise(r => setTimeout(r, 3000));
    
    // Verify active tab
    const activeTabText = await page.evaluate(() => {
      const pills = document.querySelector('.subtabs.ops-pills');
      if (pills) {
        const active = pills.querySelector('[class*="active"], [class*="-on"], .active');
        if (active) return active.textContent?.trim();
        return pills.textContent;
      }
      return 'unknown';
    });
    console.log('       子标签内容:', activeTabText);

    await page.screenshot({ path: path.join(dir, 'final_03_app_ops.png') });

    // ============ STEP 4: 滚动到专家列表表格并截图 ============
    console.log('[4/5] 滚动到专家列表表格...');

    // Scroll incrementally until expert list found OR reach bottom
    let maxScrollAttempts = 30;
    let lastY = 0;
    for (let i = 0; i < maxScrollAttempts; i++) {
      const state = await page.evaluate(() => ({
        scrollY: window.scrollY,
        maxScroll: document.body.scrollHeight - window.innerHeight,
        foundExpert: Array.from(document.querySelectorAll('*')).some(el => {
          const t = el.textContent?.trim();
          return (t === '专家列表' && el.offsetParent !== null);
        }),
        foundRoiBtn: document.querySelectorAll('.ops-roi-btn').length
      }));
      
      if ((state.foundExpert || state.foundRoiBtn > 0)) {
        console.log(`       找到专家列表/ROI按钮, scroll=${state.scrollY}/${state.maxScroll}`);
        break;
      }
      
      if (state.scrollY >= state.maxScroll && state.scrollY === lastY && i > 8) {
        console.log(`       已到达底部 (${state.scrollY}), 未找到明确标记，继续`);
        break;
      }
      lastY = state.scrollY;
      
      await page.evaluate(() => window.scrollBy(0, 500));
      await new Promise(r => setTimeout(r, 300));
    }
    
    // Now center on the expert list / ROI table
    await page.evaluate(() => {
      // Find expert list section - look for header text "专家列表"
      const all = document.querySelectorAll('h1,h2,h3,h4,div,span,caption');
      for (const el of all) {
        if (el.textContent?.trim() === '专家列表' && el.offsetParent !== null) {
          el.scrollIntoView({ block: 'center', behavior: 'smooth' });
          return;
        }
      }
      // Fallback: scroll to table with ops-roi-btn
      const btns = document.querySelectorAll('.ops-roi-btn');
      if (btns.length > 0) {
        const parentTable = btns[0].closest('table') || btns[0].parentElement?.closest('div[class*="table"], div[class*="card"]');
        if (parentTable) {
          parentTable.scrollIntoView({ block: 'center', behavior: 'smooth' });
          return;
        }
        btns[0].scrollIntoView({ block: 'center' });
      }
    });
    await new Promise(r => setTimeout(r, 2500));

    // Take ROI table screenshot
    const tableShotInfo = await page.evaluate(() => {
      const btns = document.querySelectorAll('.ops-roi-btn');
      if (btns.length > 0) {
        const table = btns[0].closest('table');
        if (table) {
          const r = table.getBoundingClientRect();
          const sx = window.scrollX;
          const sy = window.scrollY;
          return { clip: { x: r.left, y: r.top, w: r.width, h: r.height, sx, sy }, roiBtns: btns.length };
        }
        // Virtualized or div-based table
        const container = btns[0].closest('[class*="table"], [class*="card"], [class*="panel"]');
        if (container) {
          const r = container.getBoundingClientRect();
          return { clip: { x: r.left, y: r.top, w: r.width, h: r.height, sx: window.scrollX, sy: window.scrollY }, roiBtns: btns.length, divBased: true };
        }
      }
      return { roiBtns: btns.length };
    });
    
    const roiShot = path.join(dir, 'final_04_expert_list_roi.png');
    if (tableShotInfo.clip) {
      const c = tableShotInfo.clip;
      await page.screenshot({
        path: roiShot,
        clip: {
          x: Math.max(0, c.x - 30),
          y: c.y + c.sy - 50,
          width: Math.min(c.w + 60, 1440),
          height: Math.min(c.h + 100, 1200)
        }
      });
    } else {
      await page.screenshot({ path: roiShot, fullPage: true });
    }
    console.log(`       ROI截图已保存: ${roiShot} (ROI按钮数=${tableShotInfo.roiBtns})`);

    // ============ STEP 5: Verification ============
    console.log('[5/5] 执行验证...\n');
    
    const v = await page.evaluate(() => {
      const result = {
        roiButtonsTotal: 0,
        percentageCells: 0,
        firstRowRoiText: null,
        firstRowIsPct: false,
        otherRowsAllComputeBtn: true,
        otherRowsBtnCount: 0,
        expertTableRows: 0,
        headerTexts: [],
        roiColIdx: -1,
        rowDetails: []
      };

      // Find the expert list table / section
      let expertContainer = null;
      
      // Strategy 1: find section with "专家列表" text
      const headerCandidates = document.querySelectorAll('h1,h2,h3,h4,div,span,caption');
      for (const h of headerCandidates) {
        if (h.textContent?.trim() === '专家列表' && h.offsetParent !== null) {
          // Find parent with a table or row collection
          let p = h.parentElement;
          for (let j = 0; j < 6; j++) {
            if (!p) break;
            if (p.querySelector('table, .ops-roi-btn')) { expertContainer = p; break; }
            p = p.parentElement;
          }
          if (expertContainer) break;
        }
      }
      
      // Strategy 2: use table that contains .ops-roi-btn
      if (!expertContainer) {
        const t = document.querySelector('table:has(.ops-roi-btn)');
        if (t) {
          // Check nearby for 专家列表
          let p = t.parentElement;
          for (let j = 0; j < 6; j++) {
            if (!p) break;
            if (p.textContent?.includes('专家列表')) { expertContainer = p; break; }
            p = p.parentElement;
          }
          if (!expertContainer) expertContainer = t;
        }
      }
      
      // Strategy 3: any parent of .ops-roi-btn
      if (!expertContainer) {
        const btn = document.querySelector('.ops-roi-btn');
        if (btn) expertContainer = btn.closest('table, div[class*="table"], div[class*="card"]') || document.body;
      }
      
      if (!expertContainer) expertContainer = document.body;
      
      result.containerHasExpertList = expertContainer.textContent?.includes('专家列表') || false;

      // Get all rows
      const table = expertContainer.querySelector('table');
      let rows = [];
      if (table) {
        // Find header
        const headerRow = table.querySelector('thead tr, tr:first-child');
        if (headerRow) {
          const cells = headerRow.querySelectorAll('th, td');
          cells.forEach((cell, idx) => {
            const txt = (cell.textContent || '').trim();
            result.headerTexts.push(txt);
            if (/ROI|投资回报率|回报率|roi率/.test(txt)) result.roiColIdx = idx;
          });
        }
        
        rows = Array.from(table.querySelectorAll('tbody tr'));
        if (rows.length === 0) rows = Array.from(table.querySelectorAll('tr')).slice(1);
      } else {
        // Div-based table rows
        rows = Array.from(expertContainer.querySelectorAll('[class*="row"]:not([class*="header"])')).slice(0, 30);
      }
      
      result.expertTableRows = rows.length;
      
      rows.forEach((row, idx) => {
        // Get cells
        let cells = [];
        if (row.tagName === 'TR') {
          cells = Array.from(row.querySelectorAll('td, th'));
        } else {
          cells = Array.from(row.querySelectorAll('[class*="cell"], > div, > span'));
        }
        
        let roiCell = null;
        let roiText = '';
        let hasBtn = false;
        let btnText = '';
        
        // Locate ROI cell
        if (result.roiColIdx >= 0 && cells[result.roiColIdx]) {
          roiCell = cells[result.roiColIdx];
        } else {
          // Search for ROI indicators in cells
          for (const cell of cells) {
            const hasRoiBtn = cell.querySelector('.ops-roi-btn');
            const hasPct = /\d+\.?\d*\s*%/.test(cell.textContent || '') && cell.children.length <= 3;
            if (hasRoiBtn || hasPct) { roiCell = cell; break; }
          }
        }
        
        if (roiCell) {
          roiText = (roiCell.textContent || '').trim();
          const btn = roiCell.querySelector('.ops-roi-btn, button');
          if (btn) { hasBtn = true; btnText = btn.textContent.trim(); }
        }
        
        const isPct = !hasBtn && /\d+\.?\d*\s*%/.test(roiText);
        const isComputeBtn = hasBtn && (btnText.includes('计算') || roiText.includes('计算'));
        
        if (hasBtn) result.roiButtonsTotal++;
        if (isPct) result.percentageCells++;
        
        result.rowDetails.push({
          idx, roiText: roiText.substring(0, 40), isPct, hasBtn, btnText, isComputeBtn
        });
        
        if (idx === 0) {
          result.firstRowRoiText = roiText;
          result.firstRowIsPct = isPct;
        } else {
          if (isComputeBtn) result.otherRowsBtnCount++;
          if (!isComputeBtn) result.otherRowsAllComputeBtn = false;
        }
      });
      
      // Detect 93.8 in first row
      if (result.firstRowRoiText) {
        result.firstRowHas938 = /93\s*\.?\s*8/.test(result.firstRowRoiText);
      }
      
      return result;
    });
    
    console.log('========= 验证数据 =========');
    console.log('专家列表容器是否包含"专家列表":', v.containerHasExpertList);
    console.log('表头列名:', v.headerTexts.join(' | '));
    console.log('ROI列索引:', v.roiColIdx);
    console.log('数据行数:', v.expertTableRows);
    console.log('总ROI按钮数:', v.roiButtonsTotal);
    console.log('总百分比单元格数:', v.percentageCells);
    console.log('');
    console.log('--- 每行ROI详情 ---');
    v.rowDetails.forEach(r => {
      const mark = r.idx === 0 ? '【第一行】' : `  行${r.idx}  `;
      console.log(`${mark}: "${r.roiText}" | 百分比=${r.isPct} | 按钮=${r.hasBtn}${r.btnText?`(${r.btnText})`:''} | 计算按钮=${r.isComputeBtn}`);
    });
    
    console.log('\n========= 检查清单 =========');
    
    // Check 1: First row is percentage (expected ~93.8%)
    const check1 = v.firstRowIsPct;
    console.log(`${check1 ? '✅ 通过' : '❌ 失败'} 检查1: 第一行ROI显示百分比，不显示"计算"按钮`);
    console.log(`         第一行ROI: "${v.firstRowRoiText}"`);
    if (v.firstRowHas938) console.log('         ✅ 包含预期值"93.8"');
    else console.log('         ⚠️  未检测到"93.8"字样');
    
    // Check 2: Other rows ALL show "计算" button
    const check2 = v.otherRowsBtnCount > 0 && v.otherRowsAllComputeBtn !== false;
    console.log(`${check2 ? '✅ 通过' : '❌ 失败'} 检查2: 所有其他行显示"计算"按钮`);
    console.log(`         其他行=${v.expertTableRows - 1 > 0 ? v.expertTableRows - 1 : 0}行, 其中"计算"按钮=${v.otherRowsBtnCount}个, 全部为计算按钮=${v.otherRowsAllComputeBtn !== false}`);
    
    // Check 3: Console errors (excluding favicon 404)
    const check3 = consoleErrors.length === 0;
    console.log(`${check3 ? '✅ 通过' : '❌ 失败'} 检查3: 控制台无错误 (已忽略favicon 404)`);
    if (!check3) {
      consoleErrors.slice(0, 10).forEach(e => console.log(`         · [${e.type}] ${e.message || e.text}`));
    }
    
    const allPassed = check1 && check2 && check3;
    console.log(`\n总结果: ${allPassed ? '✅ 全部检查通过' : '⚠️  部分或全部检查未通过'}`);

    // Save results
    fs.writeFileSync(path.join(dir, 'final_verification.json'), JSON.stringify({
      verification: v,
      consoleErrors,
      checks: { check1, check2, check3, firstRowHas938: v.firstRowHas938, allPassed }
    }, null, 2));
    
    // Save final screenshot of table area
    await page.screenshot({ path: path.join(dir, 'final_05_fullpage.png'), fullPage: true });

  } catch (err) {
    console.error('\n❌ 执行出错:', err.message);
    console.error(err.stack);
    try { await page.screenshot({ path: path.join(dir, 'final_ERROR.png'), fullPage: true }); } catch(e) {}
  } finally {
    await browser.close();
    console.log('\n任务结束。');
  }
})();

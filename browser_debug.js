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

  // Log ALL console messages
  page.on('console', msg => console.log('[CONSOLE]', msg.type(), msg.text()));
  page.on('pageerror', err => console.log('[PAGEERROR]', err.message));

  const dir = '/workspace/screenshots';
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  try {
    console.log('=== Navigating ===');
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2', timeout: 30000 });
    await page.reload({ waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(r => setTimeout(r, 3000));

    // Save full HTML
    const html1 = await page.content();
    fs.writeFileSync(path.join(dir, 'debug_home.html'), html1);
    console.log('Saved home HTML, length:', html1.length);
    
    // Get sidebar structure
    const sidebarInfo = await page.evaluate(() => {
      const info = {};
      
      // Find sidebar elements
      const sidebarSelectors = [
        'aside', '.sidebar', '.aside', '.menu', '[class*="sidebar"]', '[class*="aside"]', '[class*="menu"]', 'nav'
      ];
      
      for (const sel of sidebarSelectors) {
        const els = document.querySelectorAll(sel);
        if (els.length > 0) {
          info[`selector:${sel}`] = {
            count: els.length,
            samples: Array.from(els).slice(0,3).map(el => ({
              tag: el.tagName,
              class: el.className,
              html: el.outerHTML.substring(0, 500),
              text: el.innerText?.substring(0, 300)
            }))
          };
        }
      }
      
      // Find 系统管理 element specifically
      const allElements = document.querySelectorAll('*');
      const systemManage = [];
      allElements.forEach((el, idx) => {
        const t = (el.innerText || el.textContent || '').trim();
        if (t === '系统管理' || (t.length < 30 && t.includes('系统管理'))) {
          const style = window.getComputedStyle(el);
          let parentChain = [];
          let p = el.parentElement;
          for (let i = 0; i < 5; i++) {
            if (!p) break;
            parentChain.push({ tag: p.tagName, class: p.className?.toString().substring(0, 100) });
            p = p.parentElement;
          }
          systemManage.push({
            tag: el.tagName,
            class: el.className?.toString(),
            text: t,
            childrenCount: el.children.length,
            innerTextLen: el.innerText?.length || 0,
            visible: style.display !== 'none' && style.visibility !== 'hidden' && el.offsetParent !== null,
            parentChain
          });
        }
      });
      info.systemManageElements = systemManage.slice(0, 10);
      
      // Find menu items with data attributes or classes
      const menuItems = document.querySelectorAll('[class*="menu-item"], [class*="el-menu"], li[role="menuitem"]');
      info.menuItems = Array.from(menuItems).slice(0, 20).map(el => ({
        tag: el.tagName,
        class: el.className?.toString().substring(0, 150),
        text: el.innerText?.trim().substring(0, 50),
        attrs: {
          role: el.getAttribute('role'),
          'aria-haspopup': el.getAttribute('aria-haspopup'),
          'data-index': el.getAttribute('data-index'),
          onclick: el.getAttribute('onclick')
        }
      }));
      
      // Find 系统管理 parent with submenu pattern
      const submenus = document.querySelectorAll('[class*="submenu"], [aria-haspopup="true"]');
      info.submenus = Array.from(submenus).slice(0,10).map(el => ({
        tag: el.tagName,
        class: el.className?.toString().substring(0, 200),
        text: el.innerText?.trim().substring(0, 100),
        children: el.children.length
      }));
      
      return info;
    });
    
    console.log('\n=== SIDEBAR DEBUG INFO ===');
    console.log(JSON.stringify(sidebarInfo, null, 2));
    
    // Try clicking 系统管理 with precise element targeting
    console.log('\n=== ATTEMPTING PRECISE CLICKS ===');
    
    // Strategy: find el-submenu that contains 系统管理
    const clickResult1 = await page.evaluate(() => {
      // Element UI submenu pattern
      const elSubmenus = document.querySelectorAll('.el-submenu, [class*="el-submenu"]');
      for (const sm of elSubmenus) {
        if (sm.innerText && sm.innerText.includes('系统管理')) {
          // Click the title part (first child with .el-submenu__title or similar)
          const title = sm.querySelector('[class*="submenu__title"], [class*="-title"]');
          if (title) {
            title.click();
            return { clicked: 'submenu-title', element: sm.className, titleText: title.innerText };
          }
          sm.click();
          return { clicked: 'submenu-direct', element: sm.className };
        }
      }
      
      // Try li with role menuitem
      const menuLis = document.querySelectorAll('li[role="menuitem"]');
      for (const li of menuLis) {
        if (li.innerText && li.innerText.includes('系统管理')) {
          const aria = li.getAttribute('aria-haspopup');
          if (aria === 'true') {
            li.click();
            return { clicked: 'li-menuitem-popup', class: li.className };
          }
        }
      }
      
      // Try clickable span/div with 系统管理
      const elems = document.querySelectorAll('div, span, li, a');
      for (const el of elems) {
        const text = (el.innerText || '').trim();
        if (text === '系统管理') {
          const parent = el.closest('[class*="submenu"], [class*="menu"]');
          if (parent) {
            parent.click();
            return { clicked: 'closest-menu-parent', parentClass: parent.className, targetText: text };
          }
          el.click();
          return { clicked: 'direct-element', elTag: el.tagName, elClass: el.className };
        }
      }
      
      return { clicked: 'none' };
    });
    console.log('系统管理 click result:', JSON.stringify(clickResult1));
    
    await new Promise(r => setTimeout(r, 2000));
    
    // Now check if submenu items (数据监控) appeared
    const subMenuVisible = await page.evaluate(() => {
      const results = [];
      const elems = document.querySelectorAll('*');
      elems.forEach(el => {
        const text = (el.innerText || el.textContent || '').trim();
        if (text === '数据监控' || text.includes('数据监控')) {
          const style = window.getComputedStyle(el);
          results.push({
            tag: el.tagName,
            class: el.className?.toString().substring(0, 150),
            text: text.substring(0, 50),
            visible: style.display !== 'none' && style.visibility !== 'hidden' && el.offsetParent !== null,
            display: style.display,
            offsetParent: el.offsetParent?.tagName
          });
        }
      });
      return results;
    });
    console.log('\n数据监控 elements found:', JSON.stringify(subMenuVisible, null, 2));
    
    // Try clicking 数据监控
    const clickResult2 = await page.evaluate(() => {
      const elems = document.querySelectorAll('li, a, span, div');
      for (const el of elems) {
        const text = (el.innerText || el.textContent || '').trim();
        if (text === '数据监控') {
          const style = window.getComputedStyle(el);
          if (style.display !== 'none' && style.visibility !== 'hidden' && el.offsetParent !== null) {
            // Find clickable parent or click self
            const menuItem = el.closest('[class*="menu-item"], [role="menuitem"], li[class*="item"]');
            if (menuItem) {
              menuItem.click();
              return { clicked: 'menu-item', class: menuItem.className?.toString(), text: menuItem.innerText?.trim().substring(0,50) };
            }
            el.click();
            return { clicked: 'direct', tag: el.tagName, class: el.className };
          }
        }
      }
      
      // Also check if it's a hidden element with transform/height animation
      const all = document.querySelectorAll('*');
      for (const el of all) {
        if (el.textContent && el.textContent.includes('数据监控') && el.children.length === 0) {
          const p = el.parentElement;
          if (p) {
            p.click();
            return { clicked: 'parent-of-text-only', parentClass: p.className?.toString() };
          }
        }
      }
      
      return { clicked: 'none' };
    });
    console.log('数据监控 click result:', JSON.stringify(clickResult2));
    
    await new Promise(r => setTimeout(r, 3000));
    
    // Check URL and page change
    const currentUrl = page.url();
    const pageText = await page.evaluate(() => document.body.innerText.substring(0, 2000));
    console.log('\nCurrent URL:', currentUrl);
    console.log('Page text sample:', pageText.substring(0, 800));
    
    // Now look for "应用运营总览" tab
    const appOpsTab = await page.evaluate(() => {
      const results = [];
      const elems = document.querySelectorAll('div, span, li, a');
      elems.forEach(el => {
        const text = (el.innerText || '').trim();
        if (text === '应用运营总览' || text.includes('应用运营总览')) {
          const style = window.getComputedStyle(el);
          results.push({
            tag: el.tagName,
            class: el.className?.toString().substring(0, 200),
            text: text.substring(0, 50),
            visible: style.display !== 'none' && style.visibility !== 'hidden' && el.offsetParent !== null,
            role: el.getAttribute('role'),
            tabIndex: el.getAttribute('tabindex')
          });
        }
      });
      
      // Also check tabpane/tab structures
      const tabs = document.querySelectorAll('[role="tab"], [class*="tabs"] [class*="item"], [class*="-tab"]');
      const tabInfo = Array.from(tabs).slice(0, 15).map(t => ({
        tag: t.tagName,
        class: t.className?.toString().substring(0, 200),
        text: t.innerText?.trim().substring(0, 50),
        id: t.id
      }));
      
      return { candidates: results.slice(0, 10), tabStructures: tabInfo };
    });
    console.log('\n应用运营总览 tab candidates:', JSON.stringify(appOpsTab, null, 2));
    
    // Save HTML after navigation attempts
    const html2 = await page.content();
    fs.writeFileSync(path.join(dir, 'debug_after_clicks.html'), html2);
    await page.screenshot({ path: path.join(dir, 'debug_after_clicks.png'), fullPage: true });
    
    console.log('\nSaved debug HTML + screenshot');

  } catch (err) {
    console.error('ERROR:', err.message);
    console.error(err.stack);
  } finally {
    await browser.close();
  }
})();

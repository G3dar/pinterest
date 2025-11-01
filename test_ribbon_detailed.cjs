const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set up console logging
  const consoleLogs = [];
  page.on('console', msg => {
    consoleLogs.push({
      type: msg.type(),
      text: msg.text(),
      location: msg.location()
    });
  });

  page.on('pageerror', err => {
    consoleLogs.push({
      type: 'error',
      text: err.toString(),
      location: 'page error'
    });
  });

  try {
    console.log('Navigating to localhost:3102...');
    await page.goto('http://localhost:3102', { waitUntil: 'networkidle2', timeout: 30000 });

    console.log('Page loaded. Waiting for console messages...');
    await new Promise(r => setTimeout(r, 3000));

    // Take screenshot before button click
    console.log('\nTaking screenshot before button click...');
    await page.screenshot({ path: '/tmp/before_click.png' });

    // Get HTML structure before click
    const htmlBefore = await page.evaluate(() => {
      return document.body.innerHTML.substring(0, 5000);
    });

    // Click button that contains "Your Pinterest Pulse 2025"
    console.log('Clicking "Your Pinterest Pulse 2025" button...');
    const clicked = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const target = buttons.find(b => b.textContent.includes('Your Pinterest Pulse 2025'));
      if (target) {
        console.log('Found and clicking button');
        target.click();
        return true;
      }
      return false;
    });

    if (!clicked) {
      console.log('ERROR: Button not found');
      process.exit(1);
    }

    console.log('Button clicked. Waiting for animation...');
    await new Promise(r => setTimeout(r, 5000));

    // Take screenshot after button click
    console.log('Taking screenshot after button click...');
    await page.screenshot({ path: '/tmp/after_click.png' });

    // Get HTML structure after click
    const htmlAfter = await page.evaluate(() => {
      return document.body.innerHTML;
    });

    // Look for ribbon elements with various selectors
    const ribbonInfo = await page.evaluate(() => {
      const results = {
        ribbonClass: document.querySelectorAll('[class*="ribbon"]').length,
        svgElements: document.querySelectorAll('svg').length,
        animationElements: document.querySelectorAll('[class*="animation"]').length,
        decorElements: document.querySelectorAll('[class*="decor"]').length,
        allDivs: document.querySelectorAll('div').length
      };

      // Get all visible elements with "ribbon" in any attribute
      const allRibbon = [];
      document.querySelectorAll('*').forEach(el => {
        if (el.className.toString().includes('ribbon') ||
            el.id.toString().includes('ribbon') ||
            el.getAttribute('data-test')?.includes('ribbon')) {
          allRibbon.push({
            tag: el.tagName,
            className: el.className,
            id: el.id,
            innerHTML: el.innerHTML.substring(0, 100)
          });
        }
      });

      return { ...results, allRibbon };
    });

    console.log('\nRibbon investigation results:');
    console.log(JSON.stringify(ribbonInfo, null, 2));

    // Look for animated elements
    const animated = await page.evaluate(() => {
      const elements = document.querySelectorAll('*');
      const animatedList = [];
      elements.forEach(el => {
        const styles = window.getComputedStyle(el);
        if (styles.animation && styles.animation !== 'none') {
          animatedList.push({
            tag: el.tagName,
            className: el.className,
            animation: styles.animation
          });
        }
      });
      return animatedList;
    });

    console.log('\nAnimated elements:');
    console.log(JSON.stringify(animated, null, 2));

    // Look for SVG elements with colors
    const svgElements = await page.evaluate(() => {
      const svgs = Array.from(document.querySelectorAll('svg'));
      const info = [];
      svgs.forEach((svg, idx) => {
        const rect = svg.getBoundingClientRect();
        const paths = Array.from(svg.querySelectorAll('path, rect, circle, line, polyline'));
        info.push({
          index: idx,
          className: svg.className.baseVal || svg.className,
          width: svg.width.baseVal?.value || svg.getAttribute('width'),
          height: svg.height.baseVal?.value || svg.getAttribute('height'),
          paths: paths.length,
          isVisible: rect.width > 0 && rect.height > 0,
          fills: paths.map(p => p.getAttribute('fill') || p.getAttribute('stroke')).slice(0, 3)
        });
      });
      return info;
    });

    console.log('\nSVG Elements found:');
    console.log(JSON.stringify(svgElements, null, 2));

    // Print all console logs
    console.log('\n=== CONSOLE LOGS ===');
    if (consoleLogs.length === 0) {
      console.log('No console messages captured');
    } else {
      consoleLogs.forEach(log => {
        const typeStr = log.type.toUpperCase();
        console.log('[' + typeStr + '] ' + log.text);
      });
    }

    const errorCount = consoleLogs.filter(l => l.type === 'error').length;
    console.log('\nTotal errors detected: ' + errorCount);
    console.log('\nScreenshots saved to /tmp/before_click.png and /tmp/after_click.png');

  } catch (error) {
    console.error('Error during test:', error.message);
    console.error(error);
  }

  await browser.close();
})();

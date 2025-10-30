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

    // Look for the button and click it
    console.log('Looking for "Your PinWrap 2025" button...');
    const buttons = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('button')).map(b => ({
        text: b.textContent.trim(),
        classes: b.className
      }));
    });

    console.log('Buttons found on page:');
    buttons.forEach(b => console.log('  - ' + JSON.stringify(b)));

    // Click button that contains "Your PinWrap 2025"
    const clicked = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const target = buttons.find(b => b.textContent.includes('Your PinWrap 2025'));
      if (target) {
        target.click();
        return true;
      }
      return false;
    });

    if (clicked) {
      console.log('Button clicked successfully');
    } else {
      console.log('Button not found - listing all button text:');
      const allText = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('button')).map(b => b.textContent);
      });
      allText.forEach(t => console.log('  ' + t));
    }

    console.log('Waiting for animation to play...');
    await new Promise(r => setTimeout(r, 3000));

    // Get ribbon element info
    const ribbonInfo = await page.evaluate(() => {
      const ribbons = document.querySelectorAll('[class*="ribbon"]');
      const info = [];
      ribbons.forEach((ribbon, idx) => {
        const styles = window.getComputedStyle(ribbon);
        info.push({
          index: idx,
          element: ribbon.className,
          backgroundColor: styles.backgroundColor,
          fill: styles.fill,
          color: styles.color,
          display: styles.display,
          opacity: styles.opacity,
          visible: styles.display !== 'none'
        });
      });
      return info;
    });

    console.log('\nRibbon elements found:');
    if (ribbonInfo.length === 0) {
      console.log('  No ribbon elements found');
    } else {
      ribbonInfo.forEach(r => console.log('  ' + JSON.stringify(r, null, 2)));
    }

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

  } catch (error) {
    console.error('Error during test:', error.message);
    console.error(error);
  }

  await browser.close();
})();

const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
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
    console.log('Navigating to localhost:3102 (HomePage)...');
    await page.goto('http://localhost:3102/', { waitUntil: 'networkidle2', timeout: 30000 });

    console.log('Home page loaded. Waiting for page to settle...');
    await new Promise(r => setTimeout(r, 3000));

    // Take screenshot before button click
    console.log('\nTaking screenshot before button click...');
    await page.screenshot({ path: '/tmp/homepage_before.png', fullPage: true });

    // Look for the "Your PinWrap 2025" button
    console.log('Looking for "Your PinWrap 2025" button...');
    const buttonFound = await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const target = buttons.find(b => b.textContent.includes('Your PinWrap 2025'));
      if (target) {
        console.log('Button found! Text:', target.textContent);
        console.log('Button classes:', target.className);
        const rect = target.getBoundingClientRect();
        console.log('Button position:', { x: rect.x, y: rect.y, width: rect.width, height: rect.height });
        return true;
      }
      return false;
    });

    if (!buttonFound) {
      console.log('ERROR: "Your PinWrap 2025" button not found!');
      process.exit(1);
    }

    console.log('Clicking the "Your PinWrap 2025" button...');
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll('button'));
      const target = buttons.find(b => b.textContent.includes('Your PinWrap 2025'));
      if (target) {
        target.click();
        console.log('Button clicked in page context');
      }
    });

    console.log('Button clicked. Waiting for wrap transition animation...');
    // Wait for animation to play
    await new Promise(r => setTimeout(r, 1000));

    // Take screenshot during animation
    console.log('Taking screenshot at 1 second...');
    await page.screenshot({ path: '/tmp/homepage_wrapping_1s.png', fullPage: true });

    await new Promise(r => setTimeout(r, 1000));

    // Take screenshot at 2 seconds
    console.log('Taking screenshot at 2 seconds...');
    await page.screenshot({ path: '/tmp/homepage_wrapping_2s.png', fullPage: true });

    // Check for ribbon elements
    console.log('\nChecking for ribbon elements during animation...');
    const ribbonInfo = await page.evaluate(() => {
      const ribbons = document.querySelectorAll('[class*="ribbon"]');
      const info = [];
      ribbons.forEach((ribbon, idx) => {
        const styles = window.getComputedStyle(ribbon);
        const rect = ribbon.getBoundingClientRect();
        info.push({
          index: idx,
          className: ribbon.className,
          backgroundColor: styles.backgroundColor,
          fill: styles.fill,
          opacity: styles.opacity,
          display: styles.display,
          visible: styles.display !== 'none',
          position: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
          rgb: styles.backgroundColor
        });
      });
      return info;
    });

    if (ribbonInfo.length > 0) {
      console.log('\nRibbon elements found:');
      ribbonInfo.forEach(r => {
        console.log(`  Ribbon ${r.index}:`);
        console.log(`    Class: ${r.className}`);
        console.log(`    Background Color: ${r.backgroundColor}`);
        console.log(`    Opacity: ${r.opacity}`);
        console.log(`    Visible: ${r.visible}`);
        console.log(`    Position: ${JSON.stringify(r.position)}`);
      });

      // Check if colors match the softer gold
      const softGoldMatch = ribbonInfo.some(r =>
        r.backgroundColor.includes('rgb') &&
        (r.backgroundColor.includes('255, 200, 100') ||
         r.backgroundColor.includes('255, 210, 120') ||
         r.backgroundColor.includes('255, 220, 140'))
      );

      if (softGoldMatch) {
        console.log('\n✓ SUCCESS: Ribbons appear with softer, less intense yellow/gold color!');
        console.log('  Color range detected: rgba(255, 200-220, 100-140, 0.85-1)');
      } else {
        console.log('\n⚠ WARNING: Ribbon colors detected but may not match expected soft gold:');
        ribbonInfo.forEach(r => console.log(`  - ${r.backgroundColor}`));
      }
    } else {
      console.log('\n✗ No ribbon elements found during animation');
      console.log('Animation may have already completed or ribbons not rendered');
    }

    // Check for animation elements
    const animated = await page.evaluate(() => {
      const elements = document.querySelectorAll('[class*="wrap"]');
      const info = [];
      elements.forEach(el => {
        const styles = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          info.push({
            className: el.className,
            display: styles.display,
            opacity: styles.opacity,
            transform: styles.transform,
            visible: styles.display !== 'none' && parseFloat(styles.opacity) > 0
          });
        }
      });
      return info;
    });

    if (animated.length > 0) {
      console.log('\nWrap animation elements detected:');
      animated.forEach(a => {
        console.log(`  - ${a.className} (opacity: ${a.opacity}, visible: ${a.visible})`);
      });
    }

    // Print all console logs
    console.log('\n=== CONSOLE LOGS ===');
    const errors = consoleLogs.filter(l => l.type === 'error');
    const warnings = consoleLogs.filter(l => l.type === 'warn');
    const others = consoleLogs.filter(l => l.type !== 'error' && l.type !== 'warn');

    if (errors.length > 0) {
      console.log('\nERRORS:');
      errors.forEach(log => {
        console.log(`  [${log.type.toUpperCase()}] ${log.text}`);
      });
    }

    if (warnings.length > 0) {
      console.log('\nWARNINGS:');
      warnings.forEach(log => {
        console.log(`  [${log.type.toUpperCase()}] ${log.text}`);
      });
    }

    if (others.length > 0) {
      console.log('\nOTHER MESSAGES:');
      others.slice(0, 10).forEach(log => {
        console.log(`  [${log.type.toUpperCase()}] ${log.text}`);
      });
    }

    console.log(`\nTotal console messages: ${consoleLogs.length}`);
    console.log(`Total errors: ${errors.length}`);
    console.log(`Total warnings: ${warnings.length}`);

    console.log('\nScreenshots saved to:');
    console.log('  /tmp/homepage_before.png');
    console.log('  /tmp/homepage_wrapping_1s.png');
    console.log('  /tmp/homepage_wrapping_2s.png');

  } catch (error) {
    console.error('Error during test:', error.message);
    console.error(error);
  }

  await new Promise(r => setTimeout(r, 2000));
  await browser.close();
})();

import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Collect console messages
  const consoleMessages = [];
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    const location = msg.location();
    consoleMessages.push({
      type,
      text,
      location,
      timestamp: new Date().toISOString()
    });
    console.log(`[${type.toUpperCase()}] ${text}`);
  });

  // Collect page errors
  page.on('pageerror', error => {
    console.log(`[PAGE ERROR] ${error.message}`);
    consoleMessages.push({
      type: 'error',
      text: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString()
    });
  });

  // Monitor network failures
  page.on('requestfailed', request => {
    console.log(`[NETWORK FAILED] ${request.url()} - ${request.failure().errorText}`);
  });

  console.log('🌐 Navigating to http://localhost:3100/wrapped/prototype');
  await page.goto('http://localhost:3100/wrapped/prototype', { waitUntil: 'networkidle' });

  console.log('📊 Page loaded. Monitoring for 20 seconds to observe Phase 2->3 transition at 15s mark...\n');

  // Take screenshots at key moments
  console.log('⏱️  t=0s: Initial load');
  await page.screenshot({ path: 'C:\\Users\\ghell\\pinterest_complete_brief\\screenshot_0s.png' });

  await page.waitForTimeout(5000);
  console.log('⏱️  t=5s: Mid Phase 1/2');

  await page.waitForTimeout(5000);
  console.log('⏱️  t=10s: Approaching Phase 2->3 transition');

  await page.waitForTimeout(3000);
  console.log('⏱️  t=13s: Just before transition');
  await page.screenshot({ path: 'C:\\Users\\ghell\\pinterest_complete_brief\\screenshot_13s.png' });

  await page.waitForTimeout(2000);
  console.log('⏱️  t=15s: PHASE 2->3 TRANSITION SHOULD BE HAPPENING NOW');
  await page.screenshot({ path: 'C:\\Users\\ghell\\pinterest_complete_brief\\screenshot_15s.png' });

  await page.waitForTimeout(2000);
  console.log('⏱️  t=17s: After transition completes');
  await page.screenshot({ path: 'C:\\Users\\ghell\\pinterest_complete_brief\\screenshot_17s.png' });

  await page.waitForTimeout(3000);
  console.log('⏱️  t=20s: Monitoring complete\n');

  // Analyze the transition elements
  console.log('🔍 Analyzing transition elements...\n');

  const transitionInfo = await page.evaluate(() => {
    // Look for phase indicators
    const body = document.body;
    const computedStyle = window.getComputedStyle(body);

    // Check for canvas elements (ripple effects)
    const canvases = Array.from(document.querySelectorAll('canvas')).map(c => ({
      id: c.id,
      class: c.className,
      width: c.width,
      height: c.height,
      visible: c.style.display !== 'none'
    }));

    // Check for phase-related elements
    const phaseElements = Array.from(document.querySelectorAll('[class*="phase"], [id*="phase"]')).map(el => ({
      tag: el.tagName,
      id: el.id,
      class: el.className,
      display: window.getComputedStyle(el).display
    }));

    // Get background info
    const background = computedStyle.background || computedStyle.backgroundColor;

    return {
      canvases,
      phaseElements,
      background,
      bodyClasses: body.className,
      performanceMetrics: {
        navigation: performance.getEntriesByType('navigation')[0],
        resources: performance.getEntriesByType('resource').length
      }
    };
  });

  console.log('Canvas elements found:', JSON.stringify(transitionInfo.canvases, null, 2));
  console.log('Phase elements found:', JSON.stringify(transitionInfo.phaseElements, null, 2));
  console.log('Background:', transitionInfo.background);
  console.log('\n📋 Console Messages Summary:');
  console.log(`Total messages: ${consoleMessages.length}`);

  const errorMessages = consoleMessages.filter(m => m.type === 'error');
  const warningMessages = consoleMessages.filter(m => m.type === 'warning');
  const infoMessages = consoleMessages.filter(m => m.type === 'log' || m.type === 'info');

  if (errorMessages.length > 0) {
    console.log(`\n🔴 ERRORS (${errorMessages.length}):`);
    errorMessages.forEach(m => console.log(`  - ${m.text}`));
  }

  if (warningMessages.length > 0) {
    console.log(`\n🟡 WARNINGS (${warningMessages.length}):`);
    warningMessages.forEach(m => console.log(`  - ${m.text}`));
  }

  if (infoMessages.length > 0) {
    console.log(`\n🔵 INFO/LOG (${infoMessages.length}):`);
    infoMessages.slice(0, 10).forEach(m => console.log(`  - ${m.text}`));
    if (infoMessages.length > 10) {
      console.log(`  ... and ${infoMessages.length - 10} more`);
    }
  }

  console.log('\n✅ Observation complete. Browser will remain open for 10 seconds for manual inspection...');
  await page.waitForTimeout(10000);

  await browser.close();
  console.log('Browser closed.');
})();

import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  const consoleMessages = [];
  const errors = [];
  const warnings = [];

  // Capture all console messages
  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    consoleMessages.push({ type, text });

    if (type === 'error') {
      errors.push(text);
    } else if (type === 'warning') {
      warnings.push(text);
    }
  });

  // Capture page errors
  page.on('pageerror', error => {
    errors.push(`PAGE ERROR: ${error.message}\n${error.stack}`);
  });

  console.log('🌐 Navigating to http://localhost:3106/');
  await page.goto('http://localhost:3106/', { waitUntil: 'networkidle' });

  // Check for loader elements
  console.log('\n📊 Checking loader elements...');

  const loaderVisible = await page.locator('[class*="loader"]').first().isVisible().catch(() => false);
  console.log('Loader container visible: ' + loaderVisible);

  // Check for Pinterest logo
  const logoExists = await page.locator('img[alt*="Pinterest"], svg').first().isVisible({ timeout: 2000 }).catch(() => false);
  console.log('Pinterest logo found: ' + logoExists);

  // Check for "Preparing your feed" text
  const preparingText = await page.getByText(/preparing your feed/i).isVisible({ timeout: 2000 }).catch(() => false);
  console.log('"Preparing your feed" text found: ' + preparingText);

  // Check for progress bar
  const progressBar = await page.locator('[class*="progress"], [role="progressbar"]').first().isVisible({ timeout: 2000 }).catch(() => false);
  console.log('Progress bar found: ' + progressBar);

  // Check for percentage
  const percentageText = await page.locator('text=/%|%/').first().isVisible({ timeout: 2000 }).catch(() => false);
  console.log('Percentage indicator found: ' + percentageText);

  // Wait and monitor for changes
  console.log('\n⏱️ Monitoring loader behavior for 5 seconds...');
  await page.waitForTimeout(5000);

  // Check if loader disappeared
  const loaderStillVisible = await page.locator('[class*="loader"]').first().isVisible().catch(() => false);
  console.log('Loader still visible after 5s: ' + loaderStillVisible);

  // Check if main content is visible
  const mainContentVisible = await page.locator('main, [class*="masonry"], [class*="gallery"]').first().isVisible().catch(() => false);
  console.log('Main content visible: ' + mainContentVisible);

  // Report console output
  console.log('\n📋 CONSOLE OUTPUT:');
  console.log('Total messages: ' + consoleMessages.length);
  console.log('Errors: ' + errors.length);
  console.log('Warnings: ' + warnings.length);

  if (errors.length > 0) {
    console.log('\n🔴 ERRORS DETECTED:');
    for (let i = 0; i < errors.length; i++) {
      console.log((i + 1) + '. ' + errors[i]);
    }
  }

  if (warnings.length > 0) {
    console.log('\n🟡 WARNINGS DETECTED:');
    for (let i = 0; i < warnings.length; i++) {
      console.log((i + 1) + '. ' + warnings[i]);
    }
  }

  if (consoleMessages.length > 0) {
    console.log('\n🔵 ALL CONSOLE MESSAGES:');
    for (let i = 0; i < consoleMessages.length; i++) {
      console.log((i + 1) + '. [' + consoleMessages[i].type.toUpperCase() + '] ' + consoleMessages[i].text);
    }
  }

  await page.waitForTimeout(2000);
  await browser.close();
})();

import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  const consoleMessages = [];
  const errors = [];
  const warnings = [];
  const percentages = [];

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
  console.log('⏱️  Starting timer to monitor loader progression...\n');

  const startTime = Date.now();
  await page.goto('http://localhost:3106/');

  // Monitor loader progression
  console.log('📊 LOADER ELEMENT CHECKS:');

  // Check loader container
  const loaderElement = page.locator('[class*="loader"]').first();
  const loaderVisible = await loaderElement.isVisible().catch(() => false);
  console.log('✓ Loader container visible: ' + loaderVisible);

  // Check Pinterest logo
  const logo = page.locator('img[alt*="Pinterest"], svg[class*="logo"]').first();
  const logoVisible = await logo.isVisible({ timeout: 1000 }).catch(() => false);
  console.log('✓ Pinterest logo visible: ' + logoVisible);

  // Check "Preparing your feed" text
  const preparingText = await page.getByText(/preparing your feed/i).isVisible({ timeout: 1000 }).catch(() => false);
  console.log('✓ "Preparing your feed" text visible: ' + preparingText);

  // Check progress bar
  const progressBar = page.locator('[class*="progress"]').first();
  const progressVisible = await progressBar.isVisible({ timeout: 1000 }).catch(() => false);
  console.log('✓ Progress bar visible: ' + progressVisible);

  // Monitor percentage changes
  console.log('\n📈 TRACKING PERCENTAGE PROGRESSION:');
  let previousPercentage = -1;
  let sampleCount = 0;

  // Sample percentage 10 times over 5 seconds
  for (let i = 0; i < 10; i++) {
    const percentageElement = page.locator('text=/\\d+%/').first();
    const percentText = await percentageElement.textContent({ timeout: 500 }).catch(() => null);

    if (percentText) {
      const currentPercentage = parseInt(percentText);
      if (currentPercentage !== previousPercentage) {
        const elapsed = Date.now() - startTime;
        console.log(`  ${elapsed}ms: ${percentText}`);
        percentages.push({ time: elapsed, value: currentPercentage });
        previousPercentage = currentPercentage;
        sampleCount++;
      }
    }

    await page.waitForTimeout(500);
  }

  console.log('\n✓ Progress percentage updates detected: ' + (sampleCount > 1));

  // Check if loader disappeared
  console.log('\n🎭 CHECKING FADE OUT BEHAVIOR:');
  const loaderStillVisible = await loaderElement.isVisible().catch(() => false);
  console.log('✓ Loader disappeared after loading: ' + !loaderStillVisible);

  // Check if main content is visible
  const mainContent = page.locator('main, [class*="masonry"], [class*="gallery"]').first();
  const contentVisible = await mainContent.isVisible().catch(() => false);
  console.log('✓ Main content visible after loader: ' + contentVisible);

  // Check for fade-in animation on main content
  const contentOpacity = await mainContent.evaluate(el => {
    return window.getComputedStyle(el).opacity;
  }).catch(() => '1');
  console.log('✓ Main content opacity: ' + contentOpacity);

  // Get loader styles to check for transitions
  if (loaderStillVisible) {
    const loaderStyles = await loaderElement.evaluate(el => {
      const styles = window.getComputedStyle(el);
      return {
        opacity: styles.opacity,
        transition: styles.transition,
        display: styles.display
      };
    }).catch(() => null);

    if (loaderStyles) {
      console.log('  Loader opacity: ' + loaderStyles.opacity);
      console.log('  Loader transition: ' + loaderStyles.transition);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('📋 CONSOLE OUTPUT SUMMARY:');
  console.log('='.repeat(50));
  console.log('Total messages: ' + consoleMessages.length);
  console.log('Errors: ' + errors.length);
  console.log('Warnings: ' + warnings.length);

  if (errors.length > 0) {
    console.log('\n🔴 ERRORS:');
    for (let i = 0; i < errors.length; i++) {
      console.log((i + 1) + '. ' + errors[i]);
    }
  }

  if (warnings.length > 0) {
    console.log('\n🟡 WARNINGS:');
    for (let i = 0; i < warnings.length; i++) {
      console.log((i + 1) + '. ' + warnings[i]);
    }
  }

  // Test results summary
  console.log('\n' + '='.repeat(50));
  console.log('✅ TEST RESULTS SUMMARY:');
  console.log('='.repeat(50));
  console.log('1. Beautiful loader appears: ' + (loaderVisible ? 'PASS' : 'FAIL'));
  console.log('2. Pinterest logo visible: ' + (logoVisible ? 'PASS' : 'FAIL'));
  console.log('3. "Preparing your feed" text: ' + (preparingText ? 'PASS' : 'FAIL'));
  console.log('4. Progress bar visible: ' + (progressVisible ? 'PASS' : 'FAIL'));
  console.log('5. Percentage increases: ' + (sampleCount > 1 ? 'PASS' : 'FAIL'));
  console.log('6. Loader fades out: ' + (!loaderStillVisible ? 'PASS' : 'FAIL'));
  console.log('7. Main content visible: ' + (contentVisible ? 'PASS' : 'FAIL'));
  console.log('8. No critical errors: ' + (errors.length === 0 ? 'PASS' : 'WARN'));

  await page.waitForTimeout(2000);
  await browser.close();
})();

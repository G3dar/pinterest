const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const errors = [];
  const warnings = [];
  const infos = [];

  const resourceErrors = [];

  page.on('console', msg => {
    const text = msg.text();
    const type = msg.type();

    if (type === 'error') {
      errors.push(text);
      console.log('ERROR:', text);
    } else if (type === 'warning') {
      warnings.push(text);
      console.log('WARNING:', text);
    } else {
      infos.push(text);
      console.log('[' + type + ']', text);
    }
  });

  page.on('pageerror', error => {
    errors.push(error.message);
    console.log('PAGE ERROR:', error.message);
  });

  page.on('response', response => {
    if (response.status() >= 400) {
      const url404 = response.url();
      resourceErrors.push({url: url404, status: response.status()});
      console.log(`${response.status()} ERROR:`, url404);
    }
  });

  page.on('requestfailed', request => {
    const failureText = request.failure()?.errorText || 'Unknown error';
    resourceErrors.push({url: request.url(), error: failureText});
    console.log('REQUEST FAILED:', request.url(), failureText);
  });

  console.log('Navigating to http://localhost:5173/wrapped/prototype');
  await page.goto('http://localhost:5173/wrapped/prototype');
  console.log('Monitoring for 25 seconds (Phase 2 at 5s, Carousel at 10-15s)\\n');

  await page.waitForTimeout(25000);

  console.log('\\n' + '='.repeat(60));
  console.log('RESULTS');
  console.log('='.repeat(60));
  console.log('Errors:', errors.length);
  console.log('Warnings:', warnings.length);

  if (errors.length > 0) {
    console.log('\\nERRORS:');
    errors.forEach(e => console.log('  -', e));
  }

  const hasKeyframeError = errors.some(e => e.includes('keyframe'));
  console.log('\\nKeyframe error present:', hasKeyframeError ? 'YES - NOT FIXED' : 'NO - FIXED!');

  if (resourceErrors.length > 0) {
    console.log('\\nResource Errors:');
    resourceErrors.forEach(err => {
      if (err.status) {
        console.log(`  - [${err.status}] ${err.url}`);
      } else {
        console.log(`  - [FAILED] ${err.url}: ${err.error}`);
      }
    });
  }

  await page.waitForTimeout(3000);
  await browser.close();
})();
import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  console.log('🌐 Navigating to http://localhost:3106/');
  await page.goto('http://localhost:3106/');

  // Wait a tiny bit to see the loader
  await page.waitForTimeout(200);

  // Take screenshot of loader
  await page.screenshot({ path: 'C:\\Users\\ghell\\pinterest_complete_brief\\loader-screenshot.png' });
  console.log('📸 Screenshot saved to loader-screenshot.png');

  // Get the HTML structure of the loader
  const loaderHTML = await page.locator('[class*="loader"]').first().innerHTML().catch(() => null);
  console.log('\n📝 LOADER HTML STRUCTURE:');
  console.log(loaderHTML);

  // Check for all possible logo selectors
  console.log('\n🔍 SEARCHING FOR LOGO ELEMENTS:');

  const logoSelectors = [
    'img[alt*="Pinterest"]',
    'img[alt*="pinterest"]',
    'svg',
    '[class*="logo"]',
    '[class*="Logo"]',
    'img'
  ];

  for (const selector of logoSelectors) {
    const count = await page.locator(selector).count();
    console.log(`  ${selector}: ${count} element(s) found`);

    if (count > 0) {
      // Get details about the first match
      const element = page.locator(selector).first();
      const isVisible = await element.isVisible().catch(() => false);
      const html = await element.evaluate(el => el.outerHTML).catch(() => null);
      console.log(`    First match visible: ${isVisible}`);
      if (html && html.length < 200) {
        console.log(`    HTML: ${html}`);
      }
    }
  }

  // Get loader component classes
  const loaderClasses = await page.locator('[class*="loader"]').first().getAttribute('class').catch(() => null);
  console.log('\n🎨 LOADER CLASSES: ' + loaderClasses);

  await page.waitForTimeout(2000);
  await browser.close();
})();

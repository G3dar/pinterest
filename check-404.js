import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  // Track all requests
  page.on('response', response => {
    if (response.status() === 404) {
      console.log('404 NOT FOUND:', response.url());
    }
  });

  page.on('requestfailed', request => {
    console.log('REQUEST FAILED:', request.url(), '-', request.failure().errorText);
  });

  await page.goto('http://localhost:3106/');
  await page.waitForTimeout(6000);
  await browser.close();
})();

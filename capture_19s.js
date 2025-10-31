import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();

  // Navigate to the page
  console.log('Navigating to http://localhost:3107/wrapped/prototype');
  await page.goto('http://localhost:3107/wrapped/prototype', {
    waitUntil: 'networkidle0'
  });

  console.log('Waiting for 19 seconds...');
  await new Promise(resolve => setTimeout(resolve, 19000));

  console.log('Taking screenshot at 19s...');
  await page.screenshot({
    path: `C:\\Users\\ghell\\pinterest_complete_brief\\screenshot_19s.png`,
    fullPage: true
  });

  const content = await page.evaluate(() => {
    return {
      bodyHTML: document.body.innerHTML,
      bodyText: document.body.innerText
    };
  });

  console.log('\nPage content at 19s:');
  console.log(content.bodyText.substring(0, 1000));

  await new Promise(resolve => setTimeout(resolve, 2000));
  await browser.close();
})();

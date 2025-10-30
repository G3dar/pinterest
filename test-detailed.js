import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();

  const failed404s = [];

  // Monitor all responses for 404s
  page.on('response', response => {
    const status = response.status();
    const url = response.url();

    if (status === 404) {
      failed404s.push(url);
      console.log(`404 Error: ${url}`);
    }
  });

  try {
    console.log('Loading http://localhost:5173/...');
    await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2', timeout: 30000 });
    await new Promise(resolve => setTimeout(resolve, 3000));

    console.log('\n404 Resources Found:');
    failed404s.forEach(url => console.log(`  - ${url}`));

  } catch (error) {
    console.error('Error:', error.message);
  }

  await browser.close();
})();

import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

// Set viewport
await page.setViewportSize({ width: 1440, height: 900 });

// Navigate to the app
await page.goto('http://localhost:3104', { waitUntil: 'networkidle' });

// Wait for avatar to be rendered
await page.waitForSelector('.user-avatar', { timeout: 5000 });

// Get the avatar element
const avatar = await page.locator('.user-avatar');
const boundingBox = await avatar.boundingBox();
const text = await page.locator('.avatar-circle').textContent();

console.log('Avatar found:');
console.log('Bounding Box:', boundingBox);
console.log('Text Content:', text);
console.log('Element Info:', {
  class: await avatar.getAttribute('class'),
  html: await avatar.innerHTML(),
});

// Take a screenshot of the entire header
await page.screenshot({ path: 'C:\Users\ghell\pinterest_complete_brief\avatar_screenshot.png' });

// Take a zoomed screenshot of just the avatar
if (boundingBox) {
  const clip = {
    x: Math.max(0, boundingBox.x - 20),
    y: Math.max(0, boundingBox.y - 10),
    width: boundingBox.width + 40,
    height: boundingBox.height + 20
  };
  await page.screenshot({ 
    path: 'C:\Users\ghell\pinterest_complete_brief\avatar_zoom.png',
    clip
  });
}

await browser.close();

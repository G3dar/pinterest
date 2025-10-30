import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage();

await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3104', { waitUntil: 'networkidle' });
await page.waitForSelector('.avatar-circle', { timeout: 5000 });

// Get computed styles
const styles = await page.evaluate(() => {
  const avatarContainer = document.querySelector('.user-avatar');
  const avatarCircle = document.querySelector('.avatar-circle');
  
  const containerStyles = window.getComputedStyle(avatarContainer);
  const circleStyles = window.getComputedStyle(avatarCircle);
  
  return {
    container: {
      display: containerStyles.display,
      height: containerStyles.height,
      borderRadius: containerStyles.borderRadius,
      padding: containerStyles.padding,
      width: containerStyles.width,
      backgroundColor: containerStyles.backgroundColor,
    },
    circle: {
      display: circleStyles.display,
      height: circleStyles.height,
      borderRadius: circleStyles.borderRadius,
      padding: circleStyles.padding,
      backgroundColor: circleStyles.backgroundColor,
      fontSize: circleStyles.fontSize,
      fontWeight: circleStyles.fontWeight,
      color: circleStyles.color,
      whiteSpace: circleStyles.whiteSpace,
    },
    textContent: avatarCircle.textContent,
    isVisible: avatarCircle.offsetWidth > 0 && avatarCircle.offsetHeight > 0,
  };
});

console.log('Avatar Styles Analysis:');
console.log(JSON.stringify(styles, null, 2));

await browser.close();

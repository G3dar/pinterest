import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: { width: 1920, height: 1080 }
  });

  const page = await browser.newPage();

  // Track all console messages with timestamps
  const consoleMessages = [];
  const startTime = Date.now();

  page.on('console', msg => {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    consoleMessages.push({
      time: elapsed,
      type: msg.type(),
      text: msg.text()
    });
    console.log(`[${elapsed}s] [${msg.type()}] ${msg.text()}`);
  });

  // Track page errors
  page.on('pageerror', error => {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`[${elapsed}s] [PAGE ERROR] ${error.message}`);
    consoleMessages.push({
      time: elapsed,
      type: 'error',
      text: `PAGE ERROR: ${error.message}\n${error.stack}`
    });
  });

  // Navigate to the page
  console.log('Navigating to http://localhost:3107/wrapped/prototype');
  await page.goto('http://localhost:3107/wrapped/prototype', {
    waitUntil: 'networkidle0'
  });

  console.log('\n=== STARTING OBSERVATION ===\n');

  // Function to get current visible sections
  const getVisibleSections = async () => {
    return await page.evaluate(() => {
      const sections = {
        colorPalette: false,
        constellations: false,
        categories: false,
        visibleElements: []
      };

      // Check for color palette (colored circles)
      const colorCircles = document.querySelectorAll('circle, [class*="color"], [class*="palette"]');
      const visibleCircles = Array.from(colorCircles).filter(el => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return rect.width > 0 && rect.height > 0 && style.opacity !== '0' && style.visibility !== 'hidden' && style.display !== 'none';
      });
      if (visibleCircles.length > 0) {
        sections.colorPalette = true;
        sections.visibleElements.push(`ColorPalette (${visibleCircles.length} circles)`);
      }

      // Check for constellations
      const constellations = document.querySelectorAll('[class*="constellation"], [class*="keyword"]');
      const visibleConstellations = Array.from(constellations).filter(el => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return rect.width > 0 && rect.height > 0 && style.opacity !== '0' && style.visibility !== 'hidden' && style.display !== 'none';
      });
      if (visibleConstellations.length > 0) {
        sections.constellations = true;
        sections.visibleElements.push(`Constellations (${visibleConstellations.length} elements)`);
      }

      // Check for categories (specifically the 3 columns)
      const categoryHeaders = Array.from(document.querySelectorAll('h3, [class*="category"]')).filter(el => {
        const text = el.textContent.trim();
        return text === 'Art & Design' || text === 'Animated Characters' || text === 'Fantasy & Play';
      });

      const visibleCategories = categoryHeaders.filter(el => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return rect.width > 0 && rect.height > 0 && style.opacity !== '0' && style.visibility !== 'hidden' && style.display !== 'none';
      });

      if (visibleCategories.length > 0) {
        sections.categories = true;
        sections.visibleElements.push(`Categories (${visibleCategories.length} columns: ${visibleCategories.map(el => el.textContent.trim()).join(', ')})`);
      }

      // Get all text content on page
      const allText = document.body.innerText;

      return {
        ...sections,
        bodyText: allText.substring(0, 500)
      };
    });
  };

  // Observation timeline
  const observations = [];

  for (let second = 0; second <= 30; second++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const elapsed = second + 1;
    const sections = await getVisibleSections();

    observations.push({
      time: elapsed,
      ...sections
    });

    console.log(`\n[${elapsed}s] Visible: ${sections.visibleElements.join(' | ') || 'Nothing detected'}`);

    // Take screenshots at key moments
    if (elapsed === 3 || elapsed === 14 || elapsed === 15 || elapsed === 24) {
      await page.screenshot({
        path: `C:\\Users\\ghell\\pinterest_complete_brief\\screenshot_${elapsed}s.png`,
        fullPage: true
      });
      console.log(`  📸 Screenshot saved: screenshot_${elapsed}s.png`);
    }

    // Focus on 14-16 second transition
    if (elapsed >= 13 && elapsed <= 16) {
      console.log(`  🔍 CRITICAL TRANSITION ZONE`);
      console.log(`     - Color Palette: ${sections.colorPalette}`);
      console.log(`     - Constellations: ${sections.constellations}`);
      console.log(`     - Categories: ${sections.categories}`);
    }
  }

  // Save detailed report
  const report = {
    consoleMessages,
    observations,
    summary: {
      colorPaletteAppeared: observations.some(o => o.colorPalette),
      constellationsAppeared: observations.some(o => o.constellations),
      categoriesAppeared: observations.some(o => o.categories),
      timings: {
        colorPalette: observations.filter(o => o.colorPalette).map(o => o.time),
        constellations: observations.filter(o => o.constellations).map(o => o.time),
        categories: observations.filter(o => o.categories).map(o => o.time)
      }
    }
  };

  fs.writeFileSync('C:\\Users\\ghell\\pinterest_complete_brief\\transition_report.json', JSON.stringify(report, null, 2));
  console.log('\n\n=== REPORT SAVED ===');
  console.log('transition_report.json');

  console.log('\n\n=== SUMMARY ===');
  console.log(`Categories appeared: ${report.summary.categoriesAppeared}`);
  console.log(`Categories visible at: ${report.summary.timings.categories.join(', ')}s`);
  console.log(`Color Palette visible at: ${report.summary.timings.colorPalette.join(', ')}s`);
  console.log(`Constellations visible at: ${report.summary.timings.constellations.join(', ')}s`);

  await new Promise(resolve => setTimeout(resolve, 3000));
  await browser.close();
})();

import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Capture console messages
  page.on('console', msg => {
    console.log(`[CONSOLE ${msg.type()}]:`, msg.text());
  });

  // Capture errors
  page.on('pageerror', error => {
    console.log('[PAGE ERROR]:', error.message);
  });

  console.log('🌐 Navigating to http://localhost:3100/wrapped/prototype');
  await page.goto('http://localhost:3100/wrapped/prototype');

  console.log('⏳ Waiting for initial load...');
  await page.waitForTimeout(3000);

  console.log('⏳ Waiting for Phase 2 (MOOD MAP text) to appear...');

  // Wait for the MOOD MAP text to appear (up to 60 seconds)
  try {
    await page.waitForSelector('text=MOOD MAP', { timeout: 60000 });
    console.log('✅ MOOD MAP text detected!');

    // Wait a bit more to ensure animations complete
    await page.waitForTimeout(2000);

    console.log('\n📊 INSPECTING MOOD MAP ELEMENT POSITIONING:');
    console.log('================================================\n');

    // Execute comprehensive inspection
    const inspectionData = await page.evaluate(() => {
      // Find the MOOD MAP text element
      const moodMapElement = document.querySelector('.mood-map-text') ||
                            [...document.querySelectorAll('*')].find(el =>
                              el.textContent.trim() === 'MOOD MAP' ||
                              el.textContent.includes('MOOD MAP')
                            );

      if (!moodMapElement) {
        return { error: 'MOOD MAP element not found' };
      }

      // Get computed styles
      const computed = window.getComputedStyle(moodMapElement);

      // Get bounding rectangle
      const rect = moodMapElement.getBoundingClientRect();

      // Calculate viewport center
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const viewportCenterX = viewportWidth / 2;
      const viewportCenterY = viewportHeight / 2;

      // Calculate element center
      const elementCenterX = rect.left + (rect.width / 2);
      const elementCenterY = rect.top + (rect.height / 2);

      // Calculate offset from center
      const offsetFromCenterX = elementCenterX - viewportCenterX;
      const offsetFromCenterY = elementCenterY - viewportCenterY;

      // Get parent chain info
      const parentChain = [];
      let currentParent = moodMapElement.parentElement;
      let depth = 0;
      while (currentParent && depth < 5) {
        const parentComputed = window.getComputedStyle(currentParent);
        parentChain.push({
          tagName: currentParent.tagName,
          className: currentParent.className,
          position: parentComputed.position,
          display: parentComputed.display,
          transform: parentComputed.transform,
          width: currentParent.getBoundingClientRect().width,
          left: currentParent.getBoundingClientRect().left
        });
        currentParent = currentParent.parentElement;
        depth++;
      }

      return {
        element: {
          tagName: moodMapElement.tagName,
          className: moodMapElement.className,
          id: moodMapElement.id,
          textContent: moodMapElement.textContent.trim()
        },
        computedStyles: {
          position: computed.position,
          top: computed.top,
          left: computed.left,
          right: computed.right,
          bottom: computed.bottom,
          transform: computed.transform,
          letterSpacing: computed.letterSpacing,
          marginLeft: computed.marginLeft,
          marginRight: computed.marginRight,
          marginTop: computed.marginTop,
          marginBottom: computed.marginBottom,
          paddingLeft: computed.paddingLeft,
          paddingRight: computed.paddingRight,
          textAlign: computed.textAlign,
          display: computed.display,
          width: computed.width,
          fontSize: computed.fontSize,
          fontWeight: computed.fontWeight,
          color: computed.color,
          zIndex: computed.zIndex
        },
        boundingRect: {
          top: rect.top,
          left: rect.left,
          right: rect.right,
          bottom: rect.bottom,
          width: rect.width,
          height: rect.height,
          x: rect.x,
          y: rect.y
        },
        viewport: {
          width: viewportWidth,
          height: viewportHeight,
          centerX: viewportCenterX,
          centerY: viewportCenterY
        },
        elementCenter: {
          x: elementCenterX,
          y: elementCenterY
        },
        offsetFromCenter: {
          x: offsetFromCenterX,
          y: offsetFromCenterY,
          xPixels: `${offsetFromCenterX.toFixed(2)}px`,
          yPixels: `${offsetFromCenterY.toFixed(2)}px`
        },
        parentChain: parentChain
      };
    });

    if (inspectionData.error) {
      console.log('❌ ERROR:', inspectionData.error);
      return;
    }

    // Print detailed report
    console.log('🎯 ELEMENT IDENTIFICATION:');
    console.log(`   Tag: ${inspectionData.element.tagName}`);
    console.log(`   Class: "${inspectionData.element.className}"`);
    console.log(`   ID: "${inspectionData.element.id}"`);
    console.log(`   Text: "${inspectionData.element.textContent}"`);

    console.log('\n📐 BOUNDING RECTANGLE:');
    console.log(`   Left: ${inspectionData.boundingRect.left.toFixed(2)}px`);
    console.log(`   Top: ${inspectionData.boundingRect.top.toFixed(2)}px`);
    console.log(`   Width: ${inspectionData.boundingRect.width.toFixed(2)}px`);
    console.log(`   Height: ${inspectionData.boundingRect.height.toFixed(2)}px`);

    console.log('\n🎨 COMPUTED STYLES:');
    console.log(`   position: ${inspectionData.computedStyles.position}`);
    console.log(`   top: ${inspectionData.computedStyles.top}`);
    console.log(`   left: ${inspectionData.computedStyles.left}`);
    console.log(`   transform: ${inspectionData.computedStyles.transform}`);
    console.log(`   letter-spacing: ${inspectionData.computedStyles.letterSpacing}`);
    console.log(`   margin-left: ${inspectionData.computedStyles.marginLeft}`);
    console.log(`   margin-right: ${inspectionData.computedStyles.marginRight}`);
    console.log(`   text-align: ${inspectionData.computedStyles.textAlign}`);
    console.log(`   display: ${inspectionData.computedStyles.display}`);
    console.log(`   width: ${inspectionData.computedStyles.width}`);

    console.log('\n🌐 VIEWPORT MEASUREMENTS:');
    console.log(`   Viewport Width: ${inspectionData.viewport.width}px`);
    console.log(`   Viewport Height: ${inspectionData.viewport.height}px`);
    console.log(`   Viewport Center X: ${inspectionData.viewport.centerX.toFixed(2)}px`);
    console.log(`   Viewport Center Y: ${inspectionData.viewport.centerY.toFixed(2)}px`);

    console.log('\n📍 ELEMENT CENTER POSITION:');
    console.log(`   Element Center X: ${inspectionData.elementCenter.x.toFixed(2)}px`);
    console.log(`   Element Center Y: ${inspectionData.elementCenter.y.toFixed(2)}px`);

    console.log('\n⚠️  OFFSET FROM VIEWPORT CENTER:');
    console.log(`   Horizontal Offset: ${inspectionData.offsetFromCenter.xPixels} (${inspectionData.offsetFromCenter.x > 0 ? 'RIGHT' : 'LEFT'} of center)`);
    console.log(`   Vertical Offset: ${inspectionData.offsetFromCenter.yPixels} (${inspectionData.offsetFromCenter.y > 0 ? 'DOWN' : 'UP'} from center)`);

    console.log('\n👪 PARENT CONTAINER CHAIN:');
    inspectionData.parentChain.forEach((parent, idx) => {
      console.log(`   ${idx + 1}. ${parent.tagName}.${parent.className || '(no class)'}`);
      console.log(`      position: ${parent.position}, display: ${parent.display}`);
      console.log(`      transform: ${parent.transform}`);
      console.log(`      width: ${parent.width.toFixed(2)}px, left: ${parent.left.toFixed(2)}px`);
    });

    console.log('\n💡 DIAGNOSIS:');
    const horizontalOffset = Math.abs(inspectionData.offsetFromCenter.x);
    if (horizontalOffset > 5) {
      console.log(`   ❌ NOT CENTERED: Element is ${horizontalOffset.toFixed(2)}px off-center horizontally`);

      // Analyze the cause
      const issues = [];

      if (inspectionData.computedStyles.letterSpacing !== 'normal' &&
          inspectionData.computedStyles.letterSpacing !== '0px') {
        issues.push(`Letter-spacing (${inspectionData.computedStyles.letterSpacing}) is adding extra width`);
      }

      if (inspectionData.computedStyles.marginLeft !== '0px' ||
          inspectionData.computedStyles.marginRight !== '0px') {
        issues.push(`Uneven margins: left=${inspectionData.computedStyles.marginLeft}, right=${inspectionData.computedStyles.marginRight}`);
      }

      if (inspectionData.computedStyles.transform !== 'none') {
        const transformMatch = inspectionData.computedStyles.transform.match(/translateX\(([^)]+)\)/);
        if (transformMatch) {
          issues.push(`Transform translateX is affecting position: ${transformMatch[1]}`);
        }
      }

      if (inspectionData.computedStyles.left !== 'auto' &&
          inspectionData.computedStyles.left !== '50%') {
        issues.push(`Left position is not set to 50%: ${inspectionData.computedStyles.left}`);
      }

      console.log('\n🔍 IDENTIFIED ISSUES:');
      issues.forEach(issue => console.log(`   • ${issue}`));

      console.log('\n✅ RECOMMENDED CSS FIXES:');

      // Calculate the exact correction needed
      const correctionNeeded = -inspectionData.offsetFromCenter.x;
      const letterSpacingValue = parseFloat(inspectionData.computedStyles.letterSpacing) || 0;
      const halfLetterSpacing = letterSpacingValue / 2;

      console.log(`   Option 1 - Adjust transform:`);
      console.log(`     transform: translateX(-50%) translateX(${correctionNeeded.toFixed(2)}px);`);

      console.log(`\n   Option 2 - Compensate for letter-spacing:`);
      console.log(`     margin-left: ${(-halfLetterSpacing).toFixed(2)}px;`);

      console.log(`\n   Option 3 - Remove letter-spacing visual offset:`);
      console.log(`     text-indent: ${(-letterSpacingValue).toFixed(2)}px;`);

    } else {
      console.log(`   ✅ ELEMENT IS CENTERED (within ${horizontalOffset.toFixed(2)}px tolerance)`);
    }

    console.log('\n================================================');

    // Keep browser open for manual inspection
    console.log('\n🔧 Browser remains open for manual DevTools inspection...');
    console.log('Press Ctrl+C to close when done.');

    // Wait indefinitely
    await new Promise(() => {});

  } catch (error) {
    console.log('❌ Timeout waiting for MOOD MAP text:', error.message);
    console.log('Current page title:', await page.title());

    // Take a screenshot for debugging
    await page.screenshot({ path: 'C:\\Users\\ghell\\pinterest_complete_brief\\debug_screenshot.png' });
    console.log('📸 Screenshot saved to: C:\\Users\\ghell\\pinterest_complete_brief\\debug_screenshot.png');
  }

})();

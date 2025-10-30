# Web Console Debugging Guide

This document explains how to use the web-console-debugger agent to test web applications during development.

## What is the Web Console Debugger?

The web-console-debugger is a specialized agent that can:
- Load web applications in a real browser environment
- Capture console output (errors, warnings, logs)
- Monitor page behavior during interactions
- Identify JavaScript errors and network issues
- Provide detailed debugging reports

## How to Use It

### Basic Syntax

Use the `/agents` command to enable the web-console-debugger agent, then use it through the Task tool:

```
User: /agents
[This creates the web-console-debugger agent]

User: Test my application at http://localhost:3000
Assistant: [Uses Task tool with subagent_type: "web-console-debugger"]
```

### Example Use Cases

#### 1. Testing a Page Load

```
Test the application at http://localhost:5173/ and report any console errors or warnings.
```

#### 2. Testing User Interactions

```
Load http://localhost:5173/wrapped/prototype and monitor the console during the entire
45-second animation sequence. Report any errors that occur during the animations.
```

#### 3. Verifying a Bug Fix

```
Test http://localhost:5173/wrapped/prototype again, focusing on the carousel animation
that occurs at 10-15 seconds. Verify that the "All keyframes must be of the same type"
error no longer appears.
```

## What the Agent Reports

The web-console-debugger provides:

### 1. Console Output
- **Errors**: Critical JavaScript errors that break functionality
- **Warnings**: Non-critical issues (deprecated APIs, future compatibility)
- **Info/Log messages**: General debugging information

### 2. Network Issues
- Failed resource loads (404s, network errors)
- Missing images or assets
- CORS issues

### 3. Timing Information
- When errors occurred during the test
- Which phase of the application had issues

### 4. File References
- Exact file paths where errors occurred
- Line numbers for quick debugging
- Stack traces for complex errors

## Real-World Example: Pinterest Wrapped

During development of Pinterest Wrapped, the web-console-debugger identified:

### Initial Test - Error Found
```
Request: "Test http://localhost:5173/wrapped/prototype during the full 45-second experience"

Result:
- CRITICAL ERROR: "All keyframes must be of the same type"
- Location: Phase2Montage.jsx:81
- Issue: Mixed number and string in keyframe array: animate={{ x: [0, '-50%'] }}
- Occurred: During carousel animation (10-15 seconds)
```

### After Fix - Verification
```
Request: "Verify the carousel fix at http://localhost:5173/wrapped/prototype"

Result:
- Status: FIXED - Error no longer appears
- Carousel animation: Working correctly
- Console: Clean during Phase 2
- Remaining issues: Only minor warnings (non-blocking)
```

## Best Practices

### 1. Be Specific About What to Test
❌ Bad: "Test my app"
✅ Good: "Test the checkout flow at http://localhost:3000/checkout and monitor console during form submission"

### 2. Include Timing Information
❌ Bad: "Test the animations"
✅ Good: "Monitor console during the 45-second animation sequence, paying attention to the carousel phase at 10-15 seconds"

### 3. Request Focused Reports
❌ Bad: "Tell me everything"
✅ Good: "Focus on JavaScript errors and failed network requests. Ignore React Router warnings."

### 4. Verify Fixes
After fixing an error, always re-test:
```
"Test again and confirm that the [specific error] no longer appears"
```

## When to Use the Web Console Debugger

### ✅ Use It For:
- Finding JavaScript errors during development
- Testing animations and interactions
- Verifying that bug fixes worked
- Checking for console warnings before production
- Testing full user flows end-to-end

### ❌ Don't Use It For:
- Simple syntax errors (your editor catches these)
- Backend API testing (use different tools)
- Performance profiling (requires specialized tools)
- Accessibility testing (requires different agents)

## Integration with Development Workflow

### Typical Workflow

1. **Develop Feature**
   ```bash
   npm run dev
   ```

2. **Test with Web Console Debugger**
   ```
   "Test http://localhost:5173/new-feature and report any console errors"
   ```

3. **Fix Issues**
   - Review the detailed error report
   - Fix the identified issues
   - Hot reload automatically applies changes

4. **Verify Fixes**
   ```
   "Test the same page again and confirm the [specific error] is fixed"
   ```

5. **Deploy with Confidence**
   - All console errors resolved
   - No critical warnings
   - Clean browser console

## Technical Details

### How It Works

The web-console-debugger uses:
- **Puppeteer**: Headless browser automation
- **Chrome DevTools Protocol**: Direct console access
- **Event Listeners**: Captures all console events in real-time

### What It Captures

```javascript
// All console methods are captured:
console.log()    // ✓ Captured
console.warn()   // ✓ Captured
console.error()  // ✓ Captured
console.info()   // ✓ Captured

// Network events:
404 errors       // ✓ Captured
Network failures // ✓ Captured
CORS issues      // ✓ Captured

// JavaScript errors:
Uncaught errors  // ✓ Captured
Promise rejections // ✓ Captured
Stack traces     // ✓ Captured
```

### Browser Environment

- **Browser**: Chrome/Chromium (headless)
- **JavaScript**: Modern ES6+ support
- **Viewport**: Configurable (default: 1280x720)
- **Network**: Full internet access

## Advanced Usage

### Testing Specific User Flows

```
Load http://localhost:5173/
1. Click the "Get Started" button
2. Fill out the form with test data
3. Submit the form
4. Monitor console for any errors during the entire flow
5. Report all console output with timestamps
```

### Testing Multiple Pages

```
Test these pages in sequence:
1. http://localhost:5173/ (home page)
2. http://localhost:5173/about
3. http://localhost:5173/contact

Report any errors or warnings from any of the pages.
```

### Performance Monitoring

```
Load http://localhost:5173/ and monitor:
1. Time to first console log
2. Any performance warnings
3. Resource loading errors
4. Total page load time
```

## Troubleshooting

### Agent Not Available
```bash
# Enable the agent first
/agents
```

### Port Not Available
Ensure your dev server is running:
```bash
npm run dev
# Wait for "Local: http://localhost:XXXX"
```

### Timeout Issues
For long-running tests, specify timeout expectations:
```
"Test the 45-second animation sequence. Wait for the full duration before reporting."
```

## Example Reports

### Clean Console (Success)
```
Console Status: CLEAN
Errors: 0
Warnings: 0
Page Load: Successful
All Resources: Loaded
Result: Ready for production
```

### Issues Found
```
Console Status: ERRORS DETECTED

Error 1:
  Type: Uncaught TypeError
  Message: Cannot read property 'map' of undefined
  File: components/Gallery.jsx:42
  Severity: HIGH
  Impact: Gallery not rendering

Warning 1:
  Type: React Router Future Flag
  Message: v7_startTransition
  Severity: LOW
  Impact: None (informational)

Recommendation: Fix Error 1 before deployment
```

## Conclusion

The web-console-debugger is an essential tool for:
- ✅ Catching bugs early
- ✅ Verifying fixes immediately
- ✅ Ensuring clean production deploys
- ✅ Debugging complex user interactions

Use it regularly during development to maintain code quality and catch issues before they reach production.

---

**Pro Tip**: Make web console debugging part of your pre-commit checklist:
1. Run web-console-debugger test
2. Fix any errors found
3. Re-test to verify
4. Commit only when console is clean

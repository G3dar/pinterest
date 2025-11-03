# Looker Studio Quick Start - 5 Minutes

Get your live analytics dashboard embedded in `/stats` page in 5 minutes.

## Step 1: Create Dashboard (2 min)

1. Go to https://lookerstudio.google.com/
2. Click **"Create"** → **"Report"**
3. Select **"Google Analytics 4"**
4. Choose property: **G-PB7TMM99WV**
5. Click **"Add to Report"**

## Step 2: Add Quick Metrics (2 min)

Add these charts for instant pitch analytics:

**Scorecard widgets (top row):**
- Total users
- Sessions
- Average session duration
- Active users (enable real-time)

**Table widget:**
- Dimension: Session source/medium
- Metric: Sessions
- Title: "Traffic Sources"

**Time series chart:**
- Date range: Last 7 days
- Metric: Sessions
- Title: "Visits Over Time"

## Step 3: Get Embed URL (30 sec)

1. Click **Share** (top right)
2. Set to **"Anyone with the link can view"**
3. Click **⋮** (3 dots) → **"Embed report"**
4. Copy the URL from the iframe src

Example URL you'll get:
```
https://lookerstudio.google.com/embed/reporting/abc123/page/xyz789
```

**Pro tip:** Add `?rm=minimal` to the end for cleaner UI:
```
https://lookerstudio.google.com/embed/reporting/abc123/page/xyz789?rm=minimal
```

## Step 4: Add to Your Site (30 sec)

**Option A: Environment Variable (Recommended)**
```bash
# Copy example file
cp .env.example .env

# Edit .env and add your URL
VITE_LOOKER_STUDIO_URL=https://lookerstudio.google.com/embed/reporting/YOUR-REPORT-ID/page/YOUR-PAGE-ID?rm=minimal

# Restart dev server
npm run dev
```

**Option B: Direct Code Edit**
Open `src/pages/StatsPage.jsx` and update line 10:
```javascript
const LOOKER_STUDIO_URL = 'https://lookerstudio.google.com/embed/reporting/YOUR-URL';
```

## Step 5: Test It!

1. Visit: http://localhost:3100/stats
2. Password: `patapim`
3. Your live dashboard should appear!

---

## What You'll See

Your dashboard will show:
- ✅ Total visitors (unique users)
- ✅ Number of sessions
- ✅ Average time spent
- ✅ Live visitor count
- ✅ Where traffic came from
- ✅ Visit trends over time

## Troubleshooting

**Dashboard not showing?**
- Check the URL is correct
- Verify sharing is set to "Anyone with link"
- Add `?rm=minimal` to the URL
- Try refreshing the page

**No data?**
- GA4 takes 24-48 hours for historical data
- Check "Real-time" section in GA4 to verify tracking works
- Visit your site to generate test data

---

## Next Steps

📖 **For advanced customization:** See [LOOKER_STUDIO_SETUP.md](./LOOKER_STUDIO_SETUP.md)

📊 **To view in Google Analytics directly:** https://analytics.google.com/

🔍 **To track specific stakeholders:** Use UTM parameters when sharing:
```
https://pinterestpulse.com/?utm_source=investor_john
```

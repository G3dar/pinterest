# Looker Studio Setup Guide for Pinterest Pulse Analytics

This guide will walk you through creating and embedding a live Google Analytics dashboard in your `/stats` page.

## Step 1: Create a Looker Studio Report

1. **Go to Looker Studio**
   - Visit: https://lookerstudio.google.com/
   - Sign in with the same Google account that has access to your GA4 property

2. **Create a New Report**
   - Click **"Create"** → **"Report"**
   - You'll see "Add data to report"

3. **Connect Your GA4 Data**
   - In the data source selector, search for **"Google Analytics"**
   - Select **"Google Analytics 4"**
   - Choose your account and property: **G-PB7TMM99WV**
   - Click **"Add"** then **"Add to Report"**

## Step 2: Build Your Pitch Analytics Dashboard

Here are the key metrics to add for tracking your pitch:

### A. Total Visitors Card
1. Click **"Add a chart"** → **"Scorecard"**
2. Set metric to **"Total users"**
3. Title it "Total Visitors"

### B. Sessions Card
1. Add another **Scorecard**
2. Set metric to **"Sessions"**
3. Title it "Total Sessions"

### C. Returning Visitors
1. Add a **Pie Chart**
2. Dimension: **"New vs Returning"**
3. Metric: **"Sessions"**
4. Title: "New vs Returning Visitors"

### D. Traffic Sources Table
1. Add a **Table**
2. Dimension: **"Session source/medium"**
3. Metrics: **"Sessions"**, **"Average session duration"**
4. Title: "Referral Sources"

### E. Real-Time Users
1. Add a **Scorecard**
2. Enable **Real-time data** (toggle in settings)
3. Metric: **"Active users"**
4. Title: "Live Visitors"

### F. Session Duration
1. Add a **Scorecard**
2. Metric: **"Average session duration"**
3. Title: "Avg. Session Duration"

### G. Timeline Chart
1. Add a **Time Series Chart**
2. Date range dimension: **"Date"**
3. Metric: **"Sessions"**
4. Title: "Visits Over Time"

### H. Custom Events Table (Your Pitch Events)
1. Add a **Table**
2. Dimension: **"Event name"**
3. Metric: **"Event count"**
4. Add a filter: Event name contains "pitch" OR "session" OR "wrapped"
5. Title: "Engagement Events"

## Step 3: Filter for Pitch-Specific Data (Optional)

To show only pitch-related events:
1. Click **"Add a filter"** at the page level
2. **Include** → **Event name** → **Contains** → `pitch`
3. Or create separate pages for different event categories

## Step 4: Style Your Dashboard

1. **Theme**
   - Click **"Theme and layout"** in the toolbar
   - Choose a clean, professional theme
   - Match colors to your brand (Pinterest red: #E60023)

2. **Layout**
   - Arrange cards in a clean grid
   - Put most important metrics at the top
   - Use consistent spacing

## Step 5: Get the Embed Code

### Method 1: Public Embed (Recommended for Simplicity)
1. Click **"Share"** button (top right)
2. Click **"Get report link"**
3. Change to **"Anyone with the link can view"**
4. ⚠️ **Note:** This makes the dashboard public to anyone with the link
5. Click the **3-dots menu** → **"Embed report"**
6. Copy the `<iframe>` code

### Method 2: Private Embed (More Secure)
1. Keep sharing as **"Restricted"** (only you can view)
2. Use the embed code
3. Users will need to sign in with Google to view
4. Good for internal/investor-only dashboards

### Example Embed Code You'll Get:
```html
<iframe
  width="600"
  height="450"
  src="https://lookerstudio.google.com/embed/reporting/YOUR-REPORT-ID/page/YOUR-PAGE-ID"
  frameborder="0"
  style="border:0"
  allowfullscreen>
</iframe>
```

## Step 6: Configure the Embed URL

You can customize the embed URL with parameters:

```
https://lookerstudio.google.com/embed/reporting/YOUR-REPORT-ID/page/YOUR-PAGE-ID?params=%7B%22df%22%3A%22YOUR_DATA_SOURCE_ID%22%7D
```

**Useful parameters:**
- Add `&rm=minimal` for minimal UI (no header)
- Add `&chrome=false` to hide the chrome
- Add `&delay=0` for faster loading

**Example clean URL:**
```
https://lookerstudio.google.com/embed/reporting/YOUR-REPORT-ID/page/YOUR-PAGE-ID?rm=minimal
```

## Step 7: Add to Your Stats Page

1. Copy your embed iframe code
2. Open your terminal
3. Run: `code src/pages/StatsPage.jsx`
4. Find the section that says `EMBED_URL_HERE`
5. Replace it with your Looker Studio URL
6. Save and test!

Alternatively, you can set it as an environment variable:
1. Create a `.env` file in your project root
2. Add: `VITE_LOOKER_STUDIO_URL=your_url_here`
3. Reference it in code: `import.meta.env.VITE_LOOKER_STUDIO_URL`

## Step 8: Test Your Dashboard

1. Start your dev server: `npm run dev`
2. Go to: `http://localhost:3100/stats`
3. Enter password: `patapim`
4. You should see your live Looker Studio dashboard!

## Pro Tips

### Refresh Rate
- Looker Studio refreshes automatically
- GA4 data has a delay of 24-48 hours for some metrics
- Use "Real-time" metrics for live data

### Custom Date Ranges
Add date range controls to your Looker Studio report:
1. Add a **"Date range control"**
2. Users can filter by specific dates

### Multiple Pages
Create different pages for different stakeholder views:
- **Page 1:** Executive summary (high-level metrics)
- **Page 2:** Detailed engagement (all events)
- **Page 3:** Technical metrics (devices, browsers)

### Sharing with Stakeholders
If you want to share the Looker Studio dashboard directly:
1. Make it public or grant specific email access
2. Share the direct link (not embedded)
3. They can interact with filters and date ranges

## Troubleshooting

**Dashboard not loading?**
- Check if the URL is correct
- Verify sharing settings (public vs private)
- Try adding `?rm=minimal` to the URL

**No data showing?**
- GA4 needs 24-48 hours to populate some metrics
- Check Real-time reports to see if tracking is working
- Verify your GA4 property ID is correct

**Iframe blocked by browser?**
- Some browsers block iframes
- Check console for errors
- Ensure HTTPS is being used

---

## Quick Start Template

Here's a recommended dashboard structure for pitch tracking:

**Top Row (Scorecards):**
- Total Visitors | Sessions | Avg Duration | Live Visitors

**Second Row:**
- New vs Returning (Pie) | Traffic Sources (Table)

**Third Row:**
- Visits Over Time (Timeline Chart)

**Fourth Row:**
- Engagement Events (Table with pitch-specific events)

This gives you a comprehensive view of how your pitch is performing at a glance!

---

**Next Steps:**
1. Create your Looker Studio report following steps above
2. Copy the embed URL
3. Run the update command to add it to your stats page
4. Deploy and monitor your pitch performance!

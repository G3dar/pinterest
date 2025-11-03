# Looker Studio Dashboard Configuration - Exact Settings

This guide shows the EXACT configuration for each chart. Just follow along and copy these settings.

## 🎯 Quick Option: Use a Template Instead!

**Fastest way (2 minutes):**
1. Go to https://lookerstudio.google.com/gallery
2. Search for "Google Analytics 4"
3. Click any GA4 template → **"Use Template"**
4. Select property: `G-PB7TMM99WV`
5. Click "Copy Report"
6. Done! Skip to "Get Embed URL" section below

---

## Manual Configuration (if building from scratch)

### Chart 1: Total Visitors Scorecard

**Add Chart:**
1. Click **Add a chart** → **Scorecard**
2. Place it in top-left area

**Configure:**
- **Metric:** `Total users`
- **Comparison:** None
- **Style:**
  - Font size: Large
  - Background: White
  - Compact numbers: On

**Label/Title:**
- Add text box above: "Total Visitors"

---

### Chart 2: Sessions Scorecard

**Add Chart:**
1. Click **Add a chart** → **Scorecard**
2. Place next to Total Visitors

**Configure:**
- **Metric:** `Sessions`
- **Comparison:** None
- **Style:** Same as Chart 1

**Label/Title:**
- Add text box: "Sessions"

---

### Chart 3: Average Session Duration Scorecard

**Add Chart:**
1. Click **Add a chart** → **Scorecard**
2. Place next to Sessions

**Configure:**
- **Metric:** `Average session duration`
- **Comparison:** None
- **Style:**
  - Format: Time duration (mm:ss)
  - Font size: Large

**Label/Title:**
- Add text box: "Avg. Session Duration"

---

### Chart 4: Live Visitors Scorecard

**Add Chart:**
1. Click **Add a chart** → **Scorecard**
2. Place next to Avg Session Duration

**Configure:**
- **Metric:** `Active users`
- **Date range:** ⚠️ Important: Change to "Today" or "Real-time"
- **Style:**
  - Add accent color (green) to indicate "live"
  - Font size: Large

**Label/Title:**
- Add text box: "Live Visitors 🔴"

---

### Chart 5: Traffic Sources Table

**Add Chart:**
1. Click **Add a chart** → **Table**
2. Make it wide (full width of page)

**Configure:**
- **Dimension:** `Session source/medium`
  - This shows things like "direct / (none)", "google / organic", etc.

- **Metrics:**
  1. `Sessions` (click "+ Add metric")
  2. `Average session duration` (click "+ Add metric")
  3. `Total users` (click "+ Add metric")

- **Sort:**
  - Sort by: Sessions
  - Order: Descending (highest first)

- **Rows to display:** 10

- **Style:**
  - Show header: Yes
  - Alternating colors: Yes
  - Compact: No

**Title:**
- Add text box above: "Traffic Sources"

---

### Chart 6: Visits Over Time (Timeline)

**Add Chart:**
1. Click **Add a chart** → **Time series**
2. Make it wide (full width)

**Configure:**
- **Date range dimension:** `Date`

- **Metric:** `Sessions`

- **Date range:** Last 7 days (or 30 days)

- **Style:**
  - Line color: Choose brand color
  - Show data labels: No (cleaner)
  - Show legend: No (only one line)
  - Fill area under line: Optional (looks nice)

**Title:**
- Add text box above: "Visits Over Time"

---

### BONUS Chart 7: New vs Returning Pie Chart

**Add Chart:**
1. Click **Add a chart** → **Pie chart**

**Configure:**
- **Dimension:** `New vs returning`

- **Metric:** `Sessions`

- **Style:**
  - Show data labels: Yes
  - Show percentages: Yes
  - Donut chart: Optional (modern look)

**Title:**
- Add text box: "New vs Returning Visitors"

---

### BONUS Chart 8: Custom Events Table (Pitch Analytics)

**Add Chart:**
1. Click **Add a chart** → **Table**

**Configure:**
- **Dimension:** `Event name`

- **Metrics:**
  1. `Event count`
  2. `Total users` (users who triggered event)

- **Filter:** (Important - shows only pitch events)
  1. Click "Add a filter"
  2. Name it: "Pitch Events"
  3. **Include** → `Event name` → **Contains** → `pitch`
  4. OR **Include** → `Event name` → **Contains** → `session_start`
  5. OR **Include** → `Event name` → **Contains** → `wrapped`

- **Sort:** Event count (descending)

- **Rows to display:** 20

**Title:**
- Add text box: "Engagement Events"

---

## Page Layout Recommendation

```
┌─────────────────────────────────────────────────┐
│  Pinterest Pulse Analytics                     │
│  (Title text box)                              │
├──────────┬──────────┬──────────┬───────────────┤
│ Total    │ Sessions │ Avg      │ Live Visitors │
│ Visitors │          │ Duration │ 🔴            │
│ [1234]   │ [567]    │ [2:34]   │ [3]          │
├──────────┴──────────┴──────────┴───────────────┤
│                                                 │
│  Visits Over Time                              │
│  [Timeline Chart - full width]                 │
│                                                 │
├──────────┬──────────────────────────────────────┤
│ New vs   │  Traffic Sources                    │
│ Returning│  [Table - wider section]            │
│ [Pie]    │                                     │
│          │                                     │
├──────────┴──────────────────────────────────────┤
│                                                 │
│  Engagement Events                             │
│  [Table - full width]                          │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## Get Embed URL

Once your dashboard looks good:

1. **Make it shareable:**
   - Click **Share** (top right)
   - Change access to: **"Anyone with the link can view"**
   - Click **Done**

2. **Get embed code:**
   - Click **⋮** (three dots, top right)
   - Select **"Embed report"**
   - Copy the URL from the `<iframe src="...">` part

3. **Optimize the URL:**
   - Original: `https://lookerstudio.google.com/embed/reporting/abc123/page/xyz789`
   - Add `?rm=minimal` for cleaner UI
   - Final: `https://lookerstudio.google.com/embed/reporting/abc123/page/xyz789?rm=minimal`

4. **Add to your site:**
   ```bash
   # Create .env file
   cp .env.example .env

   # Add your URL to .env
   VITE_LOOKER_STUDIO_URL=https://lookerstudio.google.com/embed/reporting/abc123/page/xyz789?rm=minimal

   # Restart dev server
   npm run dev
   ```

5. **Test:**
   - Visit: http://localhost:3100/stats
   - Password: patapim
   - See your live dashboard!

---

## Styling Tips

### Color Scheme
Use Pinterest brand colors for consistency:
- Primary: `#E60023` (Pinterest red)
- Secondary: `#BD081C` (Dark red)
- Accent: `#000000` (Black)
- Background: `#FFFFFF` (White)

### Font
- Keep it clean and professional
- Use consistent sizing
- Main title: 24px
- Chart titles: 16px
- Data: 32px (scorecards)

### Spacing
- Leave white space between sections
- Align charts in a grid
- Make important metrics (scorecards) prominent at top

---

## Pro Tips

### 1. Date Range Control
Add a date range selector so you can filter by time:
- Click **Add a control** → **Date range control**
- Place it at the top of the page
- Users can now filter the entire dashboard

### 2. Auto-Refresh for Live Data
- The embedded report auto-refreshes
- Real-time metrics update every few seconds
- Historical metrics update when you reload

### 3. Multiple Pages
Create different views for different purposes:
- **Page 1:** Executive Summary (scorecards + timeline)
- **Page 2:** Detailed Traffic (sources, devices, locations)
- **Page 3:** Engagement Events (all custom events)

### 4. Filters
Add filters to focus on specific data:
- **Example:** Show only sessions from last 7 days
- **Example:** Exclude internal traffic (your own IP)
- **Example:** Show only completed experiences

---

## Troubleshooting

**Charts showing "No data"?**
- GA4 takes 24-48 hours for full data
- Check Real-time reports in GA4
- Visit your site to generate test traffic

**Date range not working?**
- Some metrics don't support real-time (use "Today" instead)
- Historical metrics need at least 1 day of data

**Embed not loading?**
- Verify sharing is set to "Anyone with link"
- Check console for errors
- Try removing `?rm=minimal` temporarily

---

## Time Estimate

- **Using a template:** 2 minutes ⚡
- **Manual configuration:** 15-20 minutes
- **Advanced customization:** 30-45 minutes

**Recommendation:** Start with a template, then customize!

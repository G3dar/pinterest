# Pinterest Pulse Analytics Guide

## Accessing the Stats Dashboard

Your stats dashboard is now available at:
- **Local:** `http://localhost:5173/stats`
- **Production:** `https://pinterestpulse.com/stats`

**Password:** `patapim`

## What's Being Tracked

### Pitch-Specific Metrics
The following data is automatically collected for every visitor:

1. **Session Tracking**
   - Unique session ID for each visit
   - New vs. returning visitors
   - Visit count per person
   - Session duration

2. **Referral Sources**
   - Direct visits
   - Referrer URLs (who forwarded it)
   - UTM parameters (if you share with tracking links)

3. **Engagement Metrics**
   - Page views per session
   - Time spent on each page
   - Phase completion rates
   - Share/forward attempts

4. **Technical Details**
   - Device type and screen resolution
   - Browser information
   - Geographic location (city/country)

## Viewing Analytics Data

### Option 1: Google Analytics Dashboard (Recommended)
Access your full analytics data directly in Google Analytics:

1. Go to: https://analytics.google.com/
2. Select your property: `G-PB7TMM99WV`
3. View real-time and historical data

**Key Reports to Check:**
- **Real-time:** See who's viewing right now
- **Engagement > Events:** See all custom tracked events including:
  - `session_start` - New sessions with referral source
  - `pitch_forwarded` - When someone shares the link
  - `phase_complete` - Experience completion
  - `session_end` - Session duration data
- **Acquisition > Traffic acquisition:** See where visitors come from
- **User > User attributes:** Device, browser, location data

### Option 2: Use UTM Parameters for Tracking Forwards
When sharing your pitch, use UTM parameters to track who forwarded it:

**Example:**
```
https://pinterestpulse.com/?utm_source=email&utm_medium=forward&utm_campaign=investor_pitch
```

You can create custom links for different people:
- `?utm_source=john_email` - Track if John forwarded it
- `?utm_source=linkedin&utm_medium=social` - Track LinkedIn shares
- `?utm_source=investor_meeting` - Track meeting follow-ups

### Option 3: Embed GA4 Dashboard (Advanced)
To show live data in the `/stats` page:

1. Create a Looker Studio report from your GA4 data
2. Get the embed code
3. Add it to `src/pages/StatsPage.jsx` in the `gaEmbed` section

## Understanding "Forwarded" Tracking

**How it works:**
- Each visitor gets a unique session ID
- If someone visits from a referrer URL (not direct), we know it was forwarded
- UTM parameters tell you exactly who/where it came from
- Return visitors are tracked via localStorage (browser-based)

**In Google Analytics:**
1. Go to **Engagement > Events**
2. Filter by event name: `session_start`
3. Look at the `referral_source` parameter to see where people came from
4. Check `is_returning_visitor: true` to see repeat views

## Custom Events You Can Track

The following tracking functions are available in your code:

```javascript
import {
  trackWrappedStart,
  trackPhaseComplete,
  trackForward,
  trackShare
} from './utils/analytics';

// Track when pitch starts
trackWrappedStart();

// Track completion
trackPhaseComplete(5);

// Track when someone shares
trackForward('email'); // or 'copy_link', 'social', etc.
trackShare('download');
```

## Privacy & Compliance

The current setup:
- ✅ Tracks sessions, not personal information
- ✅ Uses Google Analytics (GDPR-compliant with proper notice)
- ✅ No IP addresses stored by default (GA4 anonymizes)
- ✅ Browser-based tracking (localStorage/sessionStorage)

**Note:** For EU visitors, you should add a cookie consent banner.

## Next Steps

1. **Test it:** Visit your site and check GA4 real-time view
2. **Share with tracking:** Use UTM parameters when sending to stakeholders
3. **Monitor:** Check GA4 daily to see engagement
4. **Analyze:** Look for patterns in session duration and completion rates

---

**Questions?** Check the Google Analytics documentation or review the tracking code in `src/utils/analytics.js`.

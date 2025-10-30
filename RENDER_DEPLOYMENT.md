# Render Deployment Guide - Pinterest Wrapped

This guide will help you deploy the Pinterest Wrapped application to Render.

## Prerequisites

- GitHub repository: https://github.com/G3dar/pinterest
- Render account: https://render.com

---

## Step 1: Remove Old Deployment (If Exists)

1. Go to https://dashboard.render.com
2. Find your existing "pinterest" or "pinterest-intelligence-lab" service
3. Click on the service name
4. Go to **Settings** (bottom of left sidebar)
5. Scroll to the bottom and click **Delete Web Service**
6. Confirm deletion

---

## Step 2: Create New Web Service

1. Go to https://dashboard.render.com
2. Click **New +** → **Web Service**
3. Choose **"Build and deploy from a Git repository"**
4. Click **Connect GitHub** (if not already connected)

---

## Step 3: Connect Repository

1. Search for **"pinterest"** or paste: `https://github.com/G3dar/pinterest`
2. Click **Connect** next to the repository
3. If you don't see the repo, click **Configure GitHub App** and grant access

---

## Step 4: Configure Web Service

Use these exact settings:

### Basic Settings
- **Name**: `pinterest-wrapped` (or any name you prefer)
- **Region**: Choose closest to you (e.g., Oregon USA)
- **Branch**: `main`
- **Root Directory**: (leave blank)

### Build Settings
- **Runtime**: `Node`
- **Build Command**:
  ```bash
  npm install && npm run build
  ```
- **Start Command**:
  ```bash
  npx serve -s dist -l 10000
  ```

### Instance Type
- **Free** (or paid if you prefer)

### Advanced Settings (Expand)
- **Auto-Deploy**: `Yes` ✓ (recommended - auto-deploys on git push)

---

## Step 5: Add Environment Variables (Optional)

If you need any environment variables:

1. Click **Add Environment Variable**
2. Add any required variables (none needed for this app currently)

---

## Step 6: Deploy

1. Click **Create Web Service** at the bottom
2. Render will start building and deploying
3. Wait 2-5 minutes for deployment to complete
4. You'll see build logs in real-time

---

## Step 7: Verify Deployment

Once deployed, you'll get a URL like:
```
https://pinterest-wrapped.onrender.com
```

### Test the Application

1. **Root path**: `https://your-app.onrender.com/`
   - Should redirect to `/wrapped/concept`

2. **Concept page**: `https://your-app.onrender.com/wrapped/concept`
   - Should show Pinterest Wrapped explanation page

3. **Prototype**: `https://your-app.onrender.com/wrapped/prototype`
   - Should start the 45-second cinematic experience

---

## Troubleshooting

### Issue: 404 on Routes

**Problem**: Routes work on localhost but not on Render

**Solution**: Add a `_redirects` file in the `public` folder (we'll create this):

```bash
# public/_redirects
/*    /index.html   200
```

This tells the server to serve index.html for all routes (needed for SPA routing).

### Issue: Build Fails

**Common causes**:
- Wrong build command
- Missing dependencies in package.json
- Node version mismatch

**Solution**: Check build logs in Render dashboard

### Issue: Site Loads But Broken

**Check**:
- Browser console for errors
- Render logs for startup errors
- Base URL configuration in vite.config.js

---

## Automatic Deployments

With **Auto-Deploy** enabled:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin master:main
   ```
3. Render automatically detects the push and rebuilds
4. Your site updates in 2-5 minutes

---

## Current Deployment Info

**Repository**: https://github.com/G3dar/pinterest
**Branch**: main
**Latest Commit**: f06c222 - "Enhance Phase 2 with portal suction effect"

**What's Included**:
- ✅ Pinterest Wrapped complete application
- ✅ 5-phase cinematic experience (45 seconds)
- ✅ Portal suction effect
- ✅ Self-organizing grid animation
- ✅ 144 images across 6 categories
- ✅ Downloadable identity card
- ✅ Social sharing

---

## Important Files for Deployment

- **package.json** - Dependencies and scripts
- **vite.config.js** - Build configuration
- **index.html** - Entry point
- **src/** - React application source
- **imgs/** - Image assets (144 images)

---

## Cost

- **Free Tier**: 750 hours/month (enough for low traffic)
- **Limitations**: May spin down after inactivity (takes 30s to wake)
- **Upgrade**: $7/month for always-on instance

---

## Support

If deployment fails:
1. Check Render logs in dashboard
2. Verify build command matches guide
3. Ensure GitHub repo is up to date
4. Check that `main` branch has latest code

---

**Deployment Status**: Ready to deploy! 🚀

Follow the steps above to deploy your Pinterest Wrapped application to Render.

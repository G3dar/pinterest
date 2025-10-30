# Pinterest Wrapped

A 45-second cinematic experience that transforms a user's year of Pinterest activity into a personalized visual narrative, culminating in a shareable "creative identity card."

## Overview

Pinterest Wrapped is inspired by Spotify Wrapped, but reimagined for the visual world of Pinterest. It analyzes everything you've saved during the year and transforms it into a cohesive narrative with beautiful animations and personalized insights.

## Features

- **Cinematic 45-second experience** with 5 phases
- **Dynamic animations** using Framer Motion
- **Personalized identity card** with rarity tiers (Common, Rare, Epic, Legendary)
- **Color palette analysis** showing dominant aesthetic colors
- **Category breakdown** of visual interests
- **Keyword cloud** revealing visual language
- **Downloadable card** as PNG image
- **Social sharing** to Twitter, Facebook, and more
- **Fully responsive** design

## Project Structure

```
pinterest_complete_brief/
├── src/
│   ├── components/
│   │   └── phases/
│   │       ├── Phase0Loading.jsx       # Loading screen
│   │       ├── Phase1Intro.jsx         # Intro sequence (5s)
│   │       ├── Phase2Montage.jsx       # Image montage (15s)
│   │       ├── Phase3Analysis.jsx      # Aesthetic analysis (10s)
│   │       ├── Phase4Identity.jsx      # Identity card reveal (10s)
│   │       └── Phase5Share.jsx         # Share panel
│   ├── data/
│   │   └── mockData.js                 # Mock data generator
│   ├── pages/
│   │   ├── ConceptPage.jsx             # Explanation page
│   │   └── PrototypePage.jsx           # Main experience
│   ├── App.jsx                         # Main app with routing
│   ├── main.jsx                        # Entry point
│   └── index.css                       # Global styles
├── imgs/                                # Image assets
│   ├── art-design/
│   ├── characters-animated/
│   ├── fantasy-play/
│   ├── fashion-style/
│   ├── food-lifestyle/
│   └── interior-design/
├── index.html
├── package.json
└── vite.config.js
```

## The 5 Phases

### Phase 0: Loading Screen (Variable duration)
- Shows loading animation while data is being processed
- Displays error state if loading fails
- Smooth fade transition to Phase 1

### Phase 1: Intro Sequence (5 seconds)
- Dramatic opening with Pinterest logo animation
- Reveals "Your Year in Pinterest" and year number
- Decorative sparkles for visual interest
- Red-to-purple gradient background

### Phase 2: Image Montage (15 seconds)
Three sub-phases:
- **Grid View (5s)**: Masonry grid of saved pins with color bars
- **Carousel View (5s)**: Horizontal scrolling cards with category labels
- **Category Clusters (5s)**: Grouped images by theme with weight badges

### Phase 3: Aesthetic Analysis (10 seconds)
Three sub-phases:
- **Color Palette (3s)**: Dynamic circles showing dominant colors
- **Keyword Cloud (3s)**: Weighted pills revealing visual language
- **Category Breakdown (4s)**: Top categories with progress bars and thumbnails

### Phase 4: Identity Card Reveal (10 seconds)
- Personalized identity card with rarity tier
- User avatar, title, and description
- Top categories and color palette
- Floating sparkles and gradient orbs
- CTA hint for sharing

### Phase 5: Share Panel (User controlled)
- Condensed card preview
- Download as PNG functionality
- Copy link to clipboard
- Social media sharing (Twitter, Facebook)
- Watch Again button to restart

## Design System

### Colors
- **Pinterest Red**: `#E60023`
- **Purple**: `#C13584`
- **Dark Background**: `#111111`
- **Rarity Colors**:
  - Common: `#9CA3AF`
  - Rare: `#3B82F6`
  - Epic: `#A855F7`
  - Legendary: `#F59E0B`

### Typography
- Font: System font stack
- Weights: 400, 600, 700, 800, 900
- Fluid sizing with `clamp()` for responsive text

### Animations
- **Framer Motion** for all animations
- Spring physics for playful interactions
- Staggered entrances for visual interest
- GPU-accelerated transforms

## Getting Started

### Prerequisites
- Node.js 16 or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser to the URL shown (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Routes

- `/wrapped/concept` - Explanation page that introduces Pinterest Wrapped
- `/wrapped/prototype` - The full 45-second experience

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **html2canvas** - Card download functionality

## Mock Data

The application uses mock data generated from the images in the `imgs/` directory. The data includes:

- 6 categories with 24 images each
- Color palettes extracted for each category
- Keywords and weights
- User identity card with personalized attributes

## Customization

To customize the experience:

1. **Images**: Replace images in the `imgs/` directories
2. **Categories**: Edit `src/data/mockData.js` to add/modify categories
3. **Identity Card**: Customize titles, descriptions, and rarity logic
4. **Timing**: Adjust phase durations in `src/pages/PrototypePage.jsx`
5. **Colors**: Modify the design system colors in CSS files

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- All animations use GPU-accelerated properties
- Images are lazy-loaded where possible
- Optimized for 60fps throughout the experience
- Responsive design works on mobile and desktop

## Deployment

### Deploying to Render

For detailed deployment instructions to Render, see **[RENDER_DEPLOYMENT.md](./RENDER_DEPLOYMENT.md)**.

Quick start:
1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Use build command: `npm install && npm run build`
5. Use start command: `npx serve -s dist -l 10000`

The `public/_redirects` file is included to ensure proper SPA routing on Render.

### Other Hosting Options

This is a standard Vite + React app and can be deployed to:
- **Vercel**: Zero-config deployment
- **Netlify**: Automatic builds from GitHub
- **GitHub Pages**: Static hosting with Actions
- **AWS S3 + CloudFront**: Enterprise hosting

## Credits

Inspired by Spotify Wrapped and designed following the Pinterest Wrapped specification and Pinterest Rewind creative brief.

## License

This is a prototype/demonstration project.

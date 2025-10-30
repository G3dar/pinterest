# Pinterest Wrapped - Complete UI/UX Design Specification

## Overview

**Pinterest Wrapped** is a 45-second cinematic experience that transforms a user's year of Pinterest activity into a personalized visual narrative, culminating in a shareable "creative identity card." Inspired by Spotify Wrapped, it creates an emotional journey from curiosity to pride to social sharing.

---

## 🎯 Core Concept

The experience analyzes everything a user saved on Pinterest during the year and distills it into:
- **Visual patterns**: Colors, aesthetics, moods
- **Content categories**: Their top interests and themes
- **Personal identity**: A unique creative archetype with rarity status
- **Shareable artifact**: A beautifully designed identity card

**Key Philosophy**: No user control during playback. The timed, cinematic approach builds anticipation and mirrors the successful Spotify Wrapped model.

---

## 📄 Page Structure

### **Page 1: Concept Explanation Page** (`/wrapped/concept`)

**Purpose**: Educational landing page that explains what Pinterest Wrapped is before users experience it.

#### **Layout:**

**Hero Section (Red-to-Purple Gradient Background)**
- **Background**: Linear gradient from Pinterest Red (#E60023) to Purple (#C13584), 135-degree angle
- **Shape**: Rounded container with 1.5rem border radius
- **Padding**: 3rem vertical, 2rem horizontal
- **Centered content**

**Hero Content:**
1. **Sparkles Icon**
   - Size: 48px
   - Color: White
   - Position: Centered at top
   - Bottom margin: 1rem

2. **Title: "Pinterest Wrapped"**
   - Size: Fluid between 2rem and 3rem (responsive)
   - Weight: 800 (ultra bold)
   - Color: White
   - Bottom margin: 1rem

3. **Subtitle: "Your Year in Aesthetics"**
   - Size: 1.25rem
   - Weight: 600
   - Color: White with 95% opacity

**Body Content (White Background)**

**Introductory Paragraphs:**
- Font size: 1.125rem (18px)
- Line height: 1.8 (generous readability)
- Color: #111111 (near black)
- Spacing: 1.5rem between paragraphs

Text reads:
> "Imagine seeing your entire Pinterest year condensed into a 45-second cinematic visual experience that reveals your unique creative identity.
>
> **Pinterest Wrapped** is an experience similar to Spotify Wrapped, but for your visual world. It analyzes everything you've saved during the year and transforms it into a cohesive narrative that culminates in a personalized, shareable "identity card.""

**"How it works" Section:**
- Header with Camera icon (32px, red color #E60023)
- Font: 1.75rem, weight 700
- Top margin: 2.5rem

**Timeline Breakdown (4 Phase Cards):**
Each phase appears as a horizontal card:
- **Background**: Light gray (#F7F7F7)
- **Left border**: 4px solid red (#E60023)
- **Padding**: 1.25rem
- **Border radius**: 0.75rem
- **Gap between cards**: 1rem

Phase details:
1. **Intro (5s)**: Dramatic opening with Pinterest logo
2. **Montage (15s)**: Your saved images transform into grid, carousel, and category clusters
3. **Analysis (10s)**: Visualization of your color palette, keywords, and dominant categories
4. **Reveal (10s)**: Your unique identity card with title, description, and characteristics

**"Key features" Section:**
- Header with Palette icon (28px, red)
- Font: 1.5rem, weight 700
- Bulleted list with 1.5rem left margin
- Line height: 2 (very spacious)

Features listed:
- **Cinematic montage** of your saved pins with dynamic animations
- **Color analysis** revealing your dominant aesthetic palette
- **Category breakdown** showing your top visual interests
- **Personalized identity card** that captures your creative essence
- **Share & download** your card to social media

**CTA Button at Bottom:**
- **Style**: Primary button (red #E60023, white text)
- **Size**: Full width, 1rem vertical padding, 2rem horizontal
- **Content**: Sparkles icon + "View Prototype" + Arrow Right icon
- **Font size**: 1.125rem
- **Hover**: Scale to 1.05
- **Press**: Scale to 0.95
- **Border radius**: 0.5rem (pill-shaped)

---

### **Page 2: Wrapped Prototype Experience** (`/wrapped/prototype`)

A full-screen, auto-playing 45-second experience consisting of 6 sequential phases.

---

## 🎬 Phase-by-Phase Breakdown

### **PHASE 0: Loading Screen** (Pre-experience)

**Duration**: Variable (until data loads, minimum 0.5s)

**Visual Design:**
- **Background**: Red-to-purple gradient (same as hero)
- **Position**: Full-screen fixed overlay (covers entire viewport)
- **z-index**: 50 (top layer)

**Loading State Content:**

1. **Loader Icon** (Loader2 with spinning animation)
   - Size: 48px
   - Color: White
   - Animation: Continuous 360° rotation, 1s duration, linear
   - Bottom margin: 1.5rem

2. **Title: "Analyzing Your Year"**
   - Size: 1.5rem
   - Weight: 700
   - Color: White
   - Bottom margin: 0.5rem

3. **Subtitle: "Gathering your Pinterest aesthetics..."**
   - Size: 1rem
   - Color: White with 90% opacity

**Entrance Animation:**
- All content fades in from 0% to 100% opacity over 1 second

**Error State (if loading fails):**
- **Title**: "Oops!" (1.5rem, weight 700)
- **Message**: Error text in white, 90% opacity
- **Button**: "Try Again" button with white background, red text
  - Padding: 0.75rem vertical, 2rem horizontal
  - Border radius: 0.5rem
  - Font weight: 600
  - Scales on hover/press

---

### **PHASE 1: Intro Sequence** (0s - 5s)

**Duration**: 5 seconds

**Visual Design:**
- **Background**: Red-to-purple gradient (#E60023 to #C13584, 135°)
- **Position**: Full-screen fixed
- **Decorative background**: Subtle dot pattern
  - Pattern: Radial gradient circles (white 10% opacity, 1px)
  - Spacing: 50px × 50px grid
  - Fades in to 10% opacity over 1 second

**Animation Timeline:**

**0-1s: Logo Entrance**
- **Sparkles icon** (80px, white, thin stroke 1.5px)
- **Animation**: Scale from 0 to 1.5, opacity 0 to 1
- **Duration**: 1 second
- **Easing**: Ease-out
- **Position**: Center of screen

**1-2s: Logo Transition**
- **Sparkles icon** shrinks to scale 0.5
- **Moves** to upper 20% of screen (y: -100px)
- **Opacity** reduces to 80%
- **Duration**: 0.5 seconds
- **Easing**: Ease-out
- Becomes **position: absolute** at top 20%

**2-4s: Text Reveal**
1. **Main Heading** fades in:
   - Text: "Your Year in Pinterest"
   - Size: Fluid between 2rem and 4rem (clamp(2rem, 6vw, 4rem))
   - Weight: 800
   - Color: White
   - Letter spacing: -0.02em (tight)
   - Animation: Opacity 0→1, Y: 20px→0, duration 0.6s, delay 0.3s
   - Bottom margin: 1rem

2. **Year Number** scales in:
   - Text: "2024" (or current year)
   - Size: Fluid between 3rem and 6rem (clamp(3rem, 10vw, 6rem))
   - Weight: 900 (maximum boldness)
   - Color: White
   - Text shadow: 0 4px 20px rgba(0,0,0,0.3) for depth
   - Animation: Opacity 0→1, Scale 0.8→1, duration 0.6s, delay 0.6s

**2-4s: Decorative Sparkles Appear**
Three sparkle icons fade in from different directions:

1. **Bottom-left sparkle**:
   - Position: Bottom 15%, Left 10%
   - Size: 40px
   - Opacity: 60%
   - Animation: Slide from X: -50 to 0, duration 0.8s, delay 0.8s

2. **Bottom-right sparkle**:
   - Position: Bottom 20%, Right 15%
   - Size: 30px
   - Opacity: 60%
   - Animation: Slide from X: +50 to 0, duration 0.8s, delay 0.9s

3. **Top-right sparkle**:
   - Position: Top 25%, Right 20%
   - Size: 25px
   - Opacity: 40%
   - Animation: Slide from Y: +50 to 0, duration 0.8s, delay 1s

**4-5s: Fade to Next Phase**
- Full-screen gradient overlay fades in from 0% to 100% opacity
- Duration: 0.5 seconds
- Transitions smoothly to Montage phase

---

### **PHASE 2: Image Montage** (5s - 20s)

**Duration**: 15 seconds total (5s per sub-phase)

**Visual Design:**
- **Background**: Dark (#111111, near black)
- **Position**: Full-screen fixed
- **Overflow**: Hidden

**SUB-PHASE 2A: Grid View** (5s - 10s)

**Layout:**
- **Display**: CSS Grid
- **Columns**: `repeat(auto-fill, minmax(200px, 1fr))` (responsive, approximately 5-6 columns on desktop)
- **Gap**: 1rem between items
- **Padding**: 2rem on all sides
- **Height**: 100vh (full viewport)

**Image Cards:**
Each image appears as a card with these properties:
- **Height**: Variable (150px base + randomized 0-100px to create staggered masonry effect)
  - Calculated as: 150 + (index % 3) × 50 pixels
- **Border radius**: 1rem
- **Overflow**: Hidden
- **Shadow**: 0 4px 12px rgba(0,0,0,0.3)

**Image Content:**
- **Object-fit**: Cover (fills container while maintaining aspect ratio)
- **Width/Height**: 100% of card

**Color Bar Overlay:**
- **Position**: Absolute, bottom of card
- **Height**: 6px
- **Background**: Linear gradient using the image's dominant colors
  - Example: linear-gradient(to right, #8B7355, #C4A57B, #E8D5C4)
- **Animation**: ScaleX from 0 to 1, transformOrigin: left
- **Duration**: 0.6s
- **Delay**: (index × 0.05s) + 0.2s

**Entrance Animation:**
Container fades from 0% to 100% opacity over 0.5s

**Card Stagger Animation:**
Each of the 24 cards animates in sequence:
- **Initial**: Opacity 0, Scale 0.8
- **Animate**: Opacity 1, Scale 1
- **Duration**: 0.4s
- **Delay**: index × 0.05s (creates wave effect)
- **Easing**: Ease-out

**SUB-PHASE 2B: Carousel View** (10s - 15s)

**Layout:**
- **Display**: Horizontal flex row
- **Alignment**: Center (vertically)
- **Height**: 100vh
- **Overflow**: Hidden

**Scrolling Container:**
- **Display**: Flex row
- **Gap**: 2rem between cards
- **Padding-left**: 2rem
- **Animation**: Horizontal slide from X: 0% to X: -50%
  - **Duration**: 5 seconds
  - **Easing**: Linear (constant speed)
  - Creates infinite loop effect by duplicating image array

**Image Cards:**
30 cards displayed (array duplicated for seamless loop)

Individual card specs:
- **Min-width**: 350px (fixed)
- **Height**: 500px (tall portrait)
- **Border radius**: 1.5rem
- **Shadow**: 0 8px 24px rgba(0,0,0,0.4) (more dramatic)
- **Overflow**: Hidden

**Image:**
- **Object-fit**: Cover
- **Width/Height**: 100%

**Category Label Overlay:**
- **Position**: Absolute, bottom of card
- **Bottom**: 1.5rem
- **Left/Right**: 1.5rem (inset from edges)
- **Padding**: 0.75rem vertical, 1rem horizontal
- **Background**: rgba(0, 0, 0, 0.7) with backdrop blur
- **Backdrop-filter**: blur(10px) (glassmorphism)
- **Border radius**: 0.75rem
- **Color**: White
- **Font size**: 0.875rem
- **Font weight**: 600
- **Text align**: Center
- **Text**: Category name (e.g., "Minimalist Interiors", "Vintage Fashion")

**Label Animation:**
- **Initial**: Y: 20px, Opacity: 0
- **Animate**: Y: 0, Opacity: 1
- **Duration**: Variable
- **Delay**: min(index × 0.1s + 0.3s, 2.3s) (caps at 2.3s)

**Card Entrance:**
- **Initial**: Scale 0.8, Opacity 0
- **Animate**: Scale 1, Opacity 1
- **Duration**: 0.5s
- **Delay**: min(index × 0.1s, 2s) (caps at 2s for later cards)

**Transition Between Sub-phases:**
- Carousel fades in from 0% to 100% over 0.5s
- Grid fades out simultaneously

**SUB-PHASE 2C: Category Clusters** (15s - 20s)

**Layout:**
- **Display**: Flex with wrap
- **Gap**: 2rem
- **Padding**: 2rem
- **Alignment**: Center (justify-content)
- **Content alignment**: Flex-start (align-content)
- **Height**: 100vh
- **Overflow**: Hidden

**Category Clusters:**
Each aesthetic category gets a cluster (typically 4-6 clusters visible)

**Cluster Container:**
- **Max-width**: 400px
- **Animation entrance**:
  - Initial: Opacity 0, Y: 40
  - Animate: Opacity 1, Y: 0
  - Duration: 0.6s
  - Delay: categoryIndex × 0.2s
  - Easing: Ease-out

**Category Title:**
- **Text**: Category name (e.g., "Botanical Illustration")
- **Font size**: 1.5rem
- **Font weight**: 700
- **Color**: White
- **Text shadow**: 0 2px 8px rgba(0,0,0,0.5) for readability
- **Bottom margin**: 1rem
- **Animation**:
  - Initial: X: -20, Opacity: 0
  - Animate: X: 0, Opacity: 1
  - Delay: categoryIndex × 0.2s + 0.2s

**Image Grid (within cluster):**
- **Display**: Grid 2×2
- **Columns**: 2 equal columns
- **Gap**: 0.75rem

**Individual Images (4 per cluster):**
- **Height**: 180px
- **Border radius**: 1rem
- **Shadow**: 0 4px 16px rgba(0,0,0,0.4)
- **Overflow**: Hidden
- **Object-fit**: Cover

**Image Animation:**
- **Initial**: Scale 0, Rotate -10°
- **Animate**: Scale 1, Rotate 0°
- **Duration**: 0.4s
- **Delay**: (categoryIndex × 0.2s) + (imgIndex × 0.1s) + 0.3s
- **Easing**: Back-out (creates bounce effect)

**Weight Badge:**
Shows percentage of user's year this category represents
- **Position**: Below image grid
- **Top margin**: 1rem
- **Display**: Inline-block
- **Padding**: 0.5rem vertical, 1rem horizontal
- **Background**: rgba(230, 0, 35, 0.9) (Pinterest red, 90% opacity)
- **Border radius**: 2rem (pill shape)
- **Color**: White
- **Font size**: 0.875rem
- **Font weight**: 600
- **Text**: "25% of your year" (percentage calculated from weight)

**Badge Animation:**
- **Initial**: Scale 0
- **Animate**: Scale 1
- **Duration**: Spring animation
- **Spring stiffness**: 200
- **Delay**: categoryIndex × 0.2s + 0.6s

**Phase Transition:**
All clusters fade out together (0.5s) as Analysis phase fades in

---

### **PHASE 3: Aesthetic Analysis** (20s - 30s)

**Duration**: 10 seconds total (3-4s per sub-phase)

**Visual Design:**
- **Background**: Dark (#111111)
- **Layout**: Flex column, centered (both axes)
- **Padding**: 2rem
- **Overflow**: Hidden

**Common Header (appears on every sub-phase):**
- **Position**: Absolute top, 3rem from top
- **Text**: "Analyzing Your Aesthetic"
- **Font size**: 0.875rem
- **Color**: #767676 (medium gray)
- **Text transform**: Uppercase
- **Letter spacing**: 0.1em (wide tracking)
- **Animation**: Y: -20→0, Opacity: 0→1, duration 0.5s

**SUB-PHASE 3A: Color Palette** (20s - 23s)

**Container:**
- **Width**: 100%, max 800px
- **Text align**: Center

**Title: "Your Color Palette"**
- **Font size**: 2.5rem
- **Font weight**: 800
- **Color**: White
- **Bottom margin**: 3rem
- **Animation**:
  - Initial: Opacity 0, Y: 20
  - Animate: Opacity 1, Y: 0
  - Duration: 0.5s

**Color Circles Container:**
- **Display**: Flex row
- **Gap**: 1rem
- **Justify**: Center
- **Flex wrap**: Wrap (responsive)

**Individual Color Circles:**
8 circles showing top colors, each:

**Circle Size** (dynamic based on weight):
- Formula: 100px + (weight × 100px)
- Example: If weight is 0.25, size = 125px diameter
- Larger percentages = bigger circles

**Circle Styling:**
- **Shape**: Border-radius 50% (perfect circle)
- **Background**: The actual color hex value
- **Border**: None (clean edge)
- **Shadow**: Two-layer:
  1. `0 8px 32px [color]40` (colored glow at 40% opacity)
  2. `0 0 0 4px rgba(255,255,255,0.1)` (subtle white ring)

**Percentage Label (below circle):**
- **Position**: Absolute, bottom -2rem
- **Left**: 50%, translateX(-50%) for centering
- **Font size**: 0.75rem
- **Color**: #767676 (gray)
- **Text**: "25%" (rounded percentage)
- **White-space**: nowrap (prevents wrapping)

**Circle Animation:**
- **Initial**: Scale 0, Rotate -180°
- **Animate**: Scale 1, Rotate 0°
- **Duration**: 0.6s
- **Delay**: index × 0.1s (staggered)
- **Type**: Spring physics
- **Spring stiffness**: 200 (bouncy)

**Label Animation:**
- **Initial**: Opacity 0
- **Animate**: Opacity 1
- **Delay**: index × 0.1s + 0.3s

**SUB-PHASE 3B: Keyword Cloud** (23s - 26s)

**Container:**
- **Width**: 100%, max 900px
- **Text align**: Center

**Title: "Your Visual Language"**
- Same styling as color palette title

**Keywords Container:**
- **Display**: Flex row with wrap
- **Gap**: 1rem
- **Justify**: Center
- **Align**: Center

**Individual Keyword Pills:**
12 keywords displayed, each:

**Pill Styling:**
- **Padding**: 0.75rem vertical, 1.5rem horizontal
- **Background**: rgba(230, 0, 35, 0.1) (red tint, 10% opacity)
- **Border**: 2px solid rgba(230, 0, 35, 0.3) (red, 30% opacity)
- **Border radius**: 2rem (pill)
- **Color**: White
- **Text transform**: Lowercase
- **White-space**: nowrap

**Dynamic Font Size:**
- Formula: 1rem + (weight × 2rem)
- **Weight** represents keyword importance (0-1)
- Example: weight 0.3 = 1.6rem font size
- Most important keywords appear largest

**Text Content:**
Examples: "minimalist", "botanical", "moody", "earthy tones", "geometric"

**Pill Animation:**
- **Initial**: Opacity 0, Scale 0
- **Animate**: Opacity 1, Scale 1
- **Duration**: 0.4s
- **Delay**: index × 0.08s (quick stagger for cloud effect)
- **Type**: Spring
- **Spring stiffness**: 150

**SUB-PHASE 3C: Category Breakdown** (26s - 30s)

**Container:**
- **Width**: 100%, max 700px

**Title: "Your Top Categories"**
- **Text align**: Center
- Same styling as previous titles

**Categories List:**
5 categories displayed vertically

**Category Item Structure:**

Each category has:

1. **Header Row** (flex, space-between):
   - **Category Name** (left):
     - Font size: 1.25rem
     - Font weight: 600
     - Color: White
     - Animation: Opacity 0→1, delay: index × 0.15s + 0.2s

   - **Percentage** (right):
     - Font size: 1.5rem
     - Font weight: 800
     - Color: #E60023 (Pinterest red)
     - Animation: Opacity 0→1, Scale 0→1, spring physics
     - Delay: index × 0.15s + 0.3s

2. **Progress Bar:**
   - **Container**:
     - Width: 100%
     - Height: 12px
     - Background: rgba(255,255,255,0.1)
     - Border radius: 1rem
     - Overflow: Hidden

   - **Fill**:
     - Height: 100%
     - Width: Animates from 0% to actual percentage
     - Background: Linear gradient using category's dominant colors
       - Example: `linear-gradient(90deg, #E8D5C4, #C4A57B, #8B7355)`
     - Border radius: 1rem
     - Animation:
       - Initial: Width 0%
       - Animate: Width to percentage value
       - Duration: 1s
       - Delay: index × 0.15s + 0.2s
       - Easing: Ease-out

3. **Thumbnail Preview Row:**
   - **Top margin**: 0.75rem
   - **Display**: Flex row
   - **Gap**: 0.5rem
   - 4 small image thumbnails

   **Thumbnail Styling:**
   - **Size**: 50px × 50px
   - **Border radius**: 0.5rem
   - **Border**: 2px solid rgba(255,255,255,0.2)
   - **Overflow**: Hidden
   - **Object-fit**: Cover

   **Thumbnail Animation:**
   - **Initial**: Scale 0, Rotate -10°
   - **Animate**: Scale 1, Rotate 0°
   - **Duration**: Spring
   - **Spring stiffness**: 200
   - **Delay**: (index × 0.15s) + 0.6s + (imgIndex × 0.05s)

**Item Spacing:**
- **Gap** between category items: 1.5rem
- **Bottom margin** on header row: 0.75rem
- **Bottom margin** on progress bar: implicit through preview row's top margin

**Container Entry:**
- Each category item fades/slides in:
  - Initial: Opacity 0, X: -50
  - Animate: Opacity 1, X: 0
  - Duration: 0.5s
  - Delay: index × 0.15s
  - Easing: Ease-out

---

### **PHASE 4: Identity Card Reveal** (30s - 40s)

**Duration**: 10 seconds

**Visual Design:**
- **Background**: Dark gradient (linear-gradient(135deg, #1a1a1a 0%, #2d1b3d 100%))
  - Subtle purple undertone to dark background
- **Layout**: Flex column, centered
- **Padding**: 2rem
- **Overflow**: Hidden

**Animated Background:**

**Gradient Orbs** (decorative):
- **Position**: Absolute, full viewport
- **Background**: Two radial gradients
  1. Circle at 20% horizontal, 50% vertical
     - Gradient: Rarity color at 20% opacity → transparent at 50%
  2. Circle at 80% horizontal, 50% vertical
     - Same gradient
- **Opacity**: Fades from 0 to 15% over 2 seconds
- **Purpose**: Subtle colored glow matching rarity tier

**Dot Pattern Background:**
- Same as Intro phase (50px grid, white dots at 10%)

**Floating Sparkles** (8 particles):
Decorative sparkles that appear and float away

For each sparkle (i = 0 to 7):
- **Icon**: Sparkles, 20px size
- **Color**: Rarity tier color
- **Initial Position**:
  - Left: 20% + (i × 10%)
  - Top: 30% + ((i % 3) × 20%)
- **Animation**:
  - Initial: Opacity 0, Scale 0
  - Animate:
    - Opacity: 0 → 1 → 0 (fade in and out)
    - Scale: 0 → 1 → 0
    - X: 0 → random(-100px to +100px)
    - Y: 0 → random(-100px to +100px)
  - Duration: 2s
  - Delay: 2s + (i × 0.2s)
  - Easing: Ease-out

**Main Identity Card:**

**Card Container:**
- **Position**: Relative
- **Width**: 100%, max 600px
- **Background**: rgba(255, 255, 255, 0.05) (subtle white tint)
- **Backdrop-filter**: blur(20px) (strong glassmorphism)
- **Border radius**: 2rem (very rounded)
- **Padding**: 3rem (generous)
- **Border**: 2px solid [rarity color]
  - Colors by rarity: Common=#9CA3AF, Rare=#3B82F6, Epic=#A855F7, Legendary=#F59E0B
- **Shadow**: Triple-layer shadow:
  1. `0 20px 60px rgba(0,0,0,0.5)` (large soft shadow)
  2. `0 0 0 1px rgba(255,255,255,0.1)` (inner glow)
  3. `0 0 40px [rarity-color]40` (colored outer glow)

**Card Entrance Animation:**
- **Initial**: Opacity 0, Scale 0.8, RotateY -180° (flipped)
- **Animate**: Opacity 1, Scale 1, RotateY 0° (normal)
- **Duration**: 1.5s
- **Easing**: Ease-out
- Creates dramatic card-flip reveal

**Card Content (top to bottom):**

**1. Rarity Badge** (top of card):
- **Position**: Absolute, top -1rem, left 50% (centered via transform)
- **Transform**: translateX(-50%)
- **Display**: Flex row, centered
- **Gap**: 0.5rem
- **Padding**: 0.5rem vertical, 1.5rem horizontal
- **Background**: Solid rarity color (no transparency)
- **Border radius**: 2rem (pill)
- **Color**: White
- **Font size**: 0.875rem
- **Font weight**: 700
- **Text transform**: Uppercase
- **Letter spacing**: 0.1em
- **Shadow**: `0 4px 16px [rarity-color]60`

**Badge Content:**
- **Award Icon** (16px)
  - Rotates 360° on reveal
  - Animation delay: 6.2s, duration 1s
- **Text**: "[RARE/EPIC/LEGENDARY] Identity"
  - Examples: "Rare Identity", "Epic Identity", "Legendary Identity"

**Badge Animation:**
- **Initial**: Opacity 0, Y: -20
- **Animate**: Opacity 1, Y: 0
- **Duration**: 0.6s
- **Delay**: 6s (appears late for dramatic effect)

**2. Avatar** (circular image):
- **Size**: 120px × 120px
- **Margin**: 0 auto 2rem (centered, 2rem bottom)
- **Border radius**: 50% (perfect circle)
- **Overflow**: Hidden
- **Border**: 4px solid [rarity color]
- **Shadow**: `0 8px 24px [rarity-color]40`
- **Image**: Representative image from user's top category
  - Object-fit: Cover

**Avatar Animation:**
- **Initial**: Opacity 0, Scale 0
- **Animate**: Opacity 1, Scale 1
- **Duration**: 0.6s
- **Delay**: 0.5s
- **Type**: Spring
- **Spring stiffness**: 200 (bouncy entrance)

**3. Identity Title:**
Examples: "The Minimalist Curator", "The Vintage Dreamer", "The Botanical Enthusiast"

Styling:
- **Font size**: 2.5rem
- **Font weight**: 900
- **Color**: White
- **Text align**: Center
- **Bottom margin**: 1rem
- **Text shadow**: 0 2px 8px rgba(0,0,0,0.5)

**Title Animation:**
- **Initial**: Opacity 0, Y: 20
- **Animate**: Opacity 1, Y: 0
- **Duration**: 0.6s
- **Delay**: 2s

**4. Description:**
A personalized sentence describing the user's aesthetic

Example: "Your aesthetic blends minimalist spaces with organic textures, creating a serene and intentional visual world."

Styling:
- **Font size**: 1.125rem
- **Color**: rgba(255,255,255,0.8) (slightly dimmed)
- **Text align**: Center
- **Line height**: 1.7
- **Bottom margin**: 2rem

**Description Animation:**
- **Initial**: Opacity 0
- **Animate**: Opacity 1
- **Duration**: 0.6s
- **Delay**: 2.5s

**5. Top Categories Section:**

**Label:**
- **Text**: "Top Categories"
- **Font size**: 0.875rem
- **Color**: rgba(255,255,255,0.6)
- **Text transform**: Uppercase
- **Letter spacing**: 0.1em
- **Text align**: Center
- **Bottom margin**: 1rem

**Category Pills Container:**
- **Display**: Flex row, wrap
- **Gap**: 0.75rem
- **Justify**: Center

**Individual Pills** (3-4 pills):
- **Padding**: 0.5rem vertical, 1rem horizontal
- **Background**: rgba(255,255,255,0.1)
- **Border radius**: 1rem
- **Font size**: 0.875rem
- **Font weight**: 600
- **Color**: White
- **Text**: Category names (e.g., "Interior Design", "Botanical")

**Pill Animation:**
- **Initial**: Opacity 0, Scale 0
- **Animate**: Opacity 1, Scale 1
- **Duration**: Spring
- **Spring stiffness**: 200
- **Delay**: 4.2s + (index × 0.1s)

**Section Animation:**
- **Initial**: Opacity 0, Y: 20
- **Animate**: Opacity 1, Y: 0
- **Duration**: 0.6s
- **Delay**: 4s

**6. Color Palette Section:**

**Label:**
- **Text**: "Your Color Story"
- Same styling as categories label
- **Bottom margin**: 1rem

**Color Circles Container:**
- **Display**: Flex row
- **Gap**: 0.5rem
- **Justify**: Center

**Color Circles** (5 circles):
- **Size**: 50px × 50px
- **Background**: Actual color hex value
- **Border radius**: 50%
- **Border**: 3px solid rgba(255,255,255,0.2)
- **Shadow**: `0 4px 12px [color]60` (colored glow)

**Circle Animation:**
- **Initial**: Scale 0, Rotate -90°
- **Animate**: Scale 1, Rotate 0°
- **Duration**: Spring
- **Spring stiffness**: 200
- **Delay**: 5s + (index × 0.1s)

**Section Animation:**
- **Initial**: Opacity 0, Y: 20
- **Animate**: Opacity 1, Y: 0
- **Duration**: 0.6s
- **Delay**: 4.8s

**7. Year Badge** (bottom of card):
- **Position**: Absolute, bottom -1rem, left 50% (centered)
- **Transform**: translateX(-50%)
- **Padding**: 0.5rem vertical, 1.5rem horizontal
- **Background**: rgba(255,255,255,0.1)
- **Backdrop-filter**: blur(10px)
- **Border radius**: 2rem (pill)
- **Border**: 1px solid rgba(255,255,255,0.2)
- **Color**: White
- **Font size**: 0.875rem
- **Font weight**: 600
- **Text**: "Pinterest 2024"

**Badge Animation:**
- **Initial**: Opacity 0
- **Animate**: Opacity 1
- **Duration**: 0.6s
- **Delay**: 7s

**Call-to-Action Hint** (below card):
- **Position**: Below card, 3rem top margin
- **Text align**: Center
- **Color**: rgba(255,255,255,0.6)
- **Font size**: 0.875rem
- **Content**: Sparkles icon (16px inline) + "Get ready to share your identity"

**CTA Animation:**
- **Initial**: Opacity 0, Y: 20
- **Animate**: Opacity 1, Y: 0
- **Duration**: 0.6s
- **Delay**: 8s
- **On animation complete**: Waits 2 more seconds, then triggers transition to Share phase

---

### **PHASE 5: Share Panel** (40s+)

**Duration**: Infinite (user-controlled)

**Visual Design:**
- **Background**: Same dark gradient as Identity Card phase
- **Layout**: Flex column, centered
- **Padding**: 2rem
- **Overflow**: Auto (scrollable if needed)

**Container:**
- **Width**: 100%, max 800px
- **Display**: Flex column
- **Gap**: 2rem

**Content Sections:**

**SECTION 1: Header**

**Title: "Your Creative Identity"**
- **Font size**: 2rem
- **Font weight**: 800
- **Color**: White
- **Bottom margin**: 0.5rem

**Subtitle: "Share your unique aesthetic with the world"**
- **Font size**: 1rem
- **Color**: rgba(255,255,255,0.6)

**Header Animation:**
- **Initial**: Opacity 0, Y: -20
- **Animate**: Opacity 1, Y: 0
- **Duration**: 0.6s

**SECTION 2: Card Preview**

A condensed horizontal version of the identity card

**Card Container:**
- **Background**: rgba(255, 255, 255, 0.05)
- **Backdrop-filter**: blur(20px)
- **Border radius**: 1.5rem (slightly less rounded than full card)
- **Padding**: 2rem
- **Border**: 2px solid [rarity color]
- **Shadow**: Same triple-layer as full card

**Card Layout:**
Horizontal flex row with two parts:

**Left: Avatar** (fixed width):
- **Size**: 100px × 100px
- **Border radius**: 50%
- **Overflow**: Hidden
- **Border**: 3px solid [rarity color]
- **Flex-shrink**: 0 (doesn't shrink)

**Right: Content** (flexible):
- **Flex**: 1 (takes remaining space)

Content items (top to bottom):

1. **Rarity Badge:**
   - **Padding**: 0.25rem vertical, 0.75rem horizontal
   - **Background**: Solid rarity color
   - **Border radius**: 1rem
   - **Font size**: 0.75rem
   - **Font weight**: 700
   - **Text transform**: Uppercase
   - **Color**: White
   - **Text**: "RARE", "EPIC", or "LEGENDARY"
   - **Display**: Inline-block
   - **Bottom margin**: 0.75rem

2. **Title:**
   - **Font size**: 1.5rem
   - **Font weight**: 800
   - **Color**: White
   - **Bottom margin**: 0.5rem

3. **Description:**
   - **Font size**: 0.875rem
   - **Color**: rgba(255,255,255,0.7)
   - **Bottom margin**: 1rem

4. **Color Dots Row:**
   - **Display**: Flex
   - **Gap**: 0.5rem
   - 5 small color circles
   - **Each circle**:
     - Size: 30px × 30px
     - Border radius: 50%
     - Border: 2px solid rgba(255,255,255,0.2)
     - Background: Color hex value

**Card Animation:**
- **Initial**: Opacity 0, Scale 0.9
- **Animate**: Opacity 1, Scale 1
- **Duration**: 0.6s
- **Delay**: 0.2s

**SECTION 3: Primary Action Buttons**

**Container:**
- **Display**: Grid
- **Grid columns**: `repeat(auto-fit, minmax(200px, 1fr))` (responsive)
- **Gap**: 1rem

**Button 1: Download**
- **Display**: Flex, centered
- **Gap**: 0.75rem
- **Padding**: 1rem vertical, 1.5rem horizontal
- **Background**: #E60023 (Pinterest red, solid)
- **Color**: White
- **Border**: None
- **Border radius**: 0.75rem
- **Font size**: 1rem
- **Font weight**: 600
- **Cursor**: Pointer
- **Shadow**: 0 4px 12px rgba(230, 0, 35, 0.4)
- **Content**: Download icon (20px) + "Download" text
- **Hover**: Scale 1.05
- **Press**: Scale 0.95

**Button 2: Copy Link**
- **Same layout as Download**
- **Background**: rgba(255,255,255,0.1) (translucent)
- **Border**: 1px solid rgba(255,255,255,0.2)
- **Content**: Link2 icon (20px) + "Copy Link" text
- **Transition**: all 0.3s ease

**When link is copied:**
- **Background** changes to: #10B981 (green)
- **Icon** changes to: Check icon
- **Text** changes to: "Copied!"
- **Duration**: Shows for 2 seconds, then reverts

**Buttons Animation:**
- **Initial**: Opacity 0, Y: 20
- **Animate**: Opacity 1, Y: 0
- **Duration**: 0.6s
- **Delay**: 0.4s

**SECTION 4: Social Share**

**Label:**
- **Text**: "Share on social media"
- **Text align**: Center
- **Bottom margin**: 1rem
- **Font size**: 0.875rem
- **Color**: rgba(255,255,255,0.6)
- **Text transform**: Uppercase
- **Letter spacing**: 0.1em

**Social Buttons Container:**
- **Display**: Flex row
- **Gap**: 1rem
- **Justify**: Center

**Social Buttons** (3 circular buttons):

**Button 1: Twitter**
- **Size**: 50px × 50px (circular)
- **Background**: #1DA1F2 (Twitter blue)
- **Border**: None
- **Border radius**: 50%
- **Cursor**: Pointer
- **Shadow**: 0 4px 12px rgba(29, 161, 242, 0.4)
- **Content**: Twitter icon, 24px, white
- **Hover**: Scale 1.1
- **Press**: Scale 0.9

**Button 2: Facebook**
- **Size**: 50px × 50px
- **Background**: #4267B2 (Facebook blue)
- **Shadow**: 0 4px 12px rgba(66, 103, 178, 0.4)
- **Content**: Facebook icon, 24px, white
- **Same hover/press as Twitter**

**Button 3: More Options**
- **Size**: 50px × 50px
- **Background**: rgba(255,255,255,0.1)
- **Border**: 1px solid rgba(255,255,255,0.2)
- **Content**: Share2 icon, 24px, white
- **Same hover/press**

**Section Animation:**
- **Initial**: Opacity 0, Y: 20
- **Animate**: Opacity 1, Y: 0
- **Duration**: 0.6s
- **Delay**: 0.6s

**SECTION 5: Restart Button**

**Container:**
- **Text align**: Center

**Button:**
- **Display**: Inline-flex
- **Align items**: Center
- **Gap**: 0.5rem
- **Padding**: 0.75rem vertical, 1.5rem horizontal
- **Background**: Transparent
- **Color**: rgba(255,255,255,0.6)
- **Border**: 1px solid rgba(255,255,255,0.2)
- **Border radius**: 0.75rem
- **Font size**: 0.875rem
- **Font weight**: 600
- **Cursor**: Pointer
- **Content**: RotateCcw icon (16px) + "Watch Again" text
- **Hover**: Scale 1.05
- **Press**: Scale 0.95

**Button Animation:**
- **Initial**: Opacity 0
- **Animate**: Opacity 1
- **Duration**: 0.6s
- **Delay**: 0.8s

**Functionality:**
- **Download**: Would use html2canvas library to convert card to PNG, trigger download
- **Copy Link**: Writes current URL to clipboard, shows success state
- **Twitter/Facebook**: Opens share dialog in popup window (600×400px)
  - Twitter: Pre-fills tweet with "I'm a [Title]! Check out my Pinterest Wrapped 2024"
  - Facebook: Shares current URL
- **Watch Again**: Restarts experience from Intro phase

---

## 🎨 Design System Details

### **Color Palette**

**Brand Colors:**
- Pinterest Red: `#E60023`
- Purple: `#C13584`

**Gradients:**
- Hero/Loading/Intro: `linear-gradient(135deg, #E60023 0%, #C13584 100%)`
- Identity Card: `linear-gradient(135deg, #1a1a1a 0%, #2d1b3d 100%)`

**Neutrals:**
- Black: `#111111`
- Dark Purple: `#2d1b3d`
- Gray: `#767676`
- Light Gray: Various rgba(255,255,255,X) overlays

**Rarity Tier Colors:**
- Common: `#9CA3AF` (gray)
- Rare: `#3B82F6` (blue)
- Epic: `#A855F7` (purple)
- Legendary: `#F59E0B` (gold)

### **Typography**

**Font Family:**
```
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif
```

**Scale:**
- Hero titles: `clamp(2rem, 6vw, 4rem)` to `clamp(3rem, 10vw, 6rem)`
- Page titles: 2rem to 3rem
- Section headers: 2.5rem
- Subsections: 1.5rem to 1.75rem
- Body large: 1.125rem to 1.25rem
- Body: 1rem
- Small: 0.875rem
- Tiny: 0.75rem

**Weights:**
- 900: Display numbers, identity titles
- 800: Major headers
- 700: Section headers, badges
- 600: Buttons, labels, category names
- 400: Body text

### **Spacing**

**Consistent Scale:**
- 0.5rem (8px)
- 0.75rem (12px)
- 1rem (16px)
- 1.5rem (24px)
- 2rem (32px)
- 3rem (48px)

### **Border Radius**

- Small elements (badges, pills): 0.5-1rem
- Cards: 1rem to 1.5rem
- Large cards: 2rem
- Circles (avatars, buttons): 50%
- Pills: 2rem or 9999px

### **Shadows**

- Subtle: `0 2px 6px rgba(0,0,0,0.1)` to `0 4px 12px rgba(0,0,0,0.1)`
- Medium: `0 4px 12px rgba(0,0,0,0.3)` to `0 8px 24px rgba(0,0,0,0.4)`
- Dramatic: `0 20px 60px rgba(0,0,0,0.5)`
- Colored glows: `0 0 40px [color]40` at 40% opacity

### **Animations**

**Timing Functions:**
- Ease-out: Most entrances
- Linear: Continuous scrolling
- Spring physics: Playful reveals (stiffness: 150-200)
- Back-out: Bouncy overshoots

**Durations:**
- Quick: 0.3-0.4s
- Standard: 0.5-0.6s
- Medium: 0.8-1s
- Slow: 1.5-2s
- Very slow: 5s (carousel scroll)

**Stagger Delays:**
- Tight: 0.05s per item
- Standard: 0.1s per item
- Loose: 0.15-0.2s per item

**Common Patterns:**
- Fade + slide: Opacity 0→1, Y: 20→0
- Scale entrance: Scale 0.8→1 or 0→1
- Rotate reveal: Rotate -180°→0° or -90°→0°
- Sequence: Opacity → Scale → Content, layered delays

### **Glassmorphism**

Used extensively for modern feel:
- Background: rgba(255,255,255,0.05) to rgba(255,255,255,0.1)
- Backdrop-filter: blur(10px) to blur(20px)
- Border: 1-2px rgba(255,255,255,0.1-0.2)
- Layered with shadows for depth

---

## 🔄 User Flow

```
Landing Page
    ↓
    [Click "Pinterest Wrapped" in nav]
    ↓
Concept Page (/wrapped/concept)
    ↓
    [Read explanation]
    ↓
    [Click "View Prototype"]
    ↓
Loading Screen (0.5-2s)
    ↓
Intro Sequence (5s) - AUTO
    ↓
Image Montage (15s) - AUTO
  ├─ Grid View (5s)
  ├─ Carousel View (5s)
  └─ Category Clusters (5s)
    ↓
Aesthetic Analysis (10s) - AUTO
  ├─ Color Palette (3s)
  ├─ Keyword Cloud (3s)
  └─ Category Breakdown (4s)
    ↓
Identity Card (10s) - AUTO
    ↓
Share Panel (∞) - USER CONTROL
  ├─ Download card
  ├─ Copy link
  ├─ Share socially
  └─ Watch again → loops to Intro
```

**Total Auto-Play Duration**: 45 seconds (5 + 15 + 10 + 10 + 5 buffer)

---

## 💡 Key UX Principles

### **1. No User Control During Playback**
Like Spotify Wrapped, the experience is a timed cinematic journey. Users can't skip, pause, or navigate during the 45 seconds. This:
- Builds anticipation
- Creates shared timing (everyone gets same pacing)
- Feels special and curated

### **2. Emotional Pacing**
The experience has a deliberate emotional arc:
- **Curiosity** (Intro): "What will I see?"
- **Recognition** (Montage): "Those are my images!"
- **Discovery** (Analysis): "I didn't realize I had a pattern!"
- **Pride** (Identity): "This is who I am creatively!"
- **Sharing** (Share Panel): "I want to show this!"

### **3. Progressive Revelation**
Information density increases gradually:
- Intro: Minimal (just year)
- Montage: Images only
- Analysis: Images + data
- Identity: Full synthesis
- Share: All details + actions

### **4. Rarity Gamification**
Identity cards have rarity tiers (Common, Rare, Epic, Legendary):
- Creates collectibility
- Encourages sharing
- Adds playful competition
- Motivates annual return ("What will I get next year?")

### **5. Shareability First**
The final card is designed to:
- Look impressive as a standalone image
- Work well on social media (good aspect ratio)
- Include all key info (title, description, colors, categories)
- Show Pinterest branding (year badge)
- Feel like an achievement to post

### **6. Performance & Polish**
- All animations use GPU-accelerated properties (transform, opacity)
- Images lazy load to prevent blocking
- Smooth 60fps throughout
- Spring physics for playful, organic feel
- Careful timing prevents overlap or rushing

---

## 📐 Responsive Behavior

### **Desktop** (1024px+)
- Full animations and effects
- Wide color palette display (8 circles)
- Multi-column category clusters
- Side-by-side card preview in Share panel

### **Tablet** (640px - 1023px)
- Reduced padding (1.5rem instead of 2rem)
- Fewer images in montage grid (4-5 columns)
- Smaller font sizes (fluid clamp)
- Narrower cards (max-width still applies)

### **Mobile** (320px - 639px)
- Single column layouts
- Larger touch targets (min 44px)
- Reduced animation complexity (fewer particles)
- Stacked social buttons
- Smaller color circles
- Fewer category pills visible
- Vertical card preview in Share panel

**Font Scaling:**
All major text uses `clamp()` for fluid typography:
```
clamp(min-size, preferred-size, max-size)
```
Example: Hero title scales from 2rem (mobile) to 4rem (desktop) fluidly

**Grid Flexibility:**
```
grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr))
```
Auto-adjusts column count based on available space

---

## 🎭 Personality & Tone

### **Visual Voice:**
- **Dramatic**: Large type, bold colors, theatrical timing
- **Modern**: Glassmorphism, smooth animations, clean layouts
- **Playful**: Sparkles, bouncy springs, colorful accents
- **Premium**: Careful spacing, subtle shadows, polished details

### **Copy Tone:**
- **Celebratory**: "Your Year in Pinterest"
- **Personal**: "Your creative identity", "Your aesthetic"
- **Aspirational**: Rarity tiers, identity titles
- **Encouraging**: "Share your unique aesthetic"

### **Examples of Generated Identity Titles:**
Based on aesthetic patterns:
- "The Minimalist Curator"
- "The Vintage Dreamer"
- "The Botanical Enthusiast"
- "The Moody Maximalist"
- "The Earthy Modernist"

### **Description Formula:**
"Your aesthetic blends [primary trait] with [secondary trait], creating a [mood adjective] and [mood adjective] visual world."

Example:
"Your aesthetic blends minimalist spaces with organic textures, creating a serene and intentional visual world."

---

## 🔍 Attention to Detail

### **Micro-interactions:**
- Buttons scale on hover (1.05x) and press (0.95x)
- Icons rotate during reveals
- Color circles have colored glows matching their hue
- Progress bars fill with category's actual color palette
- Copy button changes color and icon when successful
- Sparkles float away at different trajectories

### **Visual Hierarchy:**
- White text for primary content
- 60-80% opacity white for secondary
- Colored text (red) for emphasis and actions
- Gray for labels and metadata

### **Accessibility Considerations:**
- High contrast (white on dark, or dark on light)
- Minimum 14px font size
- Large touch targets (44px minimum)
- Clear focus states (though could be enhanced)
- Readable font weights (not too thin)

### **Loading States:**
- Spinner during data fetch
- Friendly messages ("Analyzing Your Year")
- Error handling with retry option
- Smooth transitions (no jarring cuts)

### **Data Visualization:**
- Circle sizes represent importance (color frequency)
- Font sizes represent weight (keyword importance)
- Progress bar widths show percentages
- Color gradients show category palettes
- Thumbnail grids give visual proof

---

## 🎬 Production Notes

### **What Makes This Effective:**

1. **Familiar Format**: Users understand "Wrapped" experiences from Spotify
2. **Personal Data**: Uses their actual Pinterest saves (feels custom)
3. **Surprise Element**: They discover patterns they didn't consciously know
4. **Social Currency**: Shareable identity card has aesthetic value
5. **Annual Ritual**: Creates expectation for yearly return
6. **Mobile-Ready**: Works on phones where sharing happens
7. **Screenshot-Worthy**: Every phase looks good frozen
8. **No Learning Curve**: Zero interaction required, just watch
9. **Emotional Payoff**: Identity card feels like a reward
10. **Brand Reinforcement**: Subtle Pinterest branding throughout

### **Technical Implementation Notes:**

**Data Sources:**
- User's saved pins from past year
- Image URLs
- Category classifications
- Color extraction (dominant hues)
- Keyword tagging

**Image Processing:**
- Masonry layout calculations
- Lazy loading for performance
- Color palette extraction
- Aspect ratio preservation

**Export Functionality:**
- HTML-to-Canvas conversion for download
- Social sharing meta tags
- URL generation for link sharing

**Analytics Opportunities:**
- Track completion rate (how many finish 45s)
- Share rate (social button clicks)
- Download rate
- Restart rate (re-watching)
- Rarity distribution

---

## 🎯 Success Metrics

**Engagement:**
- % who complete full 45s experience
- Average time on Share panel
- Restart rate

**Sharing:**
- Download clicks
- Social share clicks
- Link copy clicks
- External shares (if trackable)

**Delight:**
- User feedback/comments
- Return rate year-over-year
- Brand sentiment

**Viral Potential:**
- Social media mentions
- Screenshots shared
- Organic reach

---

## ✨ Summary

Pinterest Wrapped transforms a year of visual inspiration into a 45-second emotional journey culminating in a personalized, shareable identity card. Through cinematic timing, dramatic animations, and thoughtful data visualization, it creates a moment of pride and self-expression that users want to share. The experience combines Pinterest's visual DNA (red branding, masonry layouts, image-first design) with modern UI trends (glassmorphism, fluid typography, spring animations) and proven engagement patterns (no-skip playback, rarity gamification, social sharing).

The result is a delightful annual ritual that celebrates users' creativity, strengthens their connection to Pinterest, and generates organic social proof through beautiful, shareable artifacts.

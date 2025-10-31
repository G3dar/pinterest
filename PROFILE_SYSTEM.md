# Pinterest Wrapped - Profile System

## Overview

The Pinterest Wrapped experience now features **4 distinct profile personas** that cycle through each time a user clicks "Start Your Journey". Each profile represents a unique aesthetic personality with completely different:
- Categories
- Color palettes
- Keywords/tags
- Identity cards (name, description, rarity)
- Avatar images
- Personality traits

## The 4 Profiles

### 1. 🌙 The Ethereal Dreamer (Luna Mirage)
**Rarity:** Mythic (Purple #B794F6)
**Personality:** Whimsical • Surreal • Otherworldly

**Categories:**
- Fantasy & Play (28%)
- Microscopic Kingdoms (24%)
- Cosmic Cuisine (26%)
- Surreal Office Life (22%)

**Aesthetic:** Float between worlds where stardust meets dewdrops and office desks melt into clouds. Magic in the microscopic, wonder in the cosmic.

**Top Keywords:** dreamy, ethereal, celestial, surreal, microscopic, whimsical, cosmic, mystical, floating, magical

---

### 2. 🖤 The Dark Romantic (Raven Nightshade)
**Rarity:** Legendary (Orange-Red #FF6B35)
**Personality:** Dramatic • Moody • Electric

**Categories:**
- Gothic Pastries (30%)
- Neon Medieval (26%)
- Underwater Cyberpunk (24%)
- Art & Design (20%)

**Aesthetic:** Embraces shadows and neon glow. Victorian darkness meets cyberpunk depths, where skull cakes and electric knights dance in underwater cities.

**Top Keywords:** dark, neon, electric, Victorian, cyberpunk, haunting, glowing, dramatic, submerged, decadent

---

### 3. ⚙️ The Retro Futurist (Atlas Volta)
**Rarity:** Epic (Golden #FFB84D)
**Personality:** Nostalgic • Inventive • Groovy

**Categories:**
- Retro Space Lounge (29%)
- Steampunk Nature (27%)
- Animated Characters (23%)
- Home Decor (21%)

**Aesthetic:** Nostalgic for futures that never were. 70s space lounges blend with brass clockwork forests, where mechanical flowers bloom and disco balls orbit Mars.

**Top Keywords:** vintage, mechanical, brass, groovy, clockwork, nostalgic, 70s, inventive, cozy, whimsical

---

### 4. 🔥 The Wild Innovator (Phoenix Wildhart)
**Rarity:** Rare (Vibrant Cyan #4ECDC4)
**Personality:** Adventurous • Bold • Trendsetting

**Categories:**
- Fashion & Style (28%)
- Travel & Places (26%)
- Food & Drink (24%)
- Futuristic & Tech (22%)

**Aesthetic:** Bold, fearless, and unapologetically eclectic. Fashion-forward thinking meets wanderlust adventures, mixing cutting-edge tech with organic warmth.

**Top Keywords:** bold, adventurous, trendy, eclectic, innovative, vibrant, wanderlust, fearless, chic, organic

---

## How It Works

### Cycling Mechanism

1. **First Visit:** User sees Profile 1 (The Ethereal Dreamer)
2. **Second Visit:** User sees Profile 2 (The Dark Romantic)
3. **Third Visit:** User sees Profile 3 (The Retro Futurist)
4. **Fourth Visit:** User sees Profile 4 (The Wild Innovator)
5. **Fifth Visit:** Cycles back to Profile 1

The cycle is tracked using `localStorage` with the key `currentProfileIndex`.

### Data Generation

Each time `generateWrappedData()` is called:
1. Gets the next profile in the cycle via `getNextProfile()`
2. Generates images only from that profile's 4 categories
3. Creates a color palette from those categories
4. Uses the profile's predefined keywords
5. Builds the identity card with profile-specific data
6. Selects an avatar from the profile's preferred image index

### Profile Structure

```javascript
{
  id: 'etherealDreamer',
  name: 'Luna Mirage',
  identityCard: {
    title: 'The Ethereal Dreamer',
    description: '...',
    rarity: 'Mythic',
    rarityColor: '#B794F6',
    personality: 'Whimsical • Surreal • Otherworldly',
    year: 2025
  },
  categories: [
    { key: 'fantasy-play', weight: 0.28 },
    { key: 'microscopic-kingdoms', weight: 0.24 },
    // ...
  ],
  keywords: [
    { text: 'dreamy', weight: 0.32 },
    { text: 'ethereal', weight: 0.28 },
    // ...
  ],
  avatarImageIndex: 5
}
```

## File Structure

```
src/data/
├── categories.js       # All 16 category definitions
├── profiles.js         # 4 profile personas with cycling logic
└── mockData.js         # Data generator using profiles
```

## API

### `categories.js`

```javascript
// Object containing all 16 categories
export const allCategories = { ... }

// Get images for a specific category
export const getCategoryImages(categoryKey, count = 24)
```

### `profiles.js`

```javascript
// Get next profile and advance the cycle
export const getNextProfile()

// Get current profile without advancing
export const getCurrentProfile()

// Reset cycle to first profile
export const resetProfileCycle()
```

### `mockData.js`

```javascript
// Generate wrapped data for current profile
export const generateWrappedData()
```

## Testing the System

1. **Test Profile Cycling:**
   - Click "Start Your Journey" 4 times
   - You should see 4 different profiles with distinct aesthetics
   - 5th click should return to Profile 1

2. **Reset Cycle:**
   ```javascript
   localStorage.removeItem('currentProfileIndex')
   ```

3. **Force Specific Profile:**
   ```javascript
   localStorage.setItem('currentProfileIndex', '2') // Show Profile 3 next
   ```

## Image Requirements

Each category needs 24 images in the following format:
```
/imgs/{category-key}/{category-key}-01.jpg
/imgs/{category-key}/{category-key}-02.jpg
...
/imgs/{category-key}/{category-key}-24.jpg
```

Total: 16 categories × 24 images = **384 images minimum**

The MEGA script creates 16 categories × 36 images = **576 images**

## Future Enhancements

- Add more profiles (currently limited to 4)
- Allow users to manually select profiles
- Add profile preview/carousel on home page
- Save user's favorite profile
- Create profile-specific music/sound themes
- Add profile-based social sharing cards

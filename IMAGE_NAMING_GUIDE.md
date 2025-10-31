# Image Naming Convention Guide

## How the System Works

The PinWrap app **programmatically constructs** image paths using this pattern:

```
/imgs/{category-key}/{category-key}-{number}.jpg
```

The system **does NOT** read your filesystem to discover files. Instead, it generates the exact paths it expects based on the category key and loops through numbered files.

## Example Code

In `src/data/categories.js`:

```javascript
export const getCategoryImages = (categoryKey, count = 24) => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    const paddedNum = i.toString().padStart(2, '0');  // 01, 02, 03, etc.
    images.push({
      url: `/imgs/${categoryKey}/${categoryKey}-${paddedNum}.jpg`,
      // ...
    });
  }
  return images;
};
```

## Required Folder Structure

Your image generation script **MUST** create folders and files with these **exact names**:

### Original 8 Categories (Already Exist ✓)

```
public/imgs/
├── art-design/
│   ├── art-design-01.jpg
│   ├── art-design-02.jpg
│   └── ... (24-36 images)
│
├── characters-animated/
│   ├── characters-animated-01.jpg
│   ├── characters-animated-02.jpg
│   └── ... (24-36 images)
│
├── fantasy-play/
│   ├── fantasy-play-01.jpg
│   └── ...
│
├── fashion-style/
│   ├── fashion-style-01.jpg
│   └── ...
│
├── food-lifestyle/
│   ├── food-lifestyle-01.jpg
│   └── ...
│
├── futuristic-tech/
│   ├── futuristic-tech-01.jpg
│   └── ...
│
├── home-decor/
│   ├── home-decor-01.jpg
│   └── ...
│
└── nature-travel/
    ├── nature-travel-01.jpg
    └── ...
```

### New 8 Categories (Need to be Generated)

```
public/imgs/
├── underwater-cyberpunk/
│   ├── underwater-cyberpunk-01.jpg
│   ├── underwater-cyberpunk-02.jpg
│   ├── underwater-cyberpunk-03.jpg
│   └── ... (up to 36 images)
│
├── gothic-pastries/
│   ├── gothic-pastries-01.jpg
│   ├── gothic-pastries-02.jpg
│   └── ...
│
├── microscopic-kingdoms/
│   ├── microscopic-kingdoms-01.jpg
│   └── ...
│
├── retro-space-lounge/
│   ├── retro-space-lounge-01.jpg
│   └── ...
│
├── surreal-office-life/
│   ├── surreal-office-life-01.jpg
│   └── ...
│
├── steampunk-nature/
│   ├── steampunk-nature-01.jpg
│   └── ...
│
├── neon-medieval/
│   ├── neon-medieval-01.jpg
│   └── ...
│
└── cosmic-cuisine/
    ├── cosmic-cuisine-01.jpg
    └── ...
```

## Category Key Reference

Your Python script should use these **exact category keys**:

```python
CATEGORIES = {
    # Original 8 (already have images)
    'art-design': 'Art & Design',
    'characters-animated': 'Animated Characters',
    'fantasy-play': 'Fantasy & Play',
    'fashion-style': 'Fashion & Style',
    'food-lifestyle': 'Food & Lifestyle',
    'futuristic-tech': 'Futuristic & Tech',
    'home-decor': 'Home Decor',
    'nature-travel': 'Nature & Travel',

    # New 8 (need to generate)
    'underwater-cyberpunk': 'Underwater Cyberpunk',
    'gothic-pastries': 'Gothic Pastries',
    'microscopic-kingdoms': 'Microscopic Kingdoms',
    'retro-space-lounge': 'Retro Space Lounge',
    'surreal-office-life': 'Surreal Office Life',
    'steampunk-nature': 'Steampunk Nature',
    'neon-medieval': 'Neon Medieval',
    'cosmic-cuisine': 'Cosmic Cuisine'
}
```

## Python Script Pattern

Your image generation script should follow this pattern:

```python
import os

OUTPUT_DIR = r"C:\Users\ghell\pinterest3\public\images_v3_MEGA"
IMAGES_PER_CATEGORY = 36

for category_key, category_name in CATEGORIES.items():
    # Create category folder
    category_dir = os.path.join(OUTPUT_DIR, category_key)
    os.makedirs(category_dir, exist_ok=True)

    # Generate images
    for i in range(1, IMAGES_PER_CATEGORY + 1):
        # Zero-padded number (01, 02, 03, etc.)
        num = str(i).zfill(2)

        # Construct filename using category key
        filename = f"{category_key}-{num}.jpg"
        filepath = os.path.join(category_dir, filename)

        # Generate image at filepath
        generate_image(filepath, category_name)
```

## Important Notes

1. **Folder names** = category keys (e.g., `underwater-cyberpunk`)
2. **File names** = `{category-key}-{number}.jpg` (e.g., `underwater-cyberpunk-01.jpg`)
3. **Numbers** must be **zero-padded** (01, 02, 03, not 1, 2, 3)
4. **Case sensitive** on some systems - use lowercase with hyphens
5. The system expects at least **24 images** per category, but can handle up to 36

## Verification Command

After generating images, verify the structure:

```bash
# Windows PowerShell
Get-ChildItem public/imgs/underwater-cyberpunk | Select-Object -First 5

# Should output:
# underwater-cyberpunk-01.jpg
# underwater-cyberpunk-02.jpg
# underwater-cyberpunk-03.jpg
# underwater-cyberpunk-04.jpg
# underwater-cyberpunk-05.jpg
```

## Common Mistakes to Avoid

❌ **Wrong folder name:**
```
public/imgs/Underwater_Cyberpunk/  # Capital letters, underscore
```

✅ **Correct folder name:**
```
public/imgs/underwater-cyberpunk/  # Lowercase, hyphen
```

❌ **Wrong file name:**
```
underwater_cyberpunk_1.jpg   # Underscore, not zero-padded
UnderWaterCyberpunk01.jpg    # Wrong casing
underwater-cyberpunk_01.jpg  # Underscore before number
```

✅ **Correct file name:**
```
underwater-cyberpunk-01.jpg  # Lowercase, hyphen, zero-padded
```

## After Generation

Once images are generated, you need to:

1. Copy/move the images from your generation directory to:
   ```
   C:\Users\ghell\pinterest_complete_brief\public\imgs\
   ```

2. Verify one category:
   ```bash
   ls public/imgs/underwater-cyberpunk/
   ```

3. The app will automatically load them using the constructed paths!

// Mock data generator for Pinterest Wrapped experience
// Now uses profile system to cycle through 4 different personas

import { allCategories, getCategoryImages } from './categories';
import { getCurrentProfile } from './profiles';

// Generate wrapped data based on current profile
export const generateWrappedData = () => {
  // Get the CURRENT profile (don't advance the cycle)
  const profile = getCurrentProfile();

  // Generate images for this profile's categories
  const allImages = [];
  const topCategories = [];

  profile.categories.forEach((cat, index) => {
    const categoryData = allCategories[cat.key];
    const images = getCategoryImages(cat.key, 24);

    allImages.push(...images);

    topCategories.push({
      id: cat.key,
      name: categoryData.name,
      percentage: Math.round(cat.weight * 100),
      weight: cat.weight,
      colors: categoryData.colors,
      images: images
    });
  });

  // Generate color palette from profile's categories
  const colorPalette = [];
  profile.categories.forEach((cat, index) => {
    const categoryData = allCategories[cat.key];
    categoryData.colors.forEach((color, colorIndex) => {
      // Calculate weight based on category weight and color position
      const weight = cat.weight * (1 - colorIndex * 0.2);
      colorPalette.push({
        hex: color,
        weight: weight,
        name: getColorName(color)
      });
    });
  });

  // Sort by weight and take top 8 colors
  colorPalette.sort((a, b) => b.weight - a.weight);
  const topColors = colorPalette.slice(0, 8);

  // Normalize weights to sum to 1
  const totalWeight = topColors.reduce((sum, c) => sum + c.weight, 0);
  topColors.forEach(c => {
    c.weight = c.weight / totalWeight;
  });

  // Use profile's keywords
  const keywords = profile.keywords;

  // Get avatar image from first category
  const avatarImage = allImages[profile.avatarImageIndex] || allImages[0];

  // Build identity card with profile data
  const identityCard = {
    ...profile.identityCard,
    topCategories: topCategories.slice(0, 3).map(c => c.name),
    colorPalette: topColors.slice(0, 5),
    avatar: avatarImage.url,
    profileName: profile.name
  };

  return {
    allImages,
    colorPalette: topColors,
    keywords,
    topCategories,
    identityCard,
    year: 2025,
    profileId: profile.id,
    profileName: profile.name
  };
};

// Helper function to name colors
const getColorName = (hex) => {
  const colorNames = {
    '#E8D5C4': 'Warm Beige',
    '#C4A57B': 'Sand',
    '#8B7355': 'Earthy Brown',
    '#FFB6C1': 'Soft Pink',
    '#87CEEB': 'Sky Blue',
    '#98D8C8': 'Mint Green',
    '#D8BFD8': 'Lavender',
    '#DDA0DD': 'Plum',
    '#BA55D3': 'Orchid',
    '#2C3E50': 'Midnight Blue',
    '#BFA696': 'Taupe',
    '#F4A460': 'Sandy Brown',
    '#DEB887': 'Burlywood',
    '#D2691E': 'Cinnamon',
    '#00D9FF': 'Electric Cyan',
    '#7B68EE': 'Medium Slate Blue',
    '#4B0082': 'Indigo',
    '#F5F5DC': 'Beige',
    '#D3D3D3': 'Light Gray',
    '#A9A9A9': 'Dark Gray',
    '#228B22': 'Forest Green',
    '#8B4513': 'Saddle Brown',
    '#00CED1': 'Dark Turquoise',
    '#FF1493': 'Deep Pink',
    '#2C1810': 'Dark Chocolate',
    '#8B0000': 'Dark Red',
    '#4A0E0E': 'Deep Maroon',
    '#E6F3FF': 'Alice Blue',
    '#B8E6F0': 'Powder Blue',
    '#98D8E8': 'Light Sky Blue',
    '#FF8C00': 'Dark Orange',
    '#FFD700': 'Gold',
    '#C0C0C0': 'Silver',
    '#FF6B6B': 'Coral Red',
    '#4ECDC4': 'Turquoise',
    '#CD7F32': 'Bronze',
    '#2F4F4F': 'Dark Slate Gray',
    '#00FF00': 'Lime',
    '#FF0080': 'Hot Pink',
    '#8000FF': 'Electric Purple',
    '#9370DB': 'Medium Purple',
    '#B794F6': 'Lavender Purple',
    '#FF6B35': 'Orange Red',
    '#FFB84D': 'Mellow Yellow'
  };

  return colorNames[hex] || hex;
};

export default generateWrappedData;

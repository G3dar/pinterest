// All 16 Pinterest categories with metadata
export const allCategories = {
  // Original 8 categories (matching existing folder names)
  'art-design': {
    name: 'Art & Design',
    colors: ['#E8D5C4', '#C4A57B', '#8B7355'],
    keywords: ['minimalist', 'geometric', 'abstract', 'modern'],
    mood: 'sophisticated'
  },
  'characters-animated': {
    name: 'Animated Characters',
    colors: ['#FFB6C1', '#87CEEB', '#98D8C8'],
    keywords: ['playful', 'whimsical', 'colorful', 'imaginative'],
    mood: 'joyful'
  },
  'fantasy-play': {
    name: 'Fantasy & Play',
    colors: ['#D8BFD8', '#DDA0DD', '#BA55D3'],
    keywords: ['magical', 'dreamy', 'ethereal', 'mystical'],
    mood: 'enchanted'
  },
  'fashion-style': {
    name: 'Fashion & Style',
    colors: ['#2C3E50', '#E8D5C4', '#BFA696'],
    keywords: ['elegant', 'chic', 'sophisticated', 'trendy'],
    mood: 'confident'
  },
  'food-lifestyle': {
    name: 'Food & Lifestyle',
    colors: ['#F4A460', '#DEB887', '#D2691E'],
    keywords: ['cozy', 'warm', 'inviting', 'organic'],
    mood: 'comforting'
  },
  'futuristic-tech': {
    name: 'Futuristic & Tech',
    colors: ['#00D9FF', '#7B68EE', '#4B0082'],
    keywords: ['futuristic', 'sleek', 'innovative', 'tech'],
    mood: 'progressive'
  },
  'home-decor': {
    name: 'Home Decor',
    colors: ['#F5F5DC', '#D3D3D3', '#A9A9A9'],
    keywords: ['serene', 'minimal', 'cozy', 'intentional'],
    mood: 'peaceful'
  },
  'nature-travel': {
    name: 'Nature & Travel',
    colors: ['#228B22', '#87CEEB', '#8B4513'],
    keywords: ['natural', 'adventurous', 'scenic', 'wanderlust'],
    mood: 'explorative'
  },

  // New 8 creative categories
  'underwater-cyberpunk': {
    name: 'Underwater Cyberpunk',
    colors: ['#00CED1', '#FF1493', '#4B0082'],
    keywords: ['submerged', 'bioluminescent', 'neon', 'aquatic'],
    mood: 'immersive'
  },
  'gothic-pastries': {
    name: 'Gothic Pastries',
    colors: ['#2C1810', '#8B0000', '#4A0E0E'],
    keywords: ['dark', 'decadent', 'Victorian', 'haunting'],
    mood: 'macabre'
  },
  'microscopic-kingdoms': {
    name: 'Microscopic Kingdoms',
    colors: ['#E6F3FF', '#B8E6F0', '#98D8E8'],
    keywords: ['tiny', 'cellular', 'intricate', 'microscopic'],
    mood: 'wonder'
  },
  'retro-space-lounge': {
    name: 'Retro Space Lounge',
    colors: ['#FF8C00', '#FFD700', '#8B4513'],
    keywords: ['vintage', 'cosmic', 'groovy', '70s'],
    mood: 'nostalgic'
  },
  'surreal-office-life': {
    name: 'Surreal Office Life',
    colors: ['#C0C0C0', '#FF6B6B', '#4ECDC4'],
    keywords: ['absurd', 'melting', 'impossible', 'surreal'],
    mood: 'bewildering'
  },
  'steampunk-nature': {
    name: 'Steampunk Nature',
    colors: ['#CD7F32', '#8B4513', '#2F4F4F'],
    keywords: ['mechanical', 'brass', 'clockwork', 'industrial'],
    mood: 'inventive'
  },
  'neon-medieval': {
    name: 'Neon Medieval',
    colors: ['#00FF00', '#FF0080', '#8000FF'],
    keywords: ['electric', 'glowing', 'knightly', 'futuristic'],
    mood: 'electrifying'
  },
  'cosmic-cuisine': {
    name: 'Cosmic Cuisine',
    colors: ['#4B0082', '#9370DB', '#FFD700'],
    keywords: ['stellar', 'galactic', 'nebula', 'celestial'],
    mood: 'transcendent'
  }
};

// Helper to get image paths for a category
export const getCategoryImages = (categoryKey, count = 36) => {
  const images = [];
  for (let i = 1; i <= count; i++) {
    const paddedNum = i.toString().padStart(2, '0');
    images.push({
      url: `/imgs/${categoryKey}/${categoryKey}-${paddedNum}.jpg`,
      category: categoryKey,
      categoryName: allCategories[categoryKey].name,
      colors: allCategories[categoryKey].colors
    });
  }
  return images;
};

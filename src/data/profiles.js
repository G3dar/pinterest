// 4 Distinct Pinterest Wrapped Profiles
// Each profile represents a unique aesthetic personality

export const profiles = {
  etherealDreamer: {
    id: 'etherealDreamer',
    name: 'Luna Mirage',

    // Identity Card
    identityCard: {
      title: 'The Ethereal Dreamer',
      description: 'You float between worlds—where stardust meets dewdrops and office desks melt into clouds. Your vision sees magic in the microscopic and wonder in the cosmic.',
      rarity: 'Mythic',
      rarityColor: '#B794F6', // Purple mythic
      personality: 'Whimsical • Surreal • Otherworldly',
      year: 2025
    },

    // Top 4 categories for this profile
    categories: [
      { key: 'fantasy-play', weight: 0.28 },
      { key: 'microscopic-kingdoms', weight: 0.24 },
      { key: 'cosmic-cuisine', weight: 0.26 },
      { key: 'surreal-office-life', weight: 0.22 }
    ],

    // Curated keywords
    keywords: [
      { text: 'dreamy', weight: 0.32 },
      { text: 'ethereal', weight: 0.28 },
      { text: 'celestial', weight: 0.24 },
      { text: 'surreal', weight: 0.22 },
      { text: 'microscopic', weight: 0.20 },
      { text: 'whimsical', weight: 0.18 },
      { text: 'cosmic', weight: 0.16 },
      { text: 'mystical', weight: 0.14 },
      { text: 'floating', weight: 0.12 },
      { text: 'magical', weight: 0.10 }
    ],

    // Avatar index (which image to use from first category)
    avatarImageIndex: 5
  },

  darkRomantic: {
    id: 'darkRomantic',
    name: 'Raven Nightshade',

    identityCard: {
      title: 'The Dark Romantic',
      description: 'Your aesthetic embraces shadows and neon glow. Victorian darkness meets cyberpunk depths, where skull cakes and electric knights dance in underwater cities.',
      rarity: 'Legendary',
      rarityColor: '#FF6B35', // Fiery orange legendary
      personality: 'Dramatic • Moody • Electric',
      year: 2025
    },

    categories: [
      { key: 'gothic-pastries', weight: 0.30 },
      { key: 'neon-medieval', weight: 0.26 },
      { key: 'underwater-cyberpunk', weight: 0.24 },
      { key: 'art-design', weight: 0.20 }
    ],

    keywords: [
      { text: 'dark', weight: 0.34 },
      { text: 'neon', weight: 0.30 },
      { text: 'electric', weight: 0.26 },
      { text: 'Victorian', weight: 0.24 },
      { text: 'cyberpunk', weight: 0.22 },
      { text: 'haunting', weight: 0.20 },
      { text: 'glowing', weight: 0.18 },
      { text: 'dramatic', weight: 0.16 },
      { text: 'submerged', weight: 0.14 },
      { text: 'decadent', weight: 0.12 }
    ],

    avatarImageIndex: 8
  },

  retroFuturist: {
    id: 'retroFuturist',
    name: 'Atlas Volta',

    identityCard: {
      title: 'The Retro Futurist',
      description: 'Nostalgic for futures that never were. You blend 70s space lounges with brass clockwork forests, where mechanical flowers bloom and disco balls orbit Mars.',
      rarity: 'Epic',
      rarityColor: '#FFB84D', // Golden epic
      personality: 'Nostalgic • Inventive • Groovy',
      year: 2025
    },

    categories: [
      { key: 'retro-space-lounge', weight: 0.29 },
      { key: 'steampunk-nature', weight: 0.27 },
      { key: 'characters-animated', weight: 0.23 },
      { key: 'home-decor', weight: 0.21 }
    ],

    keywords: [
      { text: 'vintage', weight: 0.32 },
      { text: 'mechanical', weight: 0.28 },
      { text: 'brass', weight: 0.26 },
      { text: 'groovy', weight: 0.24 },
      { text: 'clockwork', weight: 0.22 },
      { text: 'nostalgic', weight: 0.20 },
      { text: '70s', weight: 0.18 },
      { text: 'inventive', weight: 0.16 },
      { text: 'cozy', weight: 0.14 },
      { text: 'whimsical', weight: 0.12 }
    ],

    avatarImageIndex: 3
  },

  wildInnovator: {
    id: 'wildInnovator',
    name: 'Phoenix Wildhart',

    identityCard: {
      title: 'The Wild Innovator',
      description: 'Bold, fearless, and unapologetically eclectic. You blend fashion-forward thinking with wanderlust adventures, mixing cutting-edge tech with organic warmth.',
      rarity: 'Rare',
      rarityColor: '#4ECDC4', // Vibrant cyan rare
      personality: 'Adventurous • Bold • Trendsetting',
      year: 2025
    },

    categories: [
      { key: 'fashion-style', weight: 0.28 },
      { key: 'nature-travel', weight: 0.26 },
      { key: 'food-lifestyle', weight: 0.24 },
      { key: 'futuristic-tech', weight: 0.22 }
    ],

    keywords: [
      { text: 'bold', weight: 0.32 },
      { text: 'adventurous', weight: 0.30 },
      { text: 'trendy', weight: 0.28 },
      { text: 'eclectic', weight: 0.26 },
      { text: 'innovative', weight: 0.24 },
      { text: 'vibrant', weight: 0.22 },
      { text: 'wanderlust', weight: 0.20 },
      { text: 'fearless', weight: 0.18 },
      { text: 'chic', weight: 0.16 },
      { text: 'organic', weight: 0.14 }
    ],

    avatarImageIndex: 12
  }
};

// Get the profile order (cycles through 1 -> 2 -> 3 -> 4 -> 1)
export const getNextProfile = () => {
  const profileKeys = Object.keys(profiles);
  const currentIndex = parseInt(localStorage.getItem('currentProfileIndex') || '0', 10);
  const nextIndex = (currentIndex + 1) % profileKeys.length;

  localStorage.setItem('currentProfileIndex', nextIndex.toString());

  return profiles[profileKeys[nextIndex]];
};

// Get current profile without advancing
export const getCurrentProfile = () => {
  const profileKeys = Object.keys(profiles);
  const currentIndex = parseInt(localStorage.getItem('currentProfileIndex') || '0', 10);
  return profiles[profileKeys[currentIndex]];
};

// Reset to first profile
export const resetProfileCycle = () => {
  localStorage.setItem('currentProfileIndex', '0');
};

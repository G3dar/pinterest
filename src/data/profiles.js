// 16 Distinct Pinterest Wrapped Profiles
// Each profile represents a unique aesthetic personality with creative combinations

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
  },

  aquaticRebel: {
    id: 'aquaticRebel',
    name: 'Marina Flux',

    identityCard: {
      title: 'The Aquatic Rebel',
      description: 'You dive deep where neon meets the abyss. Bioluminescent dreams pulse through digital waters, where underwater cities glow with electric rebellion and mermaids code in binary.',
      rarity: 'Mythic',
      rarityColor: '#00CED1', // Aqua mythic
      personality: 'Subversive • Fluid • Luminous',
      year: 2025
    },

    categories: [
      { key: 'underwater-cyberpunk', weight: 0.32 },
      { key: 'futuristic-tech', weight: 0.28 },
      { key: 'neon-medieval', weight: 0.22 },
      { key: 'art-design', weight: 0.18 }
    ],

    keywords: [
      { text: 'submerged', weight: 0.34 },
      { text: 'neon', weight: 0.30 },
      { text: 'bioluminescent', weight: 0.28 },
      { text: 'fluid', weight: 0.26 },
      { text: 'electric', weight: 0.24 },
      { text: 'aquatic', weight: 0.22 },
      { text: 'digital', weight: 0.20 },
      { text: 'rebellious', weight: 0.18 },
      { text: 'glowing', weight: 0.16 },
      { text: 'cybernetic', weight: 0.14 }
    ],

    avatarImageIndex: 7
  },

  victorianBaker: {
    id: 'victorianBaker',
    name: 'Morticia Velvet',

    identityCard: {
      title: 'The Victorian Baker',
      description: 'Your confections tell tales of beautiful darkness. Black roses adorn skull-shaped cakes, and every pastry whispers gothic romance. Elegance meets the macabre in your enchanted kitchen.',
      rarity: 'Legendary',
      rarityColor: '#8B0000', // Dark red legendary
      personality: 'Elegant • Dark • Decadent',
      year: 2025
    },

    categories: [
      { key: 'gothic-pastries', weight: 0.34 },
      { key: 'food-lifestyle', weight: 0.26 },
      { key: 'art-design', weight: 0.22 },
      { key: 'home-decor', weight: 0.18 }
    ],

    keywords: [
      { text: 'gothic', weight: 0.34 },
      { text: 'Victorian', weight: 0.30 },
      { text: 'decadent', weight: 0.28 },
      { text: 'dark', weight: 0.26 },
      { text: 'elegant', weight: 0.24 },
      { text: 'macabre', weight: 0.22 },
      { text: 'haunting', weight: 0.20 },
      { text: 'ornate', weight: 0.18 },
      { text: 'mysterious', weight: 0.16 },
      { text: 'romantic', weight: 0.14 }
    ],

    avatarImageIndex: 9
  },

  microscopicExplorer: {
    id: 'microscopicExplorer',
    name: 'Celeste Atom',

    identityCard: {
      title: 'The Microscopic Explorer',
      description: 'You see universes in dewdrops. Cellular kingdoms and molecular cities unfold before your eyes. The invisible world is your playground, where atoms dance and bacteria build empires.',
      rarity: 'Epic',
      rarityColor: '#B8E6F0', // Sky blue epic
      personality: 'Curious • Scientific • Wonder-struck',
      year: 2025
    },

    categories: [
      { key: 'microscopic-kingdoms', weight: 0.34 },
      { key: 'fantasy-play', weight: 0.26 },
      { key: 'futuristic-tech', weight: 0.22 },
      { key: 'art-design', weight: 0.18 }
    ],

    keywords: [
      { text: 'microscopic', weight: 0.34 },
      { text: 'cellular', weight: 0.30 },
      { text: 'intricate', weight: 0.28 },
      { text: 'tiny', weight: 0.26 },
      { text: 'scientific', weight: 0.24 },
      { text: 'wonder', weight: 0.22 },
      { text: 'molecular', weight: 0.20 },
      { text: 'delicate', weight: 0.18 },
      { text: 'invisible', weight: 0.16 },
      { text: 'ethereal', weight: 0.14 }
    ],

    avatarImageIndex: 11
  },

  chronoTraveler: {
    id: 'chronoTraveler',
    name: 'Orion Stardust',

    identityCard: {
      title: 'The Chrono Traveler',
      description: 'Stuck between decades that never existed. Your soul orbits through 70s space stations and disco-lit moon bases, where shag carpets meet zero gravity and lava lamps float free.',
      rarity: 'Epic',
      rarityColor: '#FF8C00', // Orange epic
      personality: 'Groovy • Time-bending • Cosmic',
      year: 2025
    },

    categories: [
      { key: 'retro-space-lounge', weight: 0.32 },
      { key: 'cosmic-cuisine', weight: 0.28 },
      { key: 'home-decor', weight: 0.22 },
      { key: 'characters-animated', weight: 0.18 }
    ],

    keywords: [
      { text: 'retro', weight: 0.34 },
      { text: '70s', weight: 0.30 },
      { text: 'cosmic', weight: 0.28 },
      { text: 'groovy', weight: 0.26 },
      { text: 'vintage', weight: 0.24 },
      { text: 'stellar', weight: 0.22 },
      { text: 'funky', weight: 0.20 },
      { text: 'nostalgic', weight: 0.18 },
      { text: 'psychedelic', weight: 0.16 },
      { text: 'orbiting', weight: 0.14 }
    ],

    avatarImageIndex: 15
  },

  absurdistDreamer: {
    id: 'absurdistDreamer',
    name: 'Salvador Glitch',

    identityCard: {
      title: 'The Absurdist Dreamer',
      description: 'Reality melts at your desk. Coffee cups defy gravity, staplers sprout wings, and Monday meetings happen in impossible dimensions. Your 9-to-5 exists in a Dali painting.',
      rarity: 'Rare',
      rarityColor: '#FF6B6B', // Coral rare
      personality: 'Surreal • Playful • Mind-bending',
      year: 2025
    },

    categories: [
      { key: 'surreal-office-life', weight: 0.32 },
      { key: 'art-design', weight: 0.28 },
      { key: 'characters-animated', weight: 0.22 },
      { key: 'fantasy-play', weight: 0.18 }
    ],

    keywords: [
      { text: 'surreal', weight: 0.34 },
      { text: 'absurd', weight: 0.30 },
      { text: 'melting', weight: 0.28 },
      { text: 'impossible', weight: 0.26 },
      { text: 'bewildering', weight: 0.24 },
      { text: 'whimsical', weight: 0.22 },
      { text: 'reality-bending', weight: 0.20 },
      { text: 'dreamlike', weight: 0.18 },
      { text: 'paradoxical', weight: 0.16 },
      { text: 'glitchy', weight: 0.14 }
    ],

    avatarImageIndex: 13
  },

  clockworkGardener: {
    id: 'clockworkGardener',
    name: 'Ivy Cogsworth',

    identityCard: {
      title: 'The Clockwork Gardener',
      description: 'Brass petals bloom on mechanical stems. Your garden ticks with precision, where copper vines climb iron trellises and steam-powered butterflies pollinate gear-driven flowers.',
      rarity: 'Legendary',
      rarityColor: '#CD7F32', // Bronze legendary
      personality: 'Inventive • Organic • Precise',
      year: 2025
    },

    categories: [
      { key: 'steampunk-nature', weight: 0.32 },
      { key: 'home-decor', weight: 0.26 },
      { key: 'art-design', weight: 0.22 },
      { key: 'nature-travel', weight: 0.20 }
    ],

    keywords: [
      { text: 'mechanical', weight: 0.34 },
      { text: 'brass', weight: 0.30 },
      { text: 'clockwork', weight: 0.28 },
      { text: 'industrial', weight: 0.26 },
      { text: 'botanical', weight: 0.24 },
      { text: 'steam-powered', weight: 0.22 },
      { text: 'inventive', weight: 0.20 },
      { text: 'Victorian', weight: 0.18 },
      { text: 'copper', weight: 0.16 },
      { text: 'precision', weight: 0.14 }
    ],

    avatarImageIndex: 6
  },

  neonKnight: {
    id: 'neonKnight',
    name: 'Sir Voltage',

    identityCard: {
      title: 'The Neon Knight',
      description: 'Your armor pulses with electric light. Medieval valor meets cyberpunk voltage, where laser swords clash in holographic tournaments and dragons breathe plasma fire.',
      rarity: 'Mythic',
      rarityColor: '#00FF00', // Electric green mythic
      personality: 'Valiant • Electric • Futuristic',
      year: 2025
    },

    categories: [
      { key: 'neon-medieval', weight: 0.34 },
      { key: 'characters-animated', weight: 0.26 },
      { key: 'futuristic-tech', weight: 0.22 },
      { key: 'fantasy-play', weight: 0.18 }
    ],

    keywords: [
      { text: 'electric', weight: 0.34 },
      { text: 'neon', weight: 0.30 },
      { text: 'knightly', weight: 0.28 },
      { text: 'glowing', weight: 0.26 },
      { text: 'valiant', weight: 0.24 },
      { text: 'futuristic', weight: 0.22 },
      { text: 'medieval', weight: 0.20 },
      { text: 'voltage', weight: 0.18 },
      { text: 'holographic', weight: 0.16 },
      { text: 'heroic', weight: 0.14 }
    ],

    avatarImageIndex: 10
  },

  cosmicChef: {
    id: 'cosmicChef',
    name: 'Nebula Saffron',

    identityCard: {
      title: 'The Cosmic Chef',
      description: 'You cook with stardust and plate with constellation precision. Every dish is a galaxy, every flavor a supernova. Your kitchen orbits somewhere between taste and the infinite.',
      rarity: 'Legendary',
      rarityColor: '#9370DB', // Purple legendary
      personality: 'Celestial • Creative • Transcendent',
      year: 2025
    },

    categories: [
      { key: 'cosmic-cuisine', weight: 0.32 },
      { key: 'food-lifestyle', weight: 0.28 },
      { key: 'fantasy-play', weight: 0.22 },
      { key: 'art-design', weight: 0.18 }
    ],

    keywords: [
      { text: 'celestial', weight: 0.34 },
      { text: 'galactic', weight: 0.30 },
      { text: 'stellar', weight: 0.28 },
      { text: 'nebula', weight: 0.26 },
      { text: 'cosmic', weight: 0.24 },
      { text: 'transcendent', weight: 0.22 },
      { text: 'orbiting', weight: 0.20 },
      { text: 'infinite', weight: 0.18 },
      { text: 'mystical', weight: 0.16 },
      { text: 'supernova', weight: 0.14 }
    ],

    avatarImageIndex: 14
  },

  playfulMage: {
    id: 'playfulMage',
    name: 'Pixel Starblossom',

    identityCard: {
      title: 'The Playful Mage',
      description: 'Magic sparkles through animated realms. Your spells are colorful and joyful, where cartoon companions cast enchantments and every adventure ends in laughter and friendship.',
      rarity: 'Rare',
      rarityColor: '#FFB6C1', // Pink rare
      personality: 'Joyful • Magical • Animated',
      year: 2025
    },

    categories: [
      { key: 'characters-animated', weight: 0.32 },
      { key: 'fantasy-play', weight: 0.30 },
      { key: 'cosmic-cuisine', weight: 0.20 },
      { key: 'microscopic-kingdoms', weight: 0.18 }
    ],

    keywords: [
      { text: 'playful', weight: 0.34 },
      { text: 'magical', weight: 0.30 },
      { text: 'animated', weight: 0.28 },
      { text: 'colorful', weight: 0.26 },
      { text: 'whimsical', weight: 0.24 },
      { text: 'joyful', weight: 0.22 },
      { text: 'enchanted', weight: 0.20 },
      { text: 'imaginative', weight: 0.18 },
      { text: 'sparkly', weight: 0.16 },
      { text: 'friendly', weight: 0.14 }
    ],

    avatarImageIndex: 4
  },

  minimalistCurator: {
    id: 'minimalistCurator',
    name: 'Zen Ashford',

    identityCard: {
      title: 'The Minimalist Curator',
      description: 'Every object has intention, every space breathes purpose. You curate life with geometric precision, where clean lines meet warm textures and less becomes infinitely more.',
      rarity: 'Epic',
      rarityColor: '#D3D3D3', // Silver epic
      personality: 'Intentional • Serene • Sophisticated',
      year: 2025
    },

    categories: [
      { key: 'art-design', weight: 0.32 },
      { key: 'home-decor', weight: 0.30 },
      { key: 'fashion-style', weight: 0.20 },
      { key: 'food-lifestyle', weight: 0.18 }
    ],

    keywords: [
      { text: 'minimal', weight: 0.34 },
      { text: 'intentional', weight: 0.30 },
      { text: 'serene', weight: 0.28 },
      { text: 'geometric', weight: 0.26 },
      { text: 'clean', weight: 0.24 },
      { text: 'sophisticated', weight: 0.22 },
      { text: 'modern', weight: 0.20 },
      { text: 'curated', weight: 0.18 },
      { text: 'peaceful', weight: 0.16 },
      { text: 'elegant', weight: 0.14 }
    ],

    avatarImageIndex: 2
  },

  urbanNomad: {
    id: 'urbanNomad',
    name: 'Journey Slate',

    identityCard: {
      title: 'The Urban Nomad',
      description: 'Concrete jungles and mountain peaks are all your home. You wear style like a second skin and wander with purpose, collecting moments between cityscapes and wilderness.',
      rarity: 'Rare',
      rarityColor: '#228B22', // Forest green rare
      personality: 'Wandering • Stylish • Free',
      year: 2025
    },

    categories: [
      { key: 'nature-travel', weight: 0.32 },
      { key: 'fashion-style', weight: 0.30 },
      { key: 'art-design', weight: 0.20 },
      { key: 'home-decor', weight: 0.18 }
    ],

    keywords: [
      { text: 'wanderlust', weight: 0.34 },
      { text: 'adventurous', weight: 0.30 },
      { text: 'stylish', weight: 0.28 },
      { text: 'natural', weight: 0.26 },
      { text: 'urban', weight: 0.24 },
      { text: 'free-spirited', weight: 0.22 },
      { text: 'scenic', weight: 0.20 },
      { text: 'nomadic', weight: 0.18 },
      { text: 'chic', weight: 0.16 },
      { text: 'explorative', weight: 0.14 }
    ],

    avatarImageIndex: 16
  },

  techGourmand: {
    id: 'techGourmand',
    name: 'Byte Umami',

    identityCard: {
      title: 'The Tech Gourmand',
      description: 'Your palate is coded in algorithms. You 3D-print soufflés and cook sous-vide with quantum precision. Innovation meets indulgence where molecular gastronomy becomes digital art.',
      rarity: 'Epic',
      rarityColor: '#7B68EE', // Medium slate blue epic
      personality: 'Innovative • Culinary • Tech-savvy',
      year: 2025
    },

    categories: [
      { key: 'futuristic-tech', weight: 0.32 },
      { key: 'food-lifestyle', weight: 0.30 },
      { key: 'art-design', weight: 0.20 },
      { key: 'cosmic-cuisine', weight: 0.18 }
    ],

    keywords: [
      { text: 'innovative', weight: 0.34 },
      { text: 'futuristic', weight: 0.30 },
      { text: 'culinary', weight: 0.28 },
      { text: 'tech', weight: 0.26 },
      { text: 'molecular', weight: 0.24 },
      { text: 'sleek', weight: 0.22 },
      { text: 'precision', weight: 0.20 },
      { text: 'digital', weight: 0.18 },
      { text: 'gourmet', weight: 0.16 },
      { text: 'experimental', weight: 0.14 }
    ],

    avatarImageIndex: 18
  }
};

// Get a random profile (completely random each time)
export const getNextProfile = () => {
  const profileKeys = Object.keys(profiles);
  const randomIndex = Math.floor(Math.random() * profileKeys.length);

  localStorage.setItem('currentProfileIndex', randomIndex.toString());

  return profiles[profileKeys[randomIndex]];
};

// Get current profile without generating a new random one
export const getCurrentProfile = () => {
  const profileKeys = Object.keys(profiles);
  const currentIndex = parseInt(localStorage.getItem('currentProfileIndex') || '0', 10);
  return profiles[profileKeys[currentIndex]];
};

// Get a completely random profile (alias for clarity)
export const getRandomProfile = () => {
  return getNextProfile();
};

// Reset to first profile (for initialization)
export const resetProfileCycle = () => {
  localStorage.setItem('currentProfileIndex', '0');
};

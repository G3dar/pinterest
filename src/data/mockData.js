// Mock data generator for Pinterest Wrapped experience

const categories = {
  'art-design': {
    name: 'Art & Design',
    colors: ['#E8D5C4', '#C4A57B', '#8B7355'],
    keywords: ['minimalist', 'geometric', 'abstract', 'modern'],
    weight: 0.25
  },
  'characters-animated': {
    name: 'Animated Characters',
    colors: ['#FFB6C1', '#87CEEB', '#98D8C8'],
    keywords: ['playful', 'whimsical', 'colorful', 'imaginative'],
    weight: 0.20
  },
  'fantasy-play': {
    name: 'Fantasy & Play',
    colors: ['#D8BFD8', '#DDA0DD', '#BA55D3'],
    keywords: ['magical', 'dreamy', 'ethereal', 'mystical'],
    weight: 0.18
  },
  'fashion-style': {
    name: 'Fashion & Style',
    colors: ['#2C3E50', '#E8D5C4', '#BFA696'],
    keywords: ['elegant', 'chic', 'sophisticated', 'trendy'],
    weight: 0.15
  },
  'food-lifestyle': {
    name: 'Food & Lifestyle',
    colors: ['#F4A460', '#DEB887', '#D2691E'],
    keywords: ['cozy', 'warm', 'inviting', 'organic'],
    weight: 0.12
  },
  'interior-design': {
    name: 'Interior Design',
    colors: ['#F5F5DC', '#D3D3D3', '#A9A9A9'],
    keywords: ['serene', 'minimal', 'cozy', 'intentional'],
    weight: 0.10
  }
};

// Generate image paths for each category
const generateImagePaths = () => {
  const images = [];

  Object.keys(categories).forEach(categoryKey => {
    const categoryImages = [];
    // Each category has 24 images
    for (let i = 1; i <= 24; i++) {
      const paddedNum = i.toString().padStart(2, '0');
      categoryImages.push({
        url: `/imgs/${categoryKey}/${categoryKey}-${paddedNum}.jpg`,
        category: categoryKey,
        categoryName: categories[categoryKey].name,
        colors: categories[categoryKey].colors
      });
    }
    images.push(...categoryImages);
  });

  return images;
};

// Generate user wrapped data
export const generateWrappedData = () => {
  const allImages = generateImagePaths();

  // Extract dominant colors with weights
  const colorPalette = [
    { hex: '#E8D5C4', weight: 0.22, name: 'Warm Beige' },
    { hex: '#8B7355', weight: 0.18, name: 'Earthy Brown' },
    { hex: '#FFB6C1', weight: 0.15, name: 'Soft Pink' },
    { hex: '#87CEEB', weight: 0.12, name: 'Sky Blue' },
    { hex: '#D8BFD8', weight: 0.11, name: 'Lavender' },
    { hex: '#F4A460', weight: 0.09, name: 'Sandy Brown' },
    { hex: '#2C3E50', weight: 0.08, name: 'Midnight Blue' },
    { hex: '#98D8C8', weight: 0.05, name: 'Mint Green' }
  ];

  // Top keywords with weights
  const keywords = [
    { text: 'minimalist', weight: 0.30 },
    { text: 'geometric', weight: 0.25 },
    { text: 'dreamy', weight: 0.22 },
    { text: 'elegant', weight: 0.20 },
    { text: 'colorful', weight: 0.18 },
    { text: 'whimsical', weight: 0.16 },
    { text: 'cozy', weight: 0.15 },
    { text: 'modern', weight: 0.14 },
    { text: 'ethereal', weight: 0.12 },
    { text: 'organic', weight: 0.10 },
    { text: 'serene', weight: 0.09 },
    { text: 'sophisticated', weight: 0.08 }
  ];

  // Top categories
  const topCategories = Object.entries(categories)
    .sort((a, b) => b[1].weight - a[1].weight)
    .slice(0, 5)
    .map(([key, data]) => ({
      id: key,
      name: data.name,
      percentage: Math.round(data.weight * 100),
      weight: data.weight,
      colors: data.colors,
      images: allImages.filter(img => img.category === key).slice(0, 4)
    }));

  // Identity card data
  const identityCard = {
    title: 'The Minimalist Curator',
    description: 'Your aesthetic blends minimalist spaces with organic textures, creating a serene and intentional visual world.',
    rarity: 'Epic',
    rarityColor: '#A855F7',
    topCategories: topCategories.slice(0, 3).map(c => c.name),
    colorPalette: colorPalette.slice(0, 5),
    avatar: allImages[0].url,
    year: 2025
  };

  return {
    allImages,
    colorPalette,
    keywords,
    topCategories,
    identityCard,
    year: 2025
  };
};

export default generateWrappedData;

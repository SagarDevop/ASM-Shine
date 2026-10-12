// Standalone mock/static database for Vercel deployment (No backend hosting required)
const STORAGE_CART_KEY = 'asm_shine_cart_v1';

export const STATIC_CATEGORIES = [
  { id: 'floor_care', name: 'Floor Care', icon: 'Mop' },
  { id: 'bathroom', name: 'Bathroom', icon: 'Bath' },
  { id: 'kitchen', name: 'Kitchen', icon: 'UtensilsCrossed' },
  { id: 'glass_care', name: 'Glass Care', icon: 'Grid' },
  { id: 'dishwash', name: 'Dishwash', icon: 'HandPlatter' },
  { id: 'laundry', name: 'Laundry', icon: 'Shirt' }
];

export const STATIC_BANNERS = {
  announcement: {
    text: 'Mega Home Cleaning Sale: Flat 30% OFF on Top Essentials',
    code: 'CLEAN30',
    discount: '30% OFF'
  },
  hero: {
    badge: 'ECO FORMULATION',
    title: 'Citrus & Neem Active Range',
    subtitle: '99.9% germ eradication without harsh toxic fumes',
    ctaText: 'EXPLORE >',
    image: '/images/banners/hero_banner_photo.png'
  }
};

export const STATIC_PRODUCTS = [
  // 1. Best Sellers Section
  {
    id: 'prod_1',
    name: 'ASM Shine Surface & Floor Cleaner Liquid (Citrus Fragrance)',
    shortName: 'ASM Shine Surface & Floor Cleaner Liquid (Citrus...',
    category: 'floor_care',
    section: 'best_sellers',
    size: '1 L',
    price: 199,
    originalPrice: 249,
    discountPercent: 20,
    rating: 4.4,
    reviewCount: '1.2k',
    image: '/images/products/product_floor_cleaner.png',
    badge: 'HOT',
    inStock: true,
    description: 'Advanced active citrus formula that cuts through grease, grime, and tough household stains while leaving a revitalizing orange zest fragrance.'
  },
  {
    id: 'prod_2',
    name: 'ASM Shine Power Bathroom Cleaner & Descaler Spray',
    shortName: 'ASM Shine Power Bathroom Cleaner &...',
    category: 'bathroom',
    section: 'best_sellers',
    size: '500 ml',
    price: 129,
    originalPrice: 160,
    discountPercent: 19,
    rating: 4.5,
    reviewCount: '850',
    image: '/images/products/product_bathroom_cleaner.png',
    badge: 'HOT',
    inStock: true,
    description: 'Deep penetrating foaming spray engineered to dissolve hard water limescale, soap scum, and mold without harsh fumes.'
  },

  // 2. Everyday Cleaning Essentials Section
  {
    id: 'prod_3',
    name: 'ASM Shine Streak-Free Glass Cleaner Spray (Ocean Breeze)',
    shortName: 'ASM Shine Streak-Free Glass Cleaner Spray...',
    category: 'glass_care',
    section: 'everyday_essentials',
    size: '500 ml',
    price: 149,
    originalPrice: 180,
    discountPercent: 17,
    rating: 4.6,
    reviewCount: '620',
    image: '/images/products/product_glass_cleaner.png',
    badge: null,
    inStock: true,
    description: 'Instant streak-free clarity for mirrors, windows, and display screens with anti-dust electrostatic repellent technology.'
  },
  {
    id: 'prod_4',
    name: 'ASM Shine Concentrated Dishwash Gel (Lemon Active Burst)',
    shortName: 'ASM Shine Concentrated Dishwash Gel (Lemon...',
    category: 'dishwash',
    section: 'everyday_essentials',
    size: '750 ml',
    price: 99,
    originalPrice: 130,
    discountPercent: 23,
    rating: 4.7,
    reviewCount: '1.4k',
    image: '/images/products/product_dishwash_gel.png',
    badge: null,
    inStock: true,
    description: 'Tough on stubborn oil and burnt residue, gentle on skin. Formulated with natural lemon enzymes.'
  },

  // 3. Recommended for You Section
  {
    id: 'prod_5',
    name: 'ASM Shine Multi-Surface Disinfectant Spray',
    shortName: 'ASM Shine Multi-Surface Disinfectant Spray',
    category: 'kitchen',
    section: 'recommended',
    size: '500 ml',
    price: 179,
    originalPrice: 220,
    discountPercent: 18,
    rating: 4.8,
    reviewCount: '940',
    image: '/images/products/product_disinfectant.png',
    badge: 'ECO',
    inStock: true,
    description: 'Hospital-grade bactericidal and virucidal disinfectant spray safe for dining tables, door handles, and kitchen countertops.'
  },
  {
    id: 'prod_6',
    name: 'ASM Shine Ultra Fabric Laundry Liquid',
    shortName: 'ASM Shine Ultra Fabric Laundry Liquid',
    category: 'laundry',
    section: 'recommended',
    size: '1 L',
    price: 289,
    originalPrice: 350,
    discountPercent: 17,
    rating: 4.6,
    reviewCount: '510',
    image: '/images/products/product_laundry_liquid.png',
    badge: null,
    inStock: true,
    description: 'Gentle on fine threads, brutal on collar stains. Optical brighteners and plant-based softeners maintain garment freshness.'
  }
];

function getStoredCart() {
  try {
    const raw = localStorage.getItem(STORAGE_CART_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.warn('[Cart] LocalStorage read error:', e);
  }
  return [
    { productId: 'prod_1', quantity: 1 },
    { productId: 'prod_3', quantity: 1 }
  ];
}

function saveStoredCart(cart) {
  try {
    localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cart));
  } catch (e) {
    console.warn('[Cart] LocalStorage write error:', e);
  }
}

export const api = {
  // Fetch products optionally filtered by section, category or search query
  getProducts: async ({ section, category, search } = {}) => {
    let list = [...STATIC_PRODUCTS];
    if (section) list = list.filter((p) => p.section === section);
    if (category) list = list.filter((p) => p.category === category);
    if (search) list = list.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
    return list;
  },

  // Fetch categories
  getCategories: async () => {
    return STATIC_CATEGORIES;
  },

  // Fetch banners & offer strip data
  getBanners: async () => {
    return STATIC_BANNERS;
  },

  // Get current Cart (Persistent via localStorage)
  getCart: async () => {
    const items = getStoredCart();
    const count = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
    return {
      totalCount: count,
      data: items
    };
  },

  // Add item to cart (Persistent via localStorage)
  addToCart: async (productId, quantity = 1) => {
    const cart = getStoredCart();
    const existing = cart.find((item) => item.productId === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ productId, quantity });
    }
    saveStoredCart(cart);
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    return {
      success: true,
      totalCount: count,
      data: cart
    };
  }
};

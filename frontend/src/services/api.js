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
    brand: 'ASM SHINE',
    category: 'floor_care',
    section: 'best_sellers',
    size: '1 L',
    price: 199,
    originalPrice: 249,
    discountPercent: 20,
    rating: 4.4,
    reviewCount: '1,248',
    ratingsCount: '3,850',
    image: '/images/products/product_floor_cleaner.png',
    badge: 'HOT',
    inStock: true,
    assured: true,
    companionId: 'prod_2', // Paired with Power Bathroom Spray
    comboDiscount: 49,
    comboSavingsPercent: 15,
    description: 'Advanced active citrus formula that cuts through grease, grime, and tough household stains while leaving a revitalizing orange zest fragrance.',
    marketplaceLinks: {
      amazon: 'https://www.amazon.in/s?k=ASM+Shine+Surface+Floor+Cleaner+Liquid',
      flipkart: 'https://www.flipkart.com/search?q=ASM+Shine+Surface+Floor+Cleaner',
      meesho: 'https://www.meesho.com/search?q=ASM+Shine+Floor+Cleaner'
    },
    availableSizes: [
      { size: '500 ml', price: 119, originalPrice: 149, discount: '20% off' },
      { size: '1 L', price: 199, originalPrice: 249, discount: '20% off' },
      { size: '5 L Can', price: 799, originalPrice: 999, discount: '20% off' }
    ],
    highlights: [
      'Eliminates 99.9% pathogens, bacteria and household germs',
      'Infused with real botanical neem and organic orange zest extracts',
      'Non-toxic formulation: 100% safe for crawling toddlers & household pets',
      'Streak-free shine on marble, granite, mosaic, vitrified tiles and wood'
    ],
    specifications: {
      'Form': 'Concentrated Liquid',
      'Fragrance': 'Zesty Citrus & Fresh Neem',
      'Application Area': 'Living Room, Bedroom, Kitchen Floors & Tiles',
      'Pack of': '1',
      'Net Quantity': '1000 ml (1 L)',
      'Country of Origin': 'India',
      'Shelf Life': '24 Months'
    },
    reviews: [
      {
        id: 'rev_1',
        author: 'Priya Sharma',
        location: 'Banda, Uttar Pradesh',
        rating: 5,
        date: '2 days ago',
        title: 'Superb cleaning and very fresh smell!',
        comment: 'No chemical choking smell like usual phenyl. The floor stays shiny and smelling citrus-fresh for hours. 10/10 recommended!'
      },
      {
        id: 'rev_2',
        author: 'Amit Verma',
        location: 'Lucknow, Uttar Pradesh',
        rating: 4,
        date: '1 week ago',
        title: 'Value for money, great packaging',
        comment: 'Safe around my pet dog. Cleaned tough kitchen grease effortlessly.'
      }
    ]
  },
  {
    id: 'prod_2',
    name: 'ASM Shine Power Bathroom Cleaner & Descaler Spray',
    shortName: 'ASM Shine Power Bathroom Cleaner &...',
    brand: 'ASM SHINE',
    category: 'bathroom',
    section: 'best_sellers',
    size: '500 ml',
    price: 129,
    originalPrice: 160,
    discountPercent: 19,
    rating: 4.5,
    reviewCount: '850',
    ratingsCount: '2,420',
    image: '/images/products/product_bathroom_cleaner.png',
    badge: 'HOT',
    inStock: true,
    assured: true,
    companionId: 'prod_1', // Paired with Floor Cleaner
    comboDiscount: 49,
    comboSavingsPercent: 15,
    description: 'Deep penetrating foaming spray engineered to dissolve hard water limescale, soap scum, and mold without harsh fumes.',
    availableSizes: [
      { size: '500 ml', price: 129, originalPrice: 160, discount: '19% off' },
      { size: '1 L Refill', price: 219, originalPrice: 280, discount: '21% off' }
    ],
    highlights: [
      'Dissolves tough tap limescale and ceramic stains in under 3 minutes',
      'High-adhesion foaming spray nozzle prevents product runoff on vertical tiles',
      'Zero hydrochloric acid fumes — pleasant spearmint lavender freshness',
      'Safe for chrome fittings, porcelain sinks, commodes and glass shower cabins'
    ],
    specifications: {
      'Form': 'Active Foam Spray',
      'Fragrance': 'Spearmint & Eucalyptus',
      'Application Area': 'Bathroom Tiles, Taps, Commode & Shower Partitions',
      'Pack of': '1',
      'Net Quantity': '500 ml',
      'Country of Origin': 'India',
      'Shelf Life': '24 Months'
    },
    reviews: [
      {
        id: 'rev_3',
        author: 'Ritu Srivastava',
        location: 'Kanpur, Uttar Pradesh',
        rating: 5,
        date: '3 days ago',
        title: 'Limescale removed like magic!',
        comment: 'Our hard water stains on chrome taps vanished after spraying and leaving for 5 mins. Best bathroom cleaner I have used.'
      }
    ]
  },

  // 2. Everyday Cleaning Essentials Section
  {
    id: 'prod_3',
    name: 'ASM Shine Streak-Free Glass Cleaner Spray (Ocean Breeze)',
    shortName: 'ASM Shine Streak-Free Glass Cleaner Spray...',
    brand: 'ASM SHINE',
    category: 'glass_care',
    section: 'everyday_essentials',
    size: '500 ml',
    price: 149,
    originalPrice: 180,
    discountPercent: 17,
    rating: 4.6,
    reviewCount: '620',
    ratingsCount: '1,980',
    image: '/images/products/product_glass_cleaner.png',
    badge: null,
    inStock: true,
    assured: true,
    companionId: 'prod_5', // Paired with Disinfectant
    comboDiscount: 48,
    comboSavingsPercent: 15,
    description: 'Instant streak-free clarity for mirrors, windows, and display screens with anti-dust electrostatic repellent technology.',
    availableSizes: [
      { size: '500 ml', price: 149, originalPrice: 180, discount: '17% off' },
      { size: '1 L Refill', price: 249, originalPrice: 310, discount: '20% off' }
    ],
    highlights: [
      'Leaves 0 streaks or haze on mirrors, windows and glass tables',
      'Anti-dust electrostatic guard repels airborne dust particles',
      'Fast evaporating formula — wipe once with microfiber cloth',
      'Ammonia-free: safe for tinted glass and TV/Laptop outer screens'
    ],
    specifications: {
      'Form': 'Liquid Spray',
      'Fragrance': 'Refreshing Ocean Breeze',
      'Application Area': 'Mirrors, Glass windows, Car windshields, Glass tabletops',
      'Pack of': '1',
      'Net Quantity': '500 ml',
      'Country of Origin': 'India',
      'Shelf Life': '24 Months'
    },
    reviews: [
      {
        id: 'rev_4',
        author: 'Neha Gupta',
        location: 'Noida, Uttar Pradesh',
        rating: 5,
        date: '5 days ago',
        title: 'Crystal clear glass with zero haze!',
        comment: 'Mirror looks invisible after wiping! Smells very crisp and pleasant.'
      }
    ]
  },
  {
    id: 'prod_4',
    name: 'ASM Shine Concentrated Dishwash Gel (Lemon Active Burst)',
    shortName: 'ASM Shine Concentrated Dishwash Gel (Lemon...',
    brand: 'ASM SHINE',
    category: 'dishwash',
    section: 'everyday_essentials',
    size: '750 ml',
    price: 99,
    originalPrice: 130,
    discountPercent: 23,
    rating: 4.7,
    reviewCount: '1,420',
    ratingsCount: '4,100',
    image: '/images/products/product_dishwash_gel.png',
    badge: null,
    inStock: true,
    assured: true,
    companionId: 'prod_1', // Paired with Floor cleaner
    comboDiscount: 38,
    comboSavingsPercent: 13,
    description: 'Tough on stubborn oil and burnt residue, gentle on skin. Formulated with natural lemon enzymes and aloe moisture.',
    availableSizes: [
      { size: '250 ml', price: 49, originalPrice: 65, discount: '25% off' },
      { size: '750 ml', price: 99, originalPrice: 130, discount: '23% off' },
      { size: '2 L Super Saver', price: 229, originalPrice: 299, discount: '23% off' }
    ],
    highlights: [
      'Cuts thick oil and burnt curry grease with just 1 spoon in water',
      'Natural lemon enzymes remove stubborn odors (fish, garlic, egg)',
      'Infused with Aloe Vera to keep hands soft without dryness or peeling',
      'Leaves stainless steel, ceramic and glassware sparkling without white residue'
    ],
    specifications: {
      'Form': 'Concentrated Gel',
      'Fragrance': 'Fresh Citrus Lemon',
      'Application Area': 'All utensils, non-stick cookware, glassware, cutlery',
      'Pack of': '1',
      'Net Quantity': '750 ml',
      'Country of Origin': 'India',
      'Shelf Life': '24 Months'
    },
    reviews: [
      {
        id: 'rev_5',
        author: 'Suman Devi',
        location: 'Banda, Uttar Pradesh',
        rating: 5,
        date: '1 week ago',
        title: 'Very thick gel, lasts long',
        comment: 'Just one drop cleans 4 plates. Grease cleans easily and hands don’t get rough.'
      }
    ]
  },

  // 3. Recommended for You Section
  {
    id: 'prod_5',
    name: 'ASM Shine Multi-Surface Disinfectant Spray',
    shortName: 'ASM Shine Multi-Surface Disinfectant Spray',
    brand: 'ASM SHINE',
    category: 'kitchen',
    section: 'recommended',
    size: '500 ml',
    price: 179,
    originalPrice: 220,
    discountPercent: 18,
    rating: 4.8,
    reviewCount: '940',
    ratingsCount: '2,890',
    image: '/images/products/product_disinfectant.png',
    badge: 'ECO',
    inStock: true,
    assured: true,
    companionId: 'prod_4', // Paired with Dishwash Gel
    comboDiscount: 48,
    comboSavingsPercent: 17,
    description: 'Hospital-grade bactericidal and virucidal disinfectant spray safe for dining tables, door handles, and kitchen countertops.',
    availableSizes: [
      { size: '500 ml', price: 179, originalPrice: 220, discount: '18% off' },
      { size: '1 L Refill', price: 299, originalPrice: 380, discount: '21% off' }
    ],
    highlights: [
      'Certified 99.99% pathogen neutralizer for high-touch home surfaces',
      'Food-contact safe after wipe: perfect for dining tables & kitchen slabs',
      'Pleasant botanical tea tree & lavender aroma',
      'Effective on doorknobs, remotes, delivery packages, switches and chairs'
    ],
    specifications: {
      'Form': 'Fine Mist Spray',
      'Fragrance': 'Tea Tree & Lavender',
      'Application Area': 'Kitchen Counters, Dining Tables, Door Knobs, Gadgets',
      'Pack of': '1',
      'Net Quantity': '500 ml',
      'Country of Origin': 'India',
      'Shelf Life': '24 Months'
    },
    reviews: [
      {
        id: 'rev_6',
        author: 'Dr. Vivek Mishra',
        location: 'Prayagraj, Uttar Pradesh',
        rating: 5,
        date: '4 days ago',
        title: 'Authentic hospital-grade disinfection for home',
        comment: 'No burning smell. Spray on kitchen slabs and dining table daily. Safe and reliable.'
      }
    ]
  },
  {
    id: 'prod_6',
    name: 'ASM Shine Ultra Fabric Laundry Liquid',
    shortName: 'ASM Shine Ultra Fabric Laundry Liquid',
    brand: 'ASM SHINE',
    category: 'laundry',
    section: 'recommended',
    size: '1 L',
    price: 289,
    originalPrice: 350,
    discountPercent: 17,
    rating: 4.6,
    reviewCount: '510',
    ratingsCount: '1,650',
    image: '/images/products/product_laundry_liquid.png',
    badge: null,
    inStock: true,
    assured: true,
    companionId: 'prod_1', // Paired with Floor Cleaner
    comboDiscount: 58,
    comboSavingsPercent: 12,
    description: 'Gentle on fine threads, brutal on collar stains. Optical brighteners and plant-based softeners maintain garment freshness.',
    availableSizes: [
      { size: '1 L', price: 289, originalPrice: 350, discount: '17% off' },
      { size: '2 L Family Pack', price: 529, originalPrice: 650, discount: '19% off' }
    ],
    highlights: [
      'Tough stain lifting enzymes target tea, sweat and cuff grease',
      'Preserves color vibrancy and thread elasticity wash after wash',
      'Dissolves 100% in water: leaves zero white powdery residue on dark clothes',
      'Compatible with both Front Load and Top Load automatic washing machines'
    ],
    specifications: {
      'Form': 'Liquid Detergent',
      'Fragrance': 'French Lavender Bloom',
      'Application Area': 'Cotton, Synthetics, Delicates, Uniforms, Linens',
      'Pack of': '1',
      'Net Quantity': '1000 ml (1 L)',
      'Country of Origin': 'India',
      'Shelf Life': '24 Months'
    },
    reviews: [
      {
        id: 'rev_7',
        author: 'Anjali Saxena',
        location: 'Varanasi, Uttar Pradesh',
        rating: 5,
        date: '6 days ago',
        title: 'Clothes smell wonderful and colors stay bright',
        comment: 'Much better than powder detergents. Doesn’t leave any white spots on black clothes.'
      }
    ]
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

  // Get single product by ID
  getProductById: async (id) => {
    return STATIC_PRODUCTS.find((p) => p.id === id) || null;
  },

  // Get similar products (products in same or complementary category, excluding current product)
  getSimilarProducts: async (productId, category) => {
    return STATIC_PRODUCTS.filter((p) => p.id !== productId);
  },

  // Get combo details for Frequently Bought Together
  getComboDetails: async (productId) => {
    const mainProduct = STATIC_PRODUCTS.find((p) => p.id === productId);
    if (!mainProduct) return null;

    const companionProduct = STATIC_PRODUCTS.find((p) => p.id === mainProduct.companionId) ||
      STATIC_PRODUCTS.find((p) => p.id !== productId);

    if (!companionProduct) return null;

    const combinedOriginal = (mainProduct.originalPrice || mainProduct.price) + (companionProduct.originalPrice || companionProduct.price);
    const combinedStandardPrice = mainProduct.price + companionProduct.price;
    const discount = mainProduct.comboDiscount || 49;
    const comboPrice = Math.max(combinedStandardPrice - discount, 99);
    const totalSavings = combinedOriginal - comboPrice;

    return {
      mainProduct,
      companionProduct,
      combinedOriginal,
      combinedStandardPrice,
      comboPrice,
      totalSavings,
      discount
    };
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

  // Add single item to cart (Persistent via localStorage)
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
  },

  // Add multiple items (Combo) to cart
  addComboToCart: async (items = []) => {
    const cart = getStoredCart();
    items.forEach(({ productId, quantity = 1 }) => {
      const existing = cart.find((item) => item.productId === productId);
      if (existing) {
        existing.quantity += quantity;
      } else {
        cart.push({ productId, quantity });
      }
    });
    saveStoredCart(cart);
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    return {
      success: true,
      totalCount: count,
      data: cart
    };
  }
};

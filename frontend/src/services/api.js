const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export const api = {
  // Fetch products optionally filtered by section, category or search query
  getProducts: async ({ section, category, search } = {}) => {
    try {
      const params = new URLSearchParams();
      if (section) params.append('section', section);
      if (category) params.append('category', category);
      if (search) params.append('search', search);

      const res = await fetch(`${BASE_URL}/products?${params.toString()}`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      return data.data || [];
    } catch (err) {
      console.warn('[API] Failed to fetch products, using offline fallback data:', err);
      return getFallbackProducts({ section, category, search });
    }
  },

  // Fetch categories
  getCategories: async () => {
    try {
      const res = await fetch(`${BASE_URL}/categories`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      return data.data || [];
    } catch (err) {
      console.warn('[API] Failed to fetch categories, using offline fallback:', err);
      return [
        { id: 'floor_care', name: 'Floor Care', icon: 'Mop' },
        { id: 'bathroom', name: 'Bathroom', icon: 'Bath' },
        { id: 'kitchen', name: 'Kitchen', icon: 'UtensilsCrossed' },
        { id: 'glass_care', name: 'Glass Care', icon: 'Grid' },
        { id: 'dishwash', name: 'Dishwash', icon: 'HandPlatter' },
        { id: 'laundry', name: 'Laundry', icon: 'Shirt' }
      ];
    }
  },

  // Fetch banners & offer strip data
  getBanners: async () => {
    try {
      const res = await fetch(`${BASE_URL}/banners`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      return data.data;
    } catch (err) {
      console.warn('[API] Failed to fetch banners, using offline fallback:', err);
      return {
        announcement: {
          text: 'Mega Home Cleaning Sale: Flat 30% OFF on Top E...',
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
    }
  },

  // Get current Cart
  getCart: async () => {
    try {
      const res = await fetch(`${BASE_URL}/cart`);
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      return data;
    } catch (err) {
      return {
        totalCount: 2,
        data: [{ productId: 'prod_1', quantity: 1 }, { productId: 'prod_3', quantity: 1 }]
      };
    }
  },

  // Add item to cart
  addToCart: async (productId, quantity = 1) => {
    try {
      const res = await fetch(`${BASE_URL}/cart/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId, quantity })
      });
      return await res.json();
    } catch (err) {
      console.warn('[API] Add to cart fallback:', err);
      return { success: true };
    }
  }
};

// Fallback seed products matching Stitch screen exactly
function getFallbackProducts(filters = {}) {
  const all = [
    {
      id: 'prod_1',
      name: 'CLEANORA Surface & Floor Cleaner Liquid (Citrus Fragrance)',
      shortName: 'CLEANORA Surface & Floor Cleaner Liquid (Citrus...',
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
      inStock: true
    },
    {
      id: 'prod_2',
      name: 'CLEANORA Power Bathroom Cleaner & Descaler Spray',
      shortName: 'CLEANORA Power Bathroom Cleaner &...',
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
      inStock: true
    },
    {
      id: 'prod_3',
      name: 'CLEANORA Streak-Free Glass Cleaner Spray (Ocean Breeze)',
      shortName: 'CLEANORA Streak-Free Glass Cleaner Spray...',
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
      inStock: true
    },
    {
      id: 'prod_4',
      name: 'CLEANORA Concentrated Dishwash Gel (Lemon Active Burst)',
      shortName: 'CLEANORA Concentrated Dishwash Gel (Lemon...',
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
      inStock: true
    },
    {
      id: 'prod_5',
      name: 'CLEANORA Multi-Surface Disinfectant Spray',
      shortName: 'CLEANORA Multi-Surface Disinfectant Spray',
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
      inStock: true
    },
    {
      id: 'prod_6',
      name: 'CLEANORA Ultra Fabric Laundry Liquid',
      shortName: 'CLEANORA Ultra Fabric Laundry Liquid',
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
      inStock: true
    }
  ];

  return all.filter(p => {
    if (filters.section && p.section !== filters.section) return false;
    if (filters.category && p.category !== filters.category) return false;
    if (filters.search && !p.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });
}

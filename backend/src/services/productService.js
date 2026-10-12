const Product = require('../models/Product');
const { initialProducts } = require('../data/seedData');
const { getDbStatus } = require('../config/db');

// In-memory cache & fallback store
let memoryProducts = [...initialProducts];

const getAllProducts = async (filters = {}) => {
  const { connected } = getDbStatus();
  if (connected) {
    try {
      const count = await Product.countDocuments();
      if (count === 0) {
        await Product.insertMany(initialProducts);
        console.log('[Database] Auto-seeded initial Cleanora products to MongoDB');
      }
      const query = {};
      if (filters.section) query.section = filters.section;
      if (filters.category) query.category = filters.category;
      if (filters.search) {
        query.name = { $regex: filters.search, $options: 'i' };
      }
      return await Product.find(query);
    } catch (e) {
      console.warn('DB query failed, fallback to in-memory:', e.message);
    }
  }

  // In-memory filtering
  return memoryProducts.filter(p => {
    if (filters.section && p.section !== filters.section) return false;
    if (filters.category && p.category !== filters.category) return false;
    if (filters.search && !p.name.toLowerCase().includes(filters.search.toLowerCase())) return false;
    return true;
  });
};

const getProductById = async (id) => {
  const { connected } = getDbStatus();
  if (connected) {
    try {
      const found = await Product.findOne({ id });
      if (found) return found;
    } catch (e) {
      // fallback
    }
  }
  return memoryProducts.find(p => p.id === id) || null;
};

module.exports = { getAllProducts, getProductById };

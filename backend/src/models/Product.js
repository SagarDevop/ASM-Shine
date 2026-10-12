const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  shortName: { type: String },
  category: { type: String, required: true },
  section: { type: String, required: true }, // best_sellers | everyday_essentials | recommended
  size: { type: String, required: true }, // '1 L', '500 ml', '750 ml'
  price: { type: Number, required: true },
  originalPrice: { type: Number, required: true },
  discountPercent: { type: Number, required: true },
  rating: { type: Number, default: 4.5 },
  reviewCount: { type: String, default: '1k' },
  image: { type: String, required: true },
  badge: { type: String }, // 'HOT', 'ECO', etc.
  inStock: { type: Boolean, default: true },
  description: { type: String }
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);

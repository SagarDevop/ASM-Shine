let cartItems = [
  { productId: 'prod_1', quantity: 1 },
  { productId: 'prod_3', quantity: 1 }
];

const getCart = (req, res, next) => {
  try {
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    res.status(200).json({
      success: true,
      totalCount,
      data: cartItems
    });
  } catch (err) {
    next(err);
  }
};

const addToCart = (req, res, next) => {
  try {
    const { productId, quantity = 1 } = req.body;
    if (!productId) {
      return res.status(400).json({ success: false, message: 'productId is required' });
    }
    const existing = cartItems.find(item => item.productId === productId);
    if (existing) {
      existing.quantity += quantity;
    } else {
      cartItems.push({ productId, quantity });
    }
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    res.status(200).json({
      success: true,
      message: 'Product added to cart',
      totalCount,
      data: cartItems
    });
  } catch (err) {
    next(err);
  }
};

const removeFromCart = (req, res, next) => {
  try {
    const { productId } = req.params;
    cartItems = cartItems.filter(item => item.productId !== productId);
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    res.status(200).json({
      success: true,
      message: 'Product removed from cart',
      totalCount,
      data: cartItems
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getCart, addToCart, removeFromCart };

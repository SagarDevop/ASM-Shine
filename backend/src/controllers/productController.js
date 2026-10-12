const productService = require('../services/productService');

const getProducts = async (req, res, next) => {
  try {
    const { section, category, search } = req.query;
    const products = await productService.getAllProducts({ section, category, search });
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

const getProductById = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: `Product not found with id ${req.params.id}`
      });
    }
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, getProductById };

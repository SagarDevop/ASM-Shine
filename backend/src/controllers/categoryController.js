const { initialCategories } = require('../data/seedData');

const getCategories = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: initialCategories
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCategories };

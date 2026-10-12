const { initialBanners } = require('../data/seedData');

const getBanners = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data: initialBanners
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getBanners };

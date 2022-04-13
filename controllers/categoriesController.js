const CategoryService = require('../services/CategoriesService');

const createCategoryController = async (req, res, next) => {
    try {
        const category = await CategoryService.createCategory(req.body);

        return res.status(201).json(category);
    } catch (err) {
        next(err);
    }
};

module.exports = {
createCategoryController,
}; 
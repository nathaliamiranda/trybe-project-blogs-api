const CategoryService = require('../services/CategoriesService');

const getAllController = async (_req, res, next) => {
try {
    const categories = await CategoryService.getAll();
    return res.status(200).json(categories);
} catch (err) {
    next(err);
}
};

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
getAllController,
}; 
const { Category } = require('../models');

const getAll = async () => {
    const categories = await Category.findAll();
    return categories;
};

const createCategory = async (name) => {
 const created = await Category.create(name);

return created;
};

module.exports = {
    createCategory,
    getAll,
};
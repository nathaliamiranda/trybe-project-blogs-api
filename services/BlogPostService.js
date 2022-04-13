const { BlogPost, Category } = require('../models');

const createPost = async ({ title, content, categoryIds }, userId) => {
const result = categoryIds.map(async (id) => Category.findOne({ where: { id } }));
  
const existCategory = await Promise.all(result).then((cat) => cat.every((el) => el !== null));
  
if (!existCategory) return { message: '"categoryIds" not found' };
  
  const newPost = await BlogPost
  .create({ title, userId, content, published: new Date(), updated: new Date() });

  return newPost;
};

module.exports = {
    createPost,
};
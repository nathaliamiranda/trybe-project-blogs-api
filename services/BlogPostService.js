const { BlogPost, Category, User } = require('../models');

const getALlPosts = async () => {
    const posts = await BlogPost.findAll(
      { include: [
        { 
          model: User, 
          as: 'user',
          attribute: { exclude: ['password'] },
        },
        { 
          model: Category, 
          as: 'categories',
          through: { attributes: [] },
        },
      ],
       },
);
    return posts;
};

const getPostsById = async (id) => {
  const posts = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User,
        as: 'user',
        attributes: { exclude: ['password'] },
      },
      {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
    ],
  });
if (!posts) return { message: 'Post does not exist' };
  return posts;
};

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
    getALlPosts,
    getPostsById,
};
const { Op } = require('sequelize');

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
if (!posts) return { notExist: 'Post does not exist' };
  return posts;
};

const createPost = async ({ title, content, categoryIds }, userId) => {
const result = categoryIds.map(async (id) => Category.findOne({ where: { id } }));
  
const existCategory = await Promise.all(result).then((cat) => cat.every((el) => el !== null));
  
if (!existCategory) return { catNotFound: '"categoryIds" not found' };
  
  const newPost = await BlogPost
  .create({ title, userId, content, published: new Date(), updated: new Date() });

  return newPost;
};

const updatePost = async ({ title, content }, userId, id) => {
  const post = await BlogPost.findOne({ where: { id } });
  console.log('post:', post);

  if (!post || userId !== post.dataValues.userId) return { unauthorided: 'Unauthorized user' };
  
  await BlogPost.update({ title, content }, { where: { id } });

  const postUpdated = await getPostsById(id); 
  return postUpdated;
};

const excludePost = async (userId, id) => {
  const blogPost = await BlogPost.findOne({ where: { id } });
  
  if (!blogPost) return { notExist: 'Post does not exist' };

  if (userId !== blogPost.dataValues.userId) return { unauthorided: 'Unauthorized user' };

  const exclude = await BlogPost.destroy({ where: { id } });
  return exclude;
};

const searchTerm = async (query) => {
  const postAll = await BlogPost.findAll({ include: [
{ model: User, as: 'user' },
{ model: Category, as: 'categories', through: { attributes: [] } }] });

  if (query.length === 0) return postAll;

  const search = await BlogPost.findAll({
      where: { [Op.or]: [
        { title: { [Op.like]: `%${query}%` } },
        { content: { [Op.like]: `%${query}%` } },
      ] },
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] },
      },
      ],
    });
  return search;
};

module.exports = {
    createPost,
    getALlPosts,
    getPostsById,
    updatePost,
    excludePost,
    searchTerm,
};
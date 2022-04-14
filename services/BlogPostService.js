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

const updatePost = async ({ title, content }, userId, id) => {
  const post = await BlogPost.findOne({ where: { id } });
  console.log('post:', post);

  if (!post || userId !== post.dataValues.userId) return { message: 'Unauthorized user' };
  
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

module.exports = {
    createPost,
    getALlPosts,
    getPostsById,
    updatePost,
    excludePost,
};
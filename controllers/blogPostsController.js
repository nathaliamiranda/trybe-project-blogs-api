const BlogPostService = require('../services/BlogPostService');

const getAllController = async (_req, res, next) => {
    try {
        const getAllBlogPosts = await BlogPostService.getALlPosts();

        return res.status(200).json(getAllBlogPosts);
    } catch (err) {
        next(err);
    }
};

const getPostByIdController = async (req, res, next) => {
    try {
        const { id } = req.params;
        
        const postById = await BlogPostService.getPostsById(id);

        if (postById.notExist) return res.status(404).json({ message: postById.notExist });

        return res.status(200).json(postById);
    } catch (err) {
        next(err);
    }
};

const createPostController = async (req, res, next) => {
    try {
        const post = await BlogPostService.createPost(req.body, req.user.id);

        if (post.catNotFound) return res.status(400).json({ message: post.catNotFound });

        return res.status(201).json(post);
      } catch (err) {
        next(err);
      }
};

const updatePostController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const { categoryIds } = req.body;

        if (categoryIds) return res.status(400).json({ message: 'Categories cannot be edited' });

       const post = await BlogPostService.updatePost(req.body, req.user.id, id);

      if (post.unauthorided) return res.status(401).json({ message: post.unauthorided });

      return res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

const excludePostController = async (req, res, next) => {
    try {
        const { id } = req.params;

        const excludePost = await BlogPostService.excludePost(req.user.id, id);

        if (excludePost.notExist) return res.status(404).json({ message: excludePost.notExist });
        if (excludePost.unauthorided) { 
            return res.status(401).json({ message: excludePost.unauthorided }); 
        }

        return res.status(204).end();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    createPostController,
    getAllController,
    getPostByIdController,
    updatePostController,
    excludePostController,
};
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

        if (postById.message) return res.status(404).json({ message: postById.message });

        return res.status(200).json(postById);
    } catch (err) {
        next(err);
    }
};

const createPostController = async (req, res, next) => {
    try {
        const post = await BlogPostService.createPost(req.body, req.user.id);

        if (post.message) return res.status(400).json({ message: post.message });

        return res.status(201).json(post);
      } catch (err) {
        next(err);
      }
};

module.exports = {
    createPostController,
    getAllController,
    getPostByIdController,

};
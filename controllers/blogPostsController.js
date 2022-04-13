const BlogPostService = require('../services/BlogPostService');

const createPostController = async (req, res, next) => {
    try {
        const post = await BlogPostService.createPost(req.body, req.user.id);
        console.log(req.user.id);

        if (post.message) return res.status(400).json({ message: post.message });

        return res.status(201).json(post);
      } catch (err) {
        next(err);
      }
};

module.exports = {
    createPostController,
};
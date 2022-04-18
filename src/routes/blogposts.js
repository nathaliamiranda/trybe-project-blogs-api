const express = require('express');

const router = express.Router();

const BlogPostController = require('../controllers/blogPostsController');

const isValidPost = require('../middlewares/blogpostMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

const updatePost = require('../middlewares/blogPostUpdate');

router.post('/', isValidPost, authMiddleware, BlogPostController.createPost);
router.put('/:id', updatePost, authMiddleware, BlogPostController.updatePost);
router.get('/search', authMiddleware, BlogPostController.searchPost);
router.get('/:id', authMiddleware, BlogPostController.getPostById);
router.delete('/:id', authMiddleware, BlogPostController.deletePost);
router.get('/', authMiddleware, BlogPostController.getAllPosts);

module.exports = router;

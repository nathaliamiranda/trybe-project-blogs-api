const express = require('express');

const router = express.Router();

const BlogPostController = require('../controllers/blogPostsController');

const isValidPost = require('../middlewares/blogpostMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', isValidPost, authMiddleware, BlogPostController.createPostController);
router.get('/:id', authMiddleware, BlogPostController.getPostByIdController);
router.get('/', authMiddleware, BlogPostController.getAllController);

module.exports = router;

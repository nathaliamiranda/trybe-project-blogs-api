const express = require('express');

const router = express.Router();

const BlogPostController = require('../controllers/blogPostsController');

const isValidPost = require('../middlewares/blogpostMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', isValidPost, authMiddleware, BlogPostController.createPostController);

module.exports = router;

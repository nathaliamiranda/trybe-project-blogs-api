const express = require('express');

const router = express.Router();

const BlogPostController = require('../controllers/blogPostsController');

const isValidPost = require('../middlewares/blogpostMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

const updatePost = require('../middlewares/blogPostUpdate');

router.post('/', isValidPost, authMiddleware, BlogPostController.createPostController);
router.put('/:id', updatePost, authMiddleware, BlogPostController.updatePostController);
router.get('/search', authMiddleware, BlogPostController.searchController);
router.get('/:id', authMiddleware, BlogPostController.getPostByIdController);
router.delete('/:id', authMiddleware, BlogPostController.excludePostController);
router.get('/', authMiddleware, BlogPostController.getAllController);

module.exports = router;

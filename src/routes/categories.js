const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');

const isValidNameCategory = require('../middlewares/categoryMiddleware');

const categoryController = require('../controllers/categoriesController');

const router = express.Router();

router.post('/', isValidNameCategory, authMiddleware, categoryController.createCategory);
router.get('/', authMiddleware, categoryController.getAllCategories);

module.exports = router;
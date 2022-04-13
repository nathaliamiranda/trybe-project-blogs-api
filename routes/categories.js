const express = require('express');

const authMiddleware = require('../middlewares/authMiddleware');

const isValidNameCategory = require('../middlewares/categoryMiddleware');

const categoryController = require('../controllers/categoriesController');

const router = express.Router();

router.post('/', isValidNameCategory, authMiddleware, categoryController.createCategoryController);
router.get('/', authMiddleware, categoryController.getAllController);

module.exports = router;
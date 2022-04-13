const express = require('express');

const router = express.Router();

const UserController = require('../controllers/userController');

const isValidUser = require('../middlewares/userMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', isValidUser, UserController.createController);
router.get('/', authMiddleware, UserController.getAllController);
router.get('/:id', authMiddleware, UserController.getByIdController);

module.exports = router;

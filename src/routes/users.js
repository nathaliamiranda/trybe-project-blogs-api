const express = require('express');

const router = express.Router();

const UserController = require('../controllers/userController');

const isValidUser = require('../middlewares/userMiddleware');

const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', authMiddleware, UserController.getAllUsers);
router.get('/:id', authMiddleware, UserController.getByUserId);
router.post('/', isValidUser, UserController.createUser);
router.delete('/me', authMiddleware, UserController.deleteUser);

module.exports = router;

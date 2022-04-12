const express = require('express');

const router = express.Router();

const UserController = require('../controllers/userController');
const isValidUser = require('../middlewares/userMiddleware');

router.post('/', isValidUser, UserController.createController);

module.exports = router;

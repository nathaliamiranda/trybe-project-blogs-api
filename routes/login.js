const express = require('express');

const router = express.Router();

const isValidLogin = require('../middlewares/loginMiddleware');

const LoginController = require('../controllers/loginController');

router.post('/', isValidLogin, LoginController.createLogin);

module.exports = router;

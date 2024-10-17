// Dependencies
const router = require('express').Router();

// Internal Requires
const authController = require('../controller/auth.controller');
const {validateLogin} = require('../middleware/validation.middleware');

router.post('/login', validateLogin, authController.userLogin);

module.exports = router;
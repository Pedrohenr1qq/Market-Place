const router = require('express').Router();
const authController = require('../controller/auth.controller');

router.post('/login', authController.userLogin);

module.exports = router;
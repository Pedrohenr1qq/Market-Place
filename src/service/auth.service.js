const User = require('../model/user.model');
const jwt = require('jsonwebtoken');

const loginService = (email) => User.findOne({email: email});

const generateToken = (userId) => jwt.sign({id: userId}, "670c70db4dd1b9e788d04945", {expiresIn: 86400});

module.exports = {
  loginService,
  generateToken
}
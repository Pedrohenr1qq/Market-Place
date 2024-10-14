const User = require('../model/user.model');
const jwt = require('jsonwebtoken');

const loginService = (email) => User.findOne({email: email});

const generateToken = (userId) => jwt.sign({id: userId}, process.env.SECRET_KEY, {expiresIn: 86400});

module.exports = {
  loginService,
  generateToken
}
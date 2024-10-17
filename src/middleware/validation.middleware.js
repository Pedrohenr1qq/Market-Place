// Dependencies
const ObjectId = require('mongoose').Types.ObjectId;

function showErrors(errors){
  if(errors.length > 1) return `The fields '${errors}' are empties`;
  else return `The field '${errors}' is empty`
}

const validateUser = (req, res, next) => {
  let errors = []
  const user = req.body;

  if(!user.name) errors.push('name');
  if(!user.email) errors.push('email');
  if(!user.password) errors.push('password');
  if(!user.image) errors.push('image');

  if(errors.length != 0){
    return res.status(400).send({message: showErrors(errors)});
  }

  return next();
}

const validateProduct = async (req, res, next) => {
  let errors = []
  const product = req.body;

  if(!product.name) errors.push("name");
  if(!product.description) errors.push("description");
  if(!product.unitPrice) errors.push("unitPrice");
  if(!product.image) errors.push("image");
  if(!product.barCode) errors.push("barCode");
  if(!product.categories) errors.push("categories");

  if(errors.length != 0){
    return res.status(400).send({message: showErrors(errors)});
  }

  return next();
}

const validateCategory = async (req, res, next) => {
  if(!req.body.name) return res.status(400).send({message: "name field is empty"});

  return next();
}

const validateOrder = async (req, res, next) => {
  let errors = []
  const order = req.body;

  if(!order.totalPrice) errors.push("totalPrice");
  if(!order.freight) errors.push("freight");
  if(order.completed == undefined) errors.push("completed");

  if(errors.length != 0){
    return res.status(400).send({message: showErrors(errors)});
  }

  return next();
}

const validateShoppCart = async (req, res, next) => {
  let errors = []
  const shoppCart = req.body;

  if(!shoppCart.totalPrice) errors.push("totalPrice");
  if(!shoppCart.freight) errors.push("freight");

  if(errors.length != 0){
    return res.status(400).send({message: showErrors(errors)});
  }

  return next();
}

const validateId = async (req, res, next) => {
  if(ObjectId.isValid(req.params.id)) return next();
  else return res.status(400).send({message: `Invalid ID`});
}

const validateLogin = async (req, res, next) => {
  const login = req.body;
  let errors = []

  if(!login.email) errors.push("email");
  if(!login.password) errors.push("passowrd");

  if(errors.length != 0){
    return res.status(400).send({message: showErrors(errors)});
  }

  return next();
}

module.exports = {
  validateUser,
  validateProduct,
  validateCategory,
  validateOrder,
  validateShoppCart,
  validateId,
  validateLogin
}
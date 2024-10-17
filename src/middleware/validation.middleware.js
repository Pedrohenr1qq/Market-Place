// Dependencies
const ObjectId = require('mongoose').Types.ObjectId;

const validateUser = (req, res, next) => {
  const user = req.body;

  if(!user.name) return res.status(400).send({message: "The name field is empty"});
  if(!user.email) return res.status(400).send({message: "The email field is empty"});
  if(!user.password) return res.status(400).send({message: "The password field is empty"});
  if(!user.image) return res.status(400).send({message: "The image field is empty"});

  return next();
}

const validateProduct = async (req, res, next) => {
  const errors = [];
  const product = req.body;

  if(!product.name) errors.push("name");
  if(!product.description) errors.push("description");
  if(!product.unitPrice) errors.push("unitPrice");
  if(!product.image) errors.push("image");
  if(!product.barCode) errors.push("barCode");
  if(!product.categories) errors.push("categories");

  if(errors.length != 0){
    if(errors.length > 1) return res.status(400).send({message: `The fields '${errors}' are empties`});
    else return res.status(400).send({message: `The field '${errors}' is empty`});
  }

  return next();
}

const validateCategory = async (req, res, next) => {
  if(!req.body.name) return res.status(400).send({message: "name field is empty"});

  return next();
}

const validateOrder = async (req, res, next) => {
  const errors = [];
  const order = req.body;

  if(!order.totalPrice) errors.push("totalPrice");
  if(!order.freight) errors.push("freight");
  if(order.completed == undefined) errors.push("completed");

  if(errors.length != 0){
    if(errors.length > 1) return res.status(400).send({message: `The fields '${errors}' are empties`});
    else return res.status(400).send({message: `The field '${errors}' is empty`});
  }

  return next();
}

const validateShoppCart = async (req, res, next) => {
  const errors = [];
  const shoppCart = req.body;

  if(!shoppCart.totalPrice) errors.push("totalPrice");
  if(!shoppCart.freight) errors.push("freight");

  if(errors.length != 0){
    if(errors.length > 1) return res.status(400).send({message: `The fields '${errors}' are empties`});
    else return res.status(400).send({message: `The field '${errors}' is empty`});
  }

  return next();
}

const validateId = async (req, res, next) => {
  if(ObjectId.isValid(req.params.id)) return next();
  else return res.status(400).send({message: `Invalid ID`});
}

module.exports = {
  validateUser,
  validateProduct,
  validateCategory,
  validateOrder,
  validateShoppCart,
  validateId
}
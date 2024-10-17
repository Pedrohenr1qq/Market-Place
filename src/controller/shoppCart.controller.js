const shoppCartService = require('../service/shoppCart.service');


const findShoppCartById = async (req, res) => {
  try {
    res.send(await shoppCartService.findShoppCartById(req.params.id));

  } catch (err) {
    console.log(`Error in find SHOPP_CART by id: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

const findAllShoppCarts = async (req, res) => {
  try {
    res.send(await shoppCartService.findAllShoppCarts(req.query.limit, req.query.offset));

  } catch (err) {
    console.log(`Error in find all SHOPP_CARTS: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

const createShoppCart = async (req, res) => {
  try {

    const newShoppCart = {
      ...req.body,
      userId: req.userId,
    }

    res.status(201).send(await shoppCartService.createShoppCart(newShoppCart));

  } catch (err) {
    console.log(`Error in create a new SHOPP_CART: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

const updateShoppCart = async (req, res) => {
  try {
    res.send(await shoppCartService.updateShoppCart(req.params.id, req.body));

  } catch (err) {
    console.log(`Error in update a SHOPP_CART: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

const deleteShoppCart = async (req, res) => {
  try {
    res.send(await shoppCartService.deleteShoppCart(req.params.id));

  } catch (err) {
    console.log(`Error in delete a SHOPP_CART: ${err.message}`);
    res.status(500).send({message: "Internal error. Try again later"});
  }
}

module.exports = {
  findShoppCartById,
  findAllShoppCarts,
  createShoppCart,
  updateShoppCart,
  deleteShoppCart
}
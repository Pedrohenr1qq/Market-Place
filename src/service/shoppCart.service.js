const ShoppCart = require('../model/shoppCart.model');

const findShoppCartById = (id) => ShoppCart.findById(id);

const findAllShoppCarts = (limit, offset) => ShoppCart.find().limit(limit).skip(offset);

const createShoppCart = (newShoppCart) => ShoppCart.create(newShoppCart);

const updateShoppCart = (id, shopCart) => ShoppCart.findByIdAndUpdate(id, shopCart, {returnDocument: "after"});

const deleteShoppCart = (id) => ShoppCart.findByIdAndDelete(id);

module.exports = {
  findShoppCartById,
  findAllShoppCarts,
  createShoppCart,
  updateShoppCart,
  deleteShoppCart
}
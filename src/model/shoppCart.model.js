const mongoose = require('mongoose');

const shoppCartSchema = new mongoose.Schema({
  products: [
    {
      _id: {type: mongoose.Schema.Types.ObjectId, required: true ,ref: "products"},
      quantity: {type: Number, required: true}
    }
  ],
  createdAt: {type: Date, required: true, default: Date.now()},
  totalPrice: {type: Number, required: true},
  freigth: {type: Number, required: true},
  userId: {type: mongoose.Schema.Types.ObjectId, required: true, ref: "users"}
});

const ShoppCart = mongoose.model('shoppCarts', shoppCartSchema);

module.exports = ShoppCart;
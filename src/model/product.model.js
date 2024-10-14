const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {type: String, unique: true, required: true},
  description: {type: String, required: true},
  unitPrice: {type: Number, required: true},
  image: {type: String, required: true},
  barCode: {type: Number, required: true, unique:true},
  // category: [
  //   {
  //     _id: {type: mongoose.Schema.Types.ObjectId, required: true, unique: true, ref: "categories"},
  //     createdAt: {type: Date, required: true}
  //   }
  // ]
})

const Product = mongoose.model("products", productSchema);

module.exports = Product;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:{ type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  image: {type: String, required: true},
  address: [
    {
      street: {type: String, required: true},
      number: {type: Number, required: true},
      complement: {type: String, required: false},
      CEP: {type: String, required: true},
      createdAt: {type: Date, required: true}
    }
  ],
  createdAt: {type: Date, required: true},
  fav_products: [
    {
      _id: {type: mongoose.Schema.Types.ObjectId, required:true, unique:true, ref: 'products'},
      createdAt: {type: Date, required: true}
    }
  ],
  admin: {type: Boolean, required: true, default: false}
});

const User = mongoose.model('users', userSchema);

module.exports = User;
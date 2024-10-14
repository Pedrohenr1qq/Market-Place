const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  name:{ type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  image: {type: String, required: true},
  addresses: [
    {
      street: {type: String, required: true},
      number: {type: Number, required: true},
      complement: {type: String, required: false},
      CEP: {type: String, required: true},
      createdAt: {type: Date, required: true, default: Date.now()}
    }
  ],
  createdAt: {type: Date, required: true, default: Date.now()},
  admin: {type: Boolean, required: true, default: false}
});

userSchema.pre("save", async function (next) {
  if(this.password){
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

const User = mongoose.model('users', userSchema);

module.exports = User;
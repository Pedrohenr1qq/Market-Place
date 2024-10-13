const User = require('../model/user.model');

// User consult DB
// READ user
const findUserById = (id) => User.findById(id);

const findAllUsers = () => User.find();

// CREATE user
const createUser = (newUser) => User.create(newUser);

// UPDATE user
const updateUser = (id, updatedUser) => User.findByIdAndUpdate(id, updatedUser, {returnDocument: "after"});

// DELETE user
const deleteUser = (id) => User.findByIdAndDelete(id);

// CREATE address
const addAddress = (id, address) => {

}

// DELETE adress
const removeAddress = (id, address) => {

}

// CREATE favorite_product
const addFavProduct = (id, favProduct) =>{

}

// DELETE favorite_product
const removeFavProduct = (id, favProduct) =>{
  
}

module.exports = {
  findUserById,
  findAllUsers,
  createUser,
  updateUser,
  deleteUser,
  addAddress,
  removeAddress,
  addFavProduct,
  removeFavProduct
}
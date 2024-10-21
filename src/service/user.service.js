const User = require('../model/user.model');

// User consult DB
// READ user
const findUserById = (id) => User.findById(id);

const findAllUsers = (limit, offset) => User.find().limit(limit).skip(offset);

// CREATE user
const createUser = (newUser) => User.create(newUser);

// UPDATE user
const updateUser = (id, updatedUser) => User.findByIdAndUpdate(id, updatedUser, {returnDocument: "after"});

// DELETE user
const deleteUser = (id) => User.findByIdAndDelete(id);

// CREATE address
const addAddress = (id, address) => {
  return User.findOneAndUpdate(
    {
      _id: id
    }, 
    {
      $push: {
        addresses: address
      }
    }, {
      rawResults: true
    });
}

// DELETE adress
const removeAddress = (id, addressId) => {
  return User.findOneAndUpdate(
    {
      _id: id
    },
    {
      $pull:{
        addresses: {
          _id: addressId
        }
      }
    },
    {
      rawResults: true
    }
  );
}

// CREATE favorite_product
const addFavProduct = (id, favProduct) =>{
  return User.findOneAndUpdate(
    {
      _id: id
    },
    {
      $push:{
        favProducts: favProduct
      }
    },
    {
      rawResults: true
    }
  );
}

// DELETE favorite_product
const removeFavProduct = (id, favProduct) =>{
  return User.findOneAndUpdate(
    {
      _id: id
    },
    {
      $pull:{
        favProducts: {
          _id: favProduct._id
        }
      }
    },
    {
      rawResults: true
    }
  );
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
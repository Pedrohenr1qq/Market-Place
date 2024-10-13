const userService = require('../service/user.service');

// User routes
// READ
const findUserById = async (req,res) =>{
  try {
    const user = await userService.findUserById(req.params.id);

    if(!user) return res.status(404).send({message: "User not found"});

    return res.send(user);

  } catch (error) {
    if(error.kind == "ObjectId") return res.status(400).send({message: "Invalid ID"});

    console.log(`Error in find user: ${error}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

const findAllUsers = async (req,res) =>{
  try {
    return  res.send(await userService.findAllUsers());
  } catch (error) {
    console.log(`Error in find all users: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

// CREATE
const createUser= async (req,res) =>{
  try {
    const newUser = req.body;
    if(!newUser.name) return res.status(400).send({message: "The name field is empty"});
    if(!newUser.email) return res.status(400).send({message: "The email field is empty"});
    if(!newUser.password) return res.status(400).send({message: "The password field is empty"});

    return res.status(201).send(await userService.createUser(newUser));

  } catch (error) {
    console.log(`Error in create user: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

// UPDATE
const updateUser= async (req,res) =>{
  try {
    const updatedUser = req.body;
    if(!updatedUser.name) return res.status(400).send({message: "The name field is empty"});
    if(!updatedUser.email) return res.status(400).send({message: "The email field is empty"});
    if(!updatedUser.password) return res.status(400).send({message: "The password field is empty"});

    res.send(await userService.updateUser(req.params.id, updatedUser));

  } catch (error) {
    console.log(`Error in update user: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

// DELETE
const deleteUser= async (req,res) =>{
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    
    if(deletedUser.deletedCount > 0) return res.send({message: "User deleted"});
    else return res.status(404).send({message: "User not found"});

  } catch (error) {
    console.log(`Error in delete user: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

// Address routes
// CREATE
const addAddress= async (req,res) =>{
  try {
    
  } catch (error) {
    console.log(`Error in create address: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}
// DELETE
const removeAddress= async (req,res) =>{
  try {
    
  } catch (error) {
    console.log(`Error in delete address: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

// Favorite_Products routes
// CREATE
const addFavProduct= async (req,res) =>{
  try {
    
  } catch (error) {
    console.log(`Error in create favorite product: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}
// DELETE
const removeFavProduct = async (req,res) =>{
  try {
    
  } catch (error) {
    console.log(`Error in delete favorite product: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
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
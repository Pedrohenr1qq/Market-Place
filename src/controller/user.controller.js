
// User routes
// READ
const findUserById = async (req,res) =>{
  try {
    
  } catch (error) {
    console.log(`Error in find user: ${error}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

const findAllUsers = async (req,res) =>{
  try {
    
  } catch (error) {
    console.log(`Error in find all users: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

// CREATE
const createUser= async (req,res) =>{
  try {
    
  } catch (error) {
    console.log(`Error in create user: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

// UPDATE
const updateUser= async (req,res) =>{
  try {
    
  } catch (error) {
    console.log(`Error in update user: ${error.message}`);
    return res.status(500).send({message: 'Internal error. Try again later.'});
  }
}

// DELETE
const deleteUser= async (req,res) =>{
  try {
    
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
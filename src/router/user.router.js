// Dependencies
const router = require('express').Router();

// Internal Requires
const userController = require('../controller/user.controller');

// Create routes
// GET
router.get('/findById/:id', userController.findUserById);
router.get('/findAll', userController.findAllUsers);

// POST
router.post('/create', userController.createUser);
router.post('/createAddress', userController.addAddress);
router.post('/createFavProduct', userController.addFavProduct);

// PUT
router.put('/update/:id', userController.updateUser);

// DELETE
router.delete('/delete/:id', userController.deleteUser);
router.post('/deleteAddress/:id', userController.removeAddress);
router.post('/deleteFavProduct/:id', userController.removeFavProduct);


module.exports = router;
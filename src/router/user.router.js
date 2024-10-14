// Dependencies
const router = require('express').Router();

// Internal Requires
const userController = require('../controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, userController.findUserById);
router.get('/findAll' ,userController.findAllUsers);

// POST
router.post('/create', userController.createUser);
router.post('/createAddress/:id', userController.addAddress);
router.post('/createFavProduct', userController.addFavProduct);

// PUT
router.put('/update/:id', userController.updateUser);

// DELETE
router.delete('/delete/:id', userController.deleteUser);
router.delete('/deleteAddress/:id', userController.removeAddress);
router.delete('/deleteFavProduct/:id', userController.removeFavProduct);


module.exports = router;
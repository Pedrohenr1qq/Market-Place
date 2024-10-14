// Dependencies
const router = require('express').Router();

// Internal Requires
const userController = require('../controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, userController.findUserById);
router.get('/findAll', authMiddleware, userController.findAllUsers);

// POST
router.post('/create', userController.createUser);
router.post('/addAddress/:id', authMiddleware,  userController.addAddress);
router.post('/addFavProduct/:id', authMiddleware, userController.addFavProduct);

// PUT
router.put('/update/:id', authMiddleware, userController.updateUser);

// DELETE
router.delete('/delete/:id', authMiddleware, userController.deleteUser);
router.delete('/removeAddress/:id', authMiddleware, userController.removeAddress);
router.delete('/removeFavProduct/:id', authMiddleware, userController.removeFavProduct);


module.exports = router;
// Dependencies
const router = require('express').Router();

// Internal Requires
const userController = require('../controller/user.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {validateUser, validateId, validateAddress, validateFavProducts} = require('../middleware/validation.middleware');
const pagination = require('../middleware/pagination.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, validateId, userController.findUserById);
router.get('/findAll', authMiddleware, pagination, userController.findAllUsers);

// POST
router.post('/create', validateUser, userController.createUser);
router.post('/addAddress/:id', authMiddleware, validateId, validateAddress,  userController.addAddress);
router.post('/addFavProduct/:id', authMiddleware, validateId, validateFavProducts, userController.addFavProduct);

// PUT
router.put('/update/:id',authMiddleware, validateId, validateUser, userController.updateUser);

// DELETE
router.delete('/delete/:id', authMiddleware, validateId, userController.deleteUser);
router.delete('/removeAddress/:id', authMiddleware, validateId, userController.removeAddress);
router.delete('/removeFavProduct/:id', authMiddleware, validateId, validateFavProducts, userController.removeFavProduct);


module.exports = router;
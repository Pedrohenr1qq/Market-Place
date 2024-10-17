// Dependencies
const router = require('express').Router();

// Internal Requires
const shoppCartController = require('../controller/shoppCart.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {validateShoppCart, validateId} = require('../middleware/validation.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, validateId, shoppCartController.findShoppCartById);
router.get('/findAll', authMiddleware, shoppCartController.findAllShoppCarts);

// POST
router.post('/create', authMiddleware, validateShoppCart, shoppCartController.createShoppCart);

// PUT
router.put('/update/:id', authMiddleware, validateId, validateShoppCart, shoppCartController.updateShoppCart);

// DELETE
router.delete('/delete/:id', authMiddleware, validateId, shoppCartController.deleteShoppCart);


module.exports = router;
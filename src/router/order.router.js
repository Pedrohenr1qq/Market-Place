// Dependencies
const router = require('express').Router();

// Internal Requires
const orderController = require('../controller/order.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {validateOrder, validateId} = require('../middleware/validation.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, validateId, orderController.findOrderById);
router.get('/findAll', authMiddleware, orderController.findAllOrders);

// POST
router.post('/create', authMiddleware, validateOrder, orderController.createOrder);

// PATCH
router.patch('/updateStatus/:id', authMiddleware, validateId, orderController.updateStatusOrder);

// DELETE
router.delete('/delete/:id', authMiddleware, validateId, orderController.deleteOrder);


module.exports = router;
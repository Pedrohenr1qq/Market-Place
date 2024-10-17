// Dependencies
const router = require('express').Router();

// Internal Requires
const productController = require('../controller/product.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {validateProduct, validateId} = require('../middleware/validation.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, validateId, productController.findProductById);
router.get('/findAll', authMiddleware, productController.findAllProducts);

// POST
router.post('/create', authMiddleware, validateProduct, productController.createProduct);
router.post('/addCategory/:id', authMiddleware, validateId, productController.addCategoryToProduct);

// PUT
router.put('/update/:id', authMiddleware, validateId, validateProduct, productController.updateProduct);

// DELETE
router.delete('/delete/:id', authMiddleware, validateId, productController.deleteProduct);
router.delete('/removeCategory/:id', authMiddleware, validateId, productController.removeCategoryFromProduct);

module.exports = router;
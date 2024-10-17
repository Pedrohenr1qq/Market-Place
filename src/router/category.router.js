// Dependencies
const router = require('express').Router();

// Internal Requires
const categoryController = require('../controller/category.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {validateCategory, validateId} = require('../middleware/validation.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, validateId, categoryController.findCategoryById);
router.get('/findAll', authMiddleware, categoryController.findAllCategories);

// POST
router.post('/create', authMiddleware, validateCategory, categoryController.createCategory);

// PUT
router.put('/update/:id', authMiddleware, validateId, validateCategory, categoryController.updateCategory);

// DELETE
router.delete('/delete/:id', authMiddleware, validateId, categoryController.deleteCategory);


module.exports = router;
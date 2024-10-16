// Dependencies
const router = require('express').Router();

// Internal Requires
const categoryController = require('../controller/category.controller');
const authMiddleware = require('../middleware/auth.middleware');
const {validateCategory} = require('../middleware/validation.middleware');

// Create routes
// GET
router.get('/findById/:id', authMiddleware, categoryController.findCategoryById);
router.get('/findAll', authMiddleware, categoryController.findAllCategories);

// POST
router.post('/create', authMiddleware, validateCategory, categoryController.createCategory);

// PUT
router.put('/update/:id', authMiddleware, validateCategory, categoryController.updateCategory);

// DELETE
router.delete('/delete/:id', authMiddleware, categoryController.deleteCategory);


module.exports = router;
// Dependencies
const router = require('express').Router();

// Internal Requires
const userController = require('../controller/user.controller');

// Create routes
// GET
router.get('/findById/:id');

// POST
router.post('/create');
router.post('/createAddress');
router.post('/createFavProd');

// PUT
router.put('/update/:id');

// DELETE
router.delete('/delete/:id');

module.exports = router;
const express = require('express');
const CategoryRoutes = express.Router();

let categoryController = require('../controllers/CategoryController');

categoryController = new categoryController();

CategoryRoutes.get('/categorys', categoryController.findAll);
CategoryRoutes.get('/category/:id', categoryController.findById);
CategoryRoutes.post('/category', categoryController.create);
CategoryRoutes.put('/category/:id', categoryController.upate);
CategoryRoutes.delete('/category/:id', categoryController.delete);

module.exports = CategoryRoutes;
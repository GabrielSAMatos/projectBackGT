const express = require('express');
const CategoryRoutes = express.Router();

const CategoryController = require('../controllers/CategoryController');

const categoryController = new CategoryController();

CategoryRoutes.get('/categorys', categoryController.findAll);
CategoryRoutes.get('/category/:id', categoryController.findById);
CategoryRoutes.post('/category', categoryController.create);
CategoryRoutes.put('/category/:id', categoryController.update);
CategoryRoutes.delete('/category/:id', categoryController.delete);

module.exports = CategoryRoutes;
const express = require('express');
const ProductRoutes = express.Router();

let productController = require('../controllers/ProductController.js');

productController = new productController();

ProductRoutes.get('/products', productController.findAll);
ProductRoutes.get('/product/:id', productController.findById);
ProductRoutes.post('/product', productController.create);
ProductRoutes.put('/product/:id', productController.upate);
ProductRoutes.delete('/product/:id', productController.delete);

module.exports = ProductRoutes;
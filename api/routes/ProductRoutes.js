const express = require('express');
const ProductController = require('../controllers/ProductController');
const ProductRoutes = express.Router();


const productController = new ProductController();

ProductRoutes.get('/products', productController.findAll);
ProductRoutes.get('/product/:id', productController.findById);
ProductRoutes.post('/product', productController.create);
ProductRoutes.put('/product/:id', productController.update);
ProductRoutes.delete('/product/:id', productController.delete);

module.exports = ProductRoutes;
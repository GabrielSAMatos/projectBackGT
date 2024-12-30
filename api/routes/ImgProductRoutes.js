const express = require('express');
const ImgProductController = require('../controllers/ImgProductController');
const ImgProductRoutes = express.Router();


const imgProductController = new ImgProductController();

ImgProductRoutes.get('/images', imgProductController.findAll);
ImgProductRoutes.get('/image/:id', imgProductController.findById);
ImgProductRoutes.post('/image', imgProductController.create);
ImgProductRoutes.put('/image/:id', imgProductController.update);
ImgProductRoutes.delete('/image/:id', imgProductController.delete);

module.exports = ImgProductRoutes;
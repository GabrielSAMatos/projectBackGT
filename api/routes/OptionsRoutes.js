const express = require('express');
const OptionsController = require('../controllers/OptionsController');
const OptionsRoutes = express.Router();


const optionsController = new OptionsController();

OptionsRoutes.get('/options', optionsController.findAll);
OptionsRoutes.get('/option/:id', optionsController.findById);
OptionsRoutes.post('/option', optionsController.create);
OptionsRoutes.put('/option/:id', optionsController.update);
OptionsRoutes.delete('/option/:id', optionsController.delete);

module.exports = OptionsRoutes;
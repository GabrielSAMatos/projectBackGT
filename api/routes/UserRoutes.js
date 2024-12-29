const express = require('express');
const UserRoutes = express.Router();

let userController = require('../controllers/UserController.js');

userController = new userController();

UserRoutes.get('/users', userController.findAll);
UserRoutes.get('/user/:id', userController.findById);
UserRoutes.post('/user', userController.create);
UserRoutes.put('/user/:id', userController.upate);
UserRoutes.delete('/user/:id', userController.delete);

module.exports = UserRoutes;
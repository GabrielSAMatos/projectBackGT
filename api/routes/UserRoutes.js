const express = require('express');
const UserRoutes = express.Router();

const UserController = require('../controllers/UserController.js');

const userController = new UserController();

UserRoutes.get('/users', userController.findAll);
UserRoutes.get('/user/:id', userController.findById);
UserRoutes.post('/user', userController.create);
UserRoutes.put('/user/:id', userController.update);
UserRoutes.delete('/user/:id', userController.delete);

module.exports = UserRoutes;
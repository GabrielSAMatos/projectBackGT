const express = require('express');
const AuthController = require('../controllers/AuthController');

const AuthRoutes = express.Router()
const authController = new AuthController
AuthRoutes.post('/login', authController.login);

module.exports = AuthRoutes;
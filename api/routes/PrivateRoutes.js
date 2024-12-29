const express = require('express');
const jwt = require('jsonwebtoken');
const CategoryRoutes = require('./CategoryRoutes');

require('dotenv').config();


const PrivateRoutes = express.Router();

PrivateRoutes.use((req, res, next) => {
    return next();

    const token = req.headers.token;
    try{
        jwt.verify(token, process.env.APP_KEY_TOKEN); 
    } catch(JsonWebTokenError){
        return res.status(401).send("Unauthorized")
    };

    return next();
});


PrivateRoutes.use(CategoryRoutes);



module.exports = PrivateRoutes;
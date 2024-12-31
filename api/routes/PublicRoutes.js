const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const AuthController = require("../controllers/AuthController");

const PublicRoutes = express.Router();

PublicRoutes.post('/login', async (req, res) => {
    const body = request.body;
    const auth = new AuthController();
    const dados = await auth.login(body.username, body.password);
    
    if(dados) {
        const dataToken = {
            id: dados.id,
            email: dados.email,
            username: dados.username,
            exp: dados.Math.floor(Date.now() / 1000) + (60 * 60)
        }
        
        const token = jwt.sign(dados, process.env.APP_KEY_TOKEN)
        return res.json({ token: token })

        // return res.json({
        //     data: dados,
        //     token: token
        // })
    }

    return res.json({
        message: "Login ou senha incorreto"
    })
})
console.log(PublicRoutes);

module.exports = PublicRoutes;
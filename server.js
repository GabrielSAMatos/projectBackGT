const express = require('express');
const PrivateRoutes = require('./api/routes/PrivateRoutes');

const host = "localhost";
const port = 3000;

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    return res.send("Funcionando.");
});

//ROTAS PRIVADAS
app.use(PrivateRoutes);


app.listen(port, host, () => {
    console.log(`Server executing at http://${host}:${port}`);
});
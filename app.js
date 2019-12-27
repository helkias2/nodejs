const express = require('express');

//Rotas
const router = express.Router();
router.get('/', (req, res)=>{
    res.send('Ola Mundo');
});

//Configuracao
const server = express();
const app = express();
app.use('/', router);

module.exports = app;
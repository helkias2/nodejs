const express = require('express');

const app = express();

app.use('/', require('./src/routes'));

app.set('port', 7777);
const server = app.listen(app.get('port'), ()=>{
    console.log("Servidor rodando na porta"+ server.address().port);
});


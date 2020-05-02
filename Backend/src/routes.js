const express = require('express');
const routes = express.Router();
const control = require('./Controllers')

routes.get('/', (req, res)=>{
    return res.status(200).send('<h1>Conectado<h1/>');
});
routes.get('/all', control.index);
routes.post('/add', control.create);
routes.delete('/delete/:id', control.delete);




module.exports = routes;

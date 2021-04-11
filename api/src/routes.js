const express = require('express');
const ProdutosController = require('./controllers/ProdutosController');

const routes = express.Router();

routes.post('/AddProdutos', ProdutosController.store);
routes.get('/GetProdutos', ProdutosController.index);

module.exports = routes;
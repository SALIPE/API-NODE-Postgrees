const express = require('express');
const ProdutosController = require('./controllers/ProdutosController');
const EstoqueController = require('./controllers/EstoqueController');

const routes= express.Router();

routes.post('/AddProdutos', ProdutosController.store);
routes.get('/GetProdutos', ProdutosController.index);

routes.post('/AddEstoque', EstoqueController.store);

module.exports = routes;
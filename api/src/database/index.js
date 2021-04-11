const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Produtos = require('../models/Produtos');
const Estoque = require('../models/Estoque');

const connection = new Sequelize(dbConfig);

Produtos.init(connection);
Estoque.init(connection);

Estoque.associate(connection.models);

module.exports = connection;
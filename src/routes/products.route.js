const express = require('express');
const routes = express.Router();
const productsController = require('../controllers/products.controller');

routes.post('/products', productsController.createProduct);
routes.get('/products', productsController.getProducts);
module.exports = routes;

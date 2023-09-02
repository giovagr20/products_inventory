const express = require('express');
const routes = express.Router();
const storeController = require('../controllers/store.controller');

routes.get('/stores', storeController.getStores);
routes.post('/stores', storeController.createStore)

module.exports = routes;
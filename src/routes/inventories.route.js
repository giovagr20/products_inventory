const express = require('express');
const routes = express.Router();
const inventoriesController = require('../controllers/inventories.controller');

routes.post('/inventory', inventoriesController.createInventory);

module.exports = routes;
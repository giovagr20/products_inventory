const express = require('express');
const routes = express.Router();
const usersController = require('../controllers/users.controller');

routes.get('/user', usersController.getUsers)
routes.get('/user/:id', usersController.getUserById)

module.exports = routes;
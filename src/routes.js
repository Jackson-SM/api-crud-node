require('express-async-errors');
const routes = require('express').Router();

const UserController = require('./controllers/UserController');

routes.post('/users', UserController.store);

module.exports = routes;

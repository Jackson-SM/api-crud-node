require('express-async-errors');
const routes = require('express').Router();

const UserController = require('./controllers/UserController');
const authMiddleware = require('./middlewares/authMiddleware');

// Public Routes
routes.post('/users', UserController.create);
routes.post('/users/login', UserController.login);

routes.use(authMiddleware);
// Private Routes
routes.get('/users', UserController.read);
routes.post('/users/update/:userId', UserController.update);

module.exports = routes;

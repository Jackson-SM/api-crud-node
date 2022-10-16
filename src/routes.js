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
routes.put('/users/update/:userId', UserController.update);
routes.delete('/users/delete/:userId', UserController.delete);

module.exports = routes;

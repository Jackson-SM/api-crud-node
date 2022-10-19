require('express-async-errors');
const routes = require('express').Router();

const TaskController = require('./controllers/TaskController');
const UserController = require('./controllers/UserController');
const authMiddleware = require('./middlewares/authMiddleware');

// Public Routes
routes.post('/users', UserController.create);
routes.post('/users/login', UserController.login);

routes.use(authMiddleware);
// Private Routes
routes.get('/users', UserController.read);
routes.get('/users/:userId', UserController.userById);
routes.get('/users/email', UserController.userByEmail);

routes.put('/users/update/:userId', UserController.update);
routes.delete('/users/delete/:userId', UserController.delete);

// Tasks
routes.get('/tasks', TaskController.read);
routes.post('/:userId/tasks', TaskController.create);
routes.put('/:taskId/tasks', TaskController.update);

module.exports = routes;

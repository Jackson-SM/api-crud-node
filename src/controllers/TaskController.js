const NotFoundError = require('../helpers/Errors/NotFoundError');
const Task = require('../models/Task');
const User = require('../models/User');

class TaskController {
  static async create(req, res) {
    const { title, description, realized } = req.body;
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) throw new NotFoundError('Usuário não encontrado.');

    const task = await Task.create({ title, description, user_id: userId });

    res.status(201).json(task);
  }

  static async read(req, res) {
    const tasks = await Task.findAll({ include: { association: 'user', attributes: { exclude: ['password'] } } });

    res.json(tasks);
  }

  static async update(req, res) {
    const { title, description, realized } = req.body;
    const { taskId } = req.params;

    const task = await Task.findByPk(taskId);

    if (!task) throw new NotFoundError('Task não encontrada.');

    const taskUpdate = await task.update({ title, description, realized });

    res.json(task);
  }

  // static async read(req, res) {}

  // static async update(req, res) {}

  // static async delete(req, res) {}
}

module.exports = TaskController;

require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const BadRequestError = require('../helpers/Errors/BadRequestError');
const NotFoundError = require('../helpers/Errors/NotFoundError');

const User = require('../models/User');

class UserController {
  static async create(req, res) {
    const { name, email, password } = req.body;

    if (name.length <= 3 || email.length <= 6 || password.length <= 3)
      throw new BadRequestError('Preencha todas os campos corretamente.');

    const userExists = await User.findOne({ where: { email } });
    if (userExists) throw new NotFoundError('Usuário já existente.');

    const passwordHash = await bcrypt.hashSync(password, 10);

    const user = await User.create({ name, email, password: passwordHash });

    const { password: _, ...userCreated } = user.dataValues;

    return res.status(201).json(userCreated);
  }

  static async read(req, res) {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });

    if (!users) throw new NotFoundError('Não foi encontrado.');

    return res.json(users);
  }

  static async update(req, res) {
    const { userId } = req.params;
    const { password } = req.body;

    const user = await User.findByPk(userId);
    if (!user) throw new NotFoundError('Usuário não existente');

    const verifyPassword = await bcrypt.compareSync(password, user.password);
    if (verifyPassword) throw new BadRequestError('Indique uma password diferente da atual.');

    const passwordHash = await bcrypt.hashSync(password, 10);

    const userUpdate = await user.update({ password: passwordHash });

    return res.json(userUpdate);
  }

  static async delete(req, res) {
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) throw new BadRequestError('Usuário inexistente.');
    await user.destroy();

    return res.status(204).json({ message: 'Usuário deletado.' });
  }

  static async userById(req, res) {
    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) throw new BadRequestError('Usuário inexistente');

    return res.json(user);
  }

  static async userByEmail(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) throw new BadRequestError('Usuário inexistente');

    return res.json(user);
  }

  static async login(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    const passwordVerify = await bcrypt.compareSync(password, user.password);
    if (!passwordVerify) throw new BadRequestError('Login ou senha incorretos');

    const token = await jwt.sign({ id: user.id }, `${process.env.API_SECRET_KEY}`, { expiresIn: 60 * 60 });

    const { password: _, ...userLogin } = user.dataValues;

    res.json({ user: userLogin, token });
  }
}

module.exports = UserController;

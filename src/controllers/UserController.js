const { RequestError } = require('../helpers/RequestError');
const User = require('../models/User');

class UserController {
  static async store(req, res) {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) throw new RequestError('Account already exists', 400);

    const user = await User.create({ name, email, password });

    return res.json(user);
  }
}

module.exports = UserController;

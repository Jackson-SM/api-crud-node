const User = require('../models/User');

class UserController {
  static async store(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    return res.json(user);
  }
}

module.exports = UserController;

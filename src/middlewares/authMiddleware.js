const jwt = require('jsonwebtoken');
const BadRequestError = require('../helpers/Errors/BadRequestError');

const UnauthorizedError = require('../helpers/Errors/UnauthorizedError');

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) res.json({ message: 'Token is required', statusCode: 401 });

  const token = authorization.split(' ')[1];

  try {
    const { id } = await jwt.verify(token, `${process.env.API_SECRET_KEY}`);

    next();
  } catch (err) {
    res.json({ message: 'token is invalid', statusCode: 401 });
  }
};

module.exports = authMiddleware;

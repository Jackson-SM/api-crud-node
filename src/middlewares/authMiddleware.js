const jwt = require('jsonwebtoken');

const UnauthorizedError = require('../helpers/Errors/UnauthorizedError');

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  const token = authorization.split(' ')[1];

  try {
    const jwtVerify = await jwt.verify(token, `${process.env.API_SECRET_KEY}`);
  } catch (e) {
    throw new UnauthorizedError('Token is invalid');
  }

  next();
};

module.exports = authMiddleware;

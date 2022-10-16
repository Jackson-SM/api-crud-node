const jwt = require('jsonwebtoken');
const BadRequestError = require('../helpers/Errors/BadRequestError');

const UnauthorizedError = require('../helpers/Errors/UnauthorizedError');

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) res.status(401).json({ message: 'Token is required' });

  const token = authorization.split(' ')[1];

  try {
    const jwtVerify = await jwt.verify(token, `${process.env.API_SECRET_KEY}`);
  } catch (e) {
    throw new UnauthorizedError('Token is expired');
  }

  next();
};

module.exports = authMiddleware;

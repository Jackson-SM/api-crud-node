const errorMiddleware = (error, req, res, next) => {
  return res.status(error.statusCode).json({ message: error.message });
};

module.exports = errorMiddleware;

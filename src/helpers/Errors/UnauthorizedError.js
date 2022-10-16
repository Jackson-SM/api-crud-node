const { RequestError } = require('./RequestError');

class UnauthorizedError extends RequestError {
  constructor(message) {
    super(message, 401);
  }
}

module.exports = UnauthorizedError;

const { RequestError } = require('./RequestError');

class NotFoundError extends RequestError {
  constructor(message) {
    super(message, 404);
  }
}

module.exports = NotFoundError;

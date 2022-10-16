const { RequestError } = require('./RequestError');

class BadRequestError extends RequestError {
  constructor(message) {
    super(message, 400);
  }
}

module.exports = BadRequestError;

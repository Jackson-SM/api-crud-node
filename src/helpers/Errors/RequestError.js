// eslint-disable-next-line max-classes-per-file
class RequestError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}
module.exports = {
  RequestError,
};

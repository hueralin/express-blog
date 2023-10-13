const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const checkLogin = (req, res, next) => {
  if (!req.session.user) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Not login');
  }
  next();
};

module.exports = checkLogin;

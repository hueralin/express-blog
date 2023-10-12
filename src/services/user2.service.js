const httpStatus = require('http-status');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

async function isEmailTaken(email) {
  const user = await User.findOne({ where: { email } });
  return !!user;
}

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  const user = await User.create(userBody);
  return user;
};

module.exports = {
  createUser,
};

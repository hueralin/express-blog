const bcrypt = require('bcryptjs');
const httpStatus = require('http-status');
const config = require('../config/config');
const { User } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * 检查 email 是否已被使用
 * @param email
 * @returns {Promise<boolean>}
 */
const isEmailTaken = async (email) => {
  const user = await User.findOne({ where: { email } });
  return !!user;
};

/**
 * 检查密码是否匹配
 * @param password
 * @param passwordHashed
 * @returns {*}
 */
const isPasswordMatch = (password, passwordHashed) => {
  return bcrypt.compareSync(password, passwordHashed);
};

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody) => {
  if (await isEmailTaken(userBody.email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  if (userBody.password !== userBody.password_confirm) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Two different passwords');
  }
  userBody.password = bcrypt.hashSync(userBody.password, config.password_salt);
  delete userBody.password_confirm;
  const user = await User.create(userBody);
  return user;
};

/**
 * 根据 email 获取用户
 * @param email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  createUser,
  getUserByEmail,
  isPasswordMatch,
};

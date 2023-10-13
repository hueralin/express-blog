const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define(
  'User',
  {
    email: { type: DataTypes.STRING, unique: true },
    name: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    status: { type: DataTypes.INTEGER, defaultValue: 1 }, // -1 逻辑删除, 0 禁用, 1 启用
  },
  {
    tableName: 'user',
  }
);

module.exports = User;

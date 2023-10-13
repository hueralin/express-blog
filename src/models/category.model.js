const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Category = sequelize.define(
  'Category',
  {
    name: { type: DataTypes.STRING, unique: true },
    desc: { type: DataTypes.STRING },
  },
  {
    tableName: 'category',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

module.exports = Category;

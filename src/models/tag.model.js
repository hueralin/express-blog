const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Tag = sequelize.define(
  'Tag',
  {
    name: { type: DataTypes.STRING, unique: true },
    desc: { type: DataTypes.STRING },
  },
  {
    tableName: 'tag',
  }
);

module.exports = Tag;

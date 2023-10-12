const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Tag = require('../models/tag.model');
const Category = require('../models/category.model');

const Post = sequelize.define(
  'Post',
  {
    title: { type: DataTypes.STRING },
    desc: { type: DataTypes.STRING, defaultValue: '' },
    content: { type: DataTypes.TEXT },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: 'id',
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Category,
        key: 'id',
      },
    },
    status: { type: DataTypes.INTEGER, defaultValue: 1 }, // -1 逻辑删除，0 禁用，1 启用
  },
  {
    tableName: 'post',
  }
);

module.exports = Post;

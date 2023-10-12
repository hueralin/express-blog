const { Sequelize } = require('sequelize');
const config = require('./config/config');

const sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
  dialect: 'mysql',
  host: config.mysql.host,
  port: config.mysql.port,
});

module.exports = sequelize;

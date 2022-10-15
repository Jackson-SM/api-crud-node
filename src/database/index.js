const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');

const sequelize = new Sequelize(dbConfig);

module.exports = sequelize;

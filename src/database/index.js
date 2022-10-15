const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');
const User = require('../models/User');

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);

module.exports = sequelize;

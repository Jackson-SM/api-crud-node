const { Sequelize } = require('sequelize');
const dbConfig = require('../config/database');
const Task = require('../models/Task');
const User = require('../models/User');

const sequelize = new Sequelize(dbConfig);

User.init(sequelize);
Task.init(sequelize);

User.associate(sequelize.models);
Task.associate(sequelize.models);

module.exports = sequelize;

const { Sequelize } = require('sequelize');
const setupModels = require('../db/models');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.bdName}`;

const sequelize = new Sequelize(URI, { dialect: 'mysql', logging: true });

setupModels(sequelize);

module.exports = sequelize;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('intento', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
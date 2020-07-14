const Sequelize = require('sequelize');
module.exports = new Sequelize('testDb', 'postgres', '1', {
    host: 'localhost',
    dialect: 'postgres',
});
const Sequelize = require('sequelize');
const db = require('../config/database');

const Campus = db.define('campuses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        notEmpty: true,
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'https://www.svgrepo.com/show/67989/university.svg'
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allownull: false,
    }
})

module.exports = Campus;
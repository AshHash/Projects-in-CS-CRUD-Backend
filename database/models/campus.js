const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {
    name: {
        type: Sequelize.STRING,
        allownull: false
    },
    address: {
        type: Sequelize.STRING,
        allownull: true
    },
    image: {
        type: Sequelize.STRING,
        allownull: true
    },
    description: {
        type: Sequelize.STRING,
        allownull: true
    }
}, {
    timestamps: false
});

module.exports = Campus;
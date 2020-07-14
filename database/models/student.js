const Sequalize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {
    name:{
        type: Sequalize.STRING,
        allowNull: false
    },
    campusId:{
        type: Sequalize.INTEGER,
        allowNull: true
    },
    gpa:{
        type: Sequalize.DECIMAL,
        allowNull: true
    },
    email: {
        type: Sequalize.STRING,
        allowNull: true
    },
    image: {
        type: Sequalize.STRING,
        allowNull: true
    }
}, {
    timestamps: false
});

module.exports = Student;
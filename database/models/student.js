const Sequalize = require('sequelize');
const db = require('../db');

//setting up schema for students
const Student = db.define("student", {
    firstName: {
        type: Sequalize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequalize.STRING,
        allowNull: false
    },
    campusId: {
        type: Sequalize.INTEGER,
        allowNull: true
    },
    gpa: {
        type: Sequalize.DECIMAL,
        allowNull: true,
        validate: {
            min: 0.0,
            max: 4.0
        }
    },
    email: {
        type: Sequalize.STRING,
        allowNull: true,
        validate: {
            isEmail: true
        }
    },
    image: {
        type: Sequalize.STRING,
        allowNull: true,
        defaultValue: 'https://image.flaticon.com/icons/svg/201/201818.svg'
    }
}, {
    timestamps: false,
});

module.exports = Student;
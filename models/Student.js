const Sequelize = require('sequelize');
const db = require('../config/database');

const Student = db.define('students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'https://image.flaticon.com/icons/svg/201/201818.svg'
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        },
    },
    gpa: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
            min: 0.0,
            max: 4.0
        },
    },
    campusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})

module.exports = Student;
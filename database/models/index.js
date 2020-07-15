// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Student = require('./student');
const Campus = require('./campus');

Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
    Student,
    Campus
};
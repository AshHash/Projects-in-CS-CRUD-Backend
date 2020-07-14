const { Student, Campus } = require('../database/models');

const seedDatabase = async () => {
  const HunterCollege = await Campus.create({
    name: "Hunter College"
  });

  const students = await Promise.all([
    Student.create({
      name: "Student 1"
    }),
    Student.create({
      name: "Student 2"
    }),
    Student.create({
      name: "Student 3"
    })
  ]);
  
}

module.exports = seedDatabase;
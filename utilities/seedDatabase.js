const { Student, Campus } = require('../database/models');

const seedDatabase = async() => {
    console.log("Populating database")
    const HunterCollege = await Campus.create({
        name: "Hunter College",
        address: "695 Park Ave, New York, NY 10065",
        description: "At Hunter College, we offer more than 170 rich and challenging academic programs that equip students with a global outlook and the expertise to thrive in their chosen careers.",
        image: "https://user-content.givegab.com/uploads/group/logo/437316/f240b6ea84cf67ec6781ece21c38ddd338a33336.png"
    });
    console.log("Campuses created");

    const students = await Promise.all([
        Student.create({
            firstName: "Lilian",
            lastName: "Voss",
            image: "https://i.imgur.com/5nprHSh.png",
            gpa: 3.8,
            email: "v.lilly32.33repeatingOfCourse@gmail.com"
        }),
        Student.create({
            firstName: "Benjamin",
            lastName: "Broderick Jr",
            image: "https://gamepedia.cursecdn.com/hearthstone_gamepedia/d/d5/Ben_Brode_-_Twitter.jpg?version=71c7d81253fa6d6e1a94048da7b6aff7",
            gpa: 2.9,
            email: "benBrodeJr@activision.com"
        }),
        Student.create({
            firstName: "Student",
            lastName: "Three",
            image: "https://blognumbers.files.wordpress.com/2010/09/3.jpg?w=231&h=300",
            gpa: 3.3,
            email: "student.3@3mail.org"
        })
    ]);
    console.log("Students created");

    for (let i = 0; i < students.length; i++) {
        await students[i].setCampus(HunterCollege); // YOU CAN PASS IN EITHER THE ACTUAL INSTANCE OF THE MODEL AS AN ARGUMENT OR THE INTEGER ID OF THE MODEL THAT ALREADY EXISTS (KEEP THIS IN MIND WHEN WRITING OUT YOUR HANDLER FUNCTIONS) (YOU MIGHT HAVE A DROPDOWN OF CAMPUSES IN YOUR VIEW ASSOCIATED WITH AN ID SO THAT YOU CAN PASS THAT INFORMATION ACROSS TO THE BACKEND WHEN ESTABLISHING ASSOCIATIONS);
    }
}

module.exports = seedDatabase;
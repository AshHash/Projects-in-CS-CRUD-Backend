const { Student, Campus } = require('../database/models');

//filling the database with values
const seedDatabase = async() => {
    console.log("Populating database")
    const campuses = await Promise.all([
        Campus.create({
            name: "Hunter College",
            address: "695 Park Ave, New York, NY 10065",
            description: "At Hunter College, we offer more than 170 rich and challenging academic programs that equip students with a global outlook and the expertise to thrive in their chosen careers.",
            image: "https://user-content.givegab.com/uploads/group/logo/437316/f240b6ea84cf67ec6781ece21c38ddd338a33336.png"
        }),
        Campus.create({
            name: "Brooklyn College",
            address: "2900 Bedford Ave, Brooklyn, NY 11210",
            description: "Brooklyn College, part of the City University of New York, is a public college in Brooklyn, New York, with about 15,000 undergraduate and 2,800 graduate students on a 35-acre campus.",
            image: "https://petersonsbackup.blob.core.windows.net/static/cdn/profiles/10000623/e042198d-406b-4f83-b5a3-5d0adb2fd2c5"
        }),
        Campus.create({
            name: "Baruch College",
            address: "55 Lexington Ave, New York, NY 10010",
            description: "Baruch College is a public college in Manhattan, New York. It is a constituent college of the City University of New York system.",
            image: "https://media-exp1.licdn.com/dms/image/C4E0BAQG-BFXoiQTrxQ/company-logo_200_200/0?e=2159024400&v=beta&t=5sW3jDObeTEcJLrFXjboXcVtHZ1arj6Lmh9Btfta364"
        })
    ]);

    console.log("Campuses created");

    const students = await Promise.all([
        Student.create({
            firstName: "Lilian",
            lastName: "Voss",
            image: "https://i.imgur.com/5nprHSh.png",
            gpa: 3.8,
            email: "v.lilly32.course@gmail.com"
        }),
        Student.create({
            firstName: "Benjamin",
            lastName: "Broderick Jr",
            image: "https://gamepedia.cursecdn.com/hearthstone_gamepedia/d/d5/Ben_Brode_-_Twitter.jpg?version=71c7d81253fa6d6e1a94048da7b6aff7",
            gpa: 2.9,
            email: "benBrodeJr@activision.com"
        }),
        Student.create({
            firstName: "Leonardo",
            lastName: "DiCaprio",
            image: "https://pyxis.nymag.com/v1/imgs/4d0/153/d805ddfbb5331ba08109664e816b79b8d0-8-Leonardo-DiCaprio.rsquare.w1200.jpg",
            gpa: 3.6,
            email: "leonardo@movies.com"
        }),
        Student.create({
            firstName: "Joe",
            lastName: "Biden",
            image: "https://pyxis.nymag.com/v1/imgs/0de/6ab/aa64d21b9fad903434978b0c0990b83094-biden.rsquare.w1200.jpg",
            gpa: 3.1,
            email: "joe@politics.gov"
        }),
        Student.create({
            firstName: "Michelle",
            lastName: "Obama",
            image: "https://assets.vogue.com/photos/589dec800970c6fb5f135835/master/pass/00-square-michelle-obama-masterchef.jpg",
            gpa: 4,
            email: "michelle@whitehouse.gov"
        })
    ]);
    console.log("Students created");

    await students[0].setCampus(campuses[0]);
    await students[1].setCampus(campuses[1]);
    await students[2].setCampus(campuses[1]);
    await students[3].setCampus(campuses[2]);
    await students[4].setCampus(campuses[0]);

}

module.exports = seedDatabase;
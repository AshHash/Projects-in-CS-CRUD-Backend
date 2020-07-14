const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Student = require('../models/Student')

// Route to get all students
router.get('/', async(req, res, next) => {
    Student.findAll()
        .then(students => {
            console.log(students);
            res.sendStatus(200);
        })
        .catch(err => console.log(err), next);
});

// Route to get student by id
router.get('/:id', async(req, res, next) => {
    const { id } = req.params;
    try {
        const target = await Student.findByPk(id);
        res.status(200).json(target);
    } catch (err) {
        next(err);
        console.log(console.log(err));
    }
});

// Add a student
router.post('/add', async(req, res, next) => {

    let { firstName, lastName, imageUrl, email, gpa, campusId } = data;

    // Insert into table
    Student.create({
            firstName,
            lastName,
            imageUrl,
            email,
            gpa,
            campusId,
        })
        .then(() => res.redirect('/students/id'))
        .catch(err => console.log(err));
});

module.exports = router;
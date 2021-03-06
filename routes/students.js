const express = require('express');
const router = express.Router();
const { Student } = require('../database/models');

//routes for the requests

/* GET REQUEST */

router.get('/', function(req, res, next) {
    Student.findAll()
        .then(students => res.status(200).json(students))
        .catch(err => next(err));
});

/* POST REQUEST */

router.post('/', function(req, res, next) {
    let newStudent = req.body;
    Student.create(req.body)
        .then(createdStudent => res.status(200).json(createdStudent))
        .catch(err => next(err));
})

/* PUT REQUEST */

router.put('/:id', function(req, res, next) {
    Student.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(students => res.status(200).json(students))
        .catch(err => next(err))
})

/* DELETE REQUEST */

router.delete('/:id', function(req, res, next) {
    Student.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.status(200).json("Deleted a student!"))
        .catch(err => next(err));
});

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
const express = require('express');
const router = express.Router();
const { Campus } = require('../database/models');

router.get('/', function(req, res, next) {
    Campus.findAll()
        .then(campuses => res.status(200).json(campuses))
        .catch(err => next(err))
});

router.post('/', function(req, res, next) {
    let newCampus = req.body;
    Campus.create(req.body)
        .then(campuses => res.status(200).json(campuses))
        .catch(err => next(err))
})

router.put('/:id', function(req, res, next) {
    Campus.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then(campuses => res.status(200).json(campuses))
        .catch(err => next(err))
})

router.delete('/:id', function(req, res, next) {
    Campus.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(campuses => res.status(200).json(campuses))
        .catch(err => next(err))
})

// Export our router, so that it can be imported to construct our apiRouter;
module.exports = router;
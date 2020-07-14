const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Campus = require('../models/Campus')


// Get list of campuses
router.get('/', async(req, res, next) => {
    Campus.findAll()
        .then(campuses => {
            res.render('campuses', {
                campuses
            });
            res.sendStatus(200);
        })
        .catch(err => console.log(err));
});

// Add a campus
router.get('/add', async(req, res, next) => {
    const data = {
        name: 'Brooklyn College',
        imageUrl: 'https://pbs.twimg.com/profile_images/1278402779099381760/clT2fi2b_400x400.jpg',
        address: 'Somewhere in Brooklyn',
        description: 'At Brooklyn College, we offer more than 170 rich and challenging academic programs that equip students with a global outlook and the expertise to thrive in their chosen careers.'
    }

    let { name, imageUrl, address, description } = data;

    // Insert into table
    Campus.create({
            name,
            imageUrl,
            address,
            description
        })
        .then(() => res.redirect('/campuses'))
        .catch(err => console.log(err));
})
module.exports = router;
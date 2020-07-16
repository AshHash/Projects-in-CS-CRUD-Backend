const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //need for enabling post and put requests
const apiRouter = require('./routes/index.js'); //routes for requests
const db = require('./database'); //our database

const seedDatabase = require('./utilities/seedDatabase.js'); //function for filling the database with values
const createLocalDatabase = require('./utilities/createLocalDatabase'); //function for creating the database if not set up yet

//syncing the server with the database.
//if the database already exists, just connect to it. otherwise, create a new database and fill it with default values
const sync = async() => {
    try {
        await db.sync({ force: false });
    } catch (err) {
        if (err.name === 'SequelizeConnectionError') {
            await createLocalDatabase();
            await db.sync({ force: true });
            await seedDatabase();
        } else {
            console.log(err);
        }
    }
}

//allowing cors
const utils = async() => {
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', "*");
        next();
    });

    //Enable post and put requests
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use("/api", apiRouter);

    app.listen(4200, () => {
        console.log(`Server is running on PORT 4200`);
    })
}

const start = async() => {
    await sync();
    await utils();
}

start();
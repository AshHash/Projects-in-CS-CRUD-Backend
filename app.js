const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/index.js')
const db = require('./database');
const seedDatabase = require('./utilities/seedDatabase.js');


db.sync({ force: true }).then(async () => {
    seedDatabase();

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
    
    app.listen(4200, ()=>{
        console.log(`Server is running on PORT 4200`);
    })
});
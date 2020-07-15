const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/index.js')
const db = require('./database');

const seedDatabase = require('./utilities/seedDatabase.js');
const createLocalDatabase = require('./utilities/createLocalDatabase')

const sync = async() => {
    console.log('As a reminder, the forced synchronization option is on');
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

//function for restarting the server using a child process. used for debugging
// const restart = () =>{
//     process.on("exit", function () {
//         require("child_process").spawn(process.argv.shift(), process.argv, {
//             cwd: process.cwd(),
//             detached : true,
//             stdio: "inherit"
//         });
//     });
//     process.exit();
// }

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
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();

// Handlebars
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// app.set('view engine', 'handlebars');

// Body parser
app.use(bodyParser.urlencoded({ extended: false }))

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => res.send('INDEX'));

// Routes
app.use('/campuses', require('./routes/campuses'));
app.use('/students', require('./routes/students'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Database
const db = require('./config/database')

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))
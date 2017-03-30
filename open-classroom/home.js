// Comes packaged initially
const path = require('path');
// Routing
const express = require('express');
const mongoose = require('mongoose');
// Allows us to make request to api from different domain name
const cors = require('cors');
// Parses incoming requests and grabs the data
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/database');


// Connect location of database
mongoose.connect(config.database);

// Check to see if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database'+config.database);
})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected');
})

const home = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

// Make route public so any domain can access it
home.use(cors());

// Set static location (what is seen first)
home.use(express.static(path.join(__dirname, 'client')));

// Body Parser Middleware
home.use(bodyParser.json());

// Passport Middleware
home.use(passport.initialize());
home.use(passport.session());
require('./config/passport')(passport);

home.use('/users', users);

// Index route
home.get('/', (req, res) => {
    res.send('Hello World')
});

// Takes a port and starts up server
home.listen(port, () => {
    console.log('Server started on port '+port);
})
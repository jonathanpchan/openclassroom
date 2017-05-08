// Comes packaged initially
const path = require('path');
// Require for routing
const express = require('express');
// Require to interact with our database
const mongoose = require('mongoose');
// Allows us to make request to api from different domain name
const cors = require('cors');
// Parses incoming requests and grabs the data
const bodyParser = require('body-parser');
// Require for password encryption and decryption
const passport = require('passport');
// Require to know where we are getting our data from
const config = require('./config/database');
// Require for routing
const app = express();

// Requires users and buildings from routes folder
const users = require('./routes/users');
const buildings = require('./routes/buildings');

// Connect to database location
mongoose.connect(config.database);

// Check to see if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database'+config.database);
})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected');
})

// Port Number
// const port = 3000; // For testing
const port = process.env.PORT; // For Deployment

// Make route public so any domain can access it
app.use(cors());

// Set static location (what is seen first)
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
// require the config file's passport which specifies authentication
require('./config/passport')(passport);

// 
app.use('/users', users);
app.use('/buildings', buildings);

// Index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
});

// Direct our homepage to be public/index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Takes a port and starts up server
app.listen(port, () => {
    console.log('Server started on port '+port);
})

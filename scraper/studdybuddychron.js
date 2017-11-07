const mongoose = require('mongoose');
const um = require('../models/user');
const us = mongoose.model('User', um.schema)
const classes = require('../models/course');
const CS = mongoose.model('Courses', classes.CS.Schema);
var config = require('../config/database');
const request = require('request')


//mongoose.Promise = global.Promise;
mongoose.connect(config.database);
// Check to see if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database');})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected:');})

function closecon(){mongoose.connection.close(function() {
    console.log('Disconnected from database'); })}  



function match(){

}

//for chron
//check is changed
// just sum it all??
//match. how to deal with same id??  concat emails alphabetically and hash
//reset is changed
//route to retrieve a users matches?? store matches for earch section in user model not study budy
closecon()

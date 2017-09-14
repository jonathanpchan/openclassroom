
const mongoose = require('mongoose');
const users = require('../models/user');
var config = require('../config/database');


mongoose.connect(config.database);
// Check to see if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected:');
})

users.collection.insert({

    "name" : "deezdsds", 
    "email" : "bofabofa2@bofa.com", 
    "username" : "bofabofa", 
    "password" : "$2a$10$UheBIbtgYHwCYUCUghw3Se01xDlvyfDZg/TTvuoQpnO4aBCkTf4VW", 
    "__v" : 0, 
    "schedule" : [
        {
            "name" : "COUN 644D", 
            "sec" : "3718", 
            "days" : "Tu", 
            "location" : "AS-230", 
            "st" : 960, 
            "et" : 1080
        }, 
        {
            "name" : "CECS 100", 
            "sec" : "3778", 
            "days" : "Mon", 
            "location" : "ECS-130", 
            "st" : 960, 
            "et" : 1080
        }
    ]
    
});

mongoose.connection.close(function() {
    console.log('Disconnected from database'); })
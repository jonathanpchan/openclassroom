/*
syed hussain, csulb, cecs 491
*/
test = true // turn this to false to see all errors (should be flase in general)
var fs = require('fs');
var cheerio = require('cheerio');
// Be explicit at its location
var mongoose = require('mongoose');
var config = require('../config/database');

var arr = []

function insertToDB(){
    //const building = require('..\open-classroom\models\building');
    // Connect location of database
    //mongoose.set('debug', true)
    mongoose.connect(config.database);
    // Check to see if connected to database
    mongoose.connection.on('connected', () => {
        console.log('Connected to database');
    })
    // Check to see if connection failed
    mongoose.connection.on('error', () => {
        console.log('Database not connected:');
    })

    // Require building model to access add function
    const openrooms = require('../models/openrooms');
    // Grab the schema used by said model
    const ors = mongoose.model('OpenRooms', openrooms.ORS.schema);
    ors.collection.drop()

    var fullDBArr = [
        {
            building : "First",
            day : 0,
            rooms : [
                {
                    name : "100",
                    times : [
                        {  
                            st : 0,
                            et : 1000
                        },
                        {
                            st : 500,
                            et : 1000
                        }
                    ]
                },
                {
                    name : "101",
                    times : [
                        {  
                            st : 250,
                            et : 1000
                        },
                        {
                            st : 750,
                            et : 1000
                        }
                    ]
                }
            ]
        },
        {
            building : "Second",
            day : 0,
            rooms : [
                {
                    name : "100",
                    times : [
                        {  
                            st : 3,
                            et : 1000
                        },
                        {
                            st : 501,
                            et : 1000
                        }
                    ]
                },
                {
                    name : "200",
                    times : [
                        {  
                            st : 251,
                            et : 1000
                        },
                        {
                            st : 751,
                            et : 1000
                        }
                    ]
                }
            ]
        },
        {
            building : "Third",
            day : 1,
            rooms : [
                {
                    name : "100",
                    times : [
                        {  
                            st : 200,
                            et : 1000
                        },
                        {
                            st : 300,
                            et : 1000
                        }
                    ]
                },
                {
                    name : "101",
                    times : [
                        {  
                            st : 400,
                            et : 1000
                        },
                        {
                            st : 600,
                            et : 1000
                        }
                    ]
                }
            ]
        }
    ]

    ors.collection.insert(fullDBArr)

    // Close the database
    mongoose.connection.close(function() {
        console.log('Disconnected from database');
    })
}   

insertToDB();
var mongoose = require('mongoose');
var config = require('../config/database');

function insertToDB(){
    // Connect location of database
    mongoose.connect(config.database);
    // Check to see if connected to database
    mongoose.connection.on('connected', () => {
        console.log('Connected to database');
    })
    // Check to see if connection failed
    mongoose.connection.on('error', () => {
        console.log('Database not connected:');
    })

    // Require open-building model to access add function
    const openrooms = require('../models/open-building');
    // Grab the schema used by said model
    const obs = mongoose.model('OpenBuilding', openrooms.OBS.schema);
    // Drop collection before adding
    obs.collection.drop()

    var openBuildings = [
        {
            name : "AS",
            day : "Monday",
            rooms : [
                {
                    name : "100",
                    class : [
                        {  
                            st : 0,
                            et : 100
                        },
                        {  
                            st : 200,
                            et : 300
                        },
                        {  
                            st : 400,
                            et : 500
                        },
                        {  
                            st : 600,
                            et : 700
                        },
                        {  
                            st : 800,
                            et : 900
                        }
                    ]
                },
                {
                    name : "200",
                    class : [
                        {  
                            st : 0,
                            et : 1000
                        },
                        {  
                            st : 500,
                            et : 1000
                        }
                    ]
                }
            ]
        },
        {
            name : "AS",
            day : "Tuesday",
            rooms : [
                {
                    name : "100",
                    class : [
                        {  
                            st : 100,
                            et : 200
                        },
                        {  
                            st : 300,
                            et : 400
                        },
                        {  
                            st : 500,
                            et : 600
                        },
                        {  
                            st : 700,
                            et : 800
                        },
                        {  
                            st : 900,
                            et : 1000
                        }
                    ]
                },
                {
                    name : "200",
                    class : [
                        {  
                            st : 500,
                            et : 700
                        },
                        {  
                            st : 800,
                            et : 1000
                        }
                    ]
                }
            ]
        },
        {
            name : "VEC",
            day : "Monday",
            rooms : [
                {
                    name : "291",
                    class : [
                        {  
                            st : 0,
                            et : 500
                        },
                        {  
                            st : 700,
                            et : 1000
                        }
                    ]
                },
                {
                    name : "343",
                    class : [
                        {  
                            st : 200,
                            et : 500
                        },
                        {  
                            st : 800,
                            et : 1000
                        }
                    ]
                }
            ]
        }
    ]

    obs.collection.insert(openBuildings)

    // Close the database
    mongoose.connection.close(function() {
        console.log('Disconnected from database');
    })
}   

insertToDB();
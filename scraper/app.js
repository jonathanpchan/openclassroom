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
    console.log('Connected to database');
})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected:');
})

// var rs = require('../models/roomInfo');
// var ri = mongoose.model('RoomInfo', rs.schema )
//
// var test = function(callback){
//     ri.findOne({$and: [{"building": "AS" }, {"room": "243"}]}, callback)
//     //ri.findOne({building: 'AS'},callback)
// }
//     test((err,x) => {console.log(x)})
//
// um.collection.insert({
//
//     "name" : "tom willis",
//     "email" : "tom@bofa.com",
//     "username" : "getfunck",
//     "password" : "$2a$10$UheBIbtgYHwCYUCUghw3Se01xDlvyfDZg/TTvuoQpnO4aBCkTf4VW",
//     "__v" : 0,
//     "schedule" : [
//         {
//             "name" : "ENG 5001",
//             "sec" : "3718",
//             "days" : "Tu",
//             "location" : "AS-230",
//             "st" : 960,
//             "et" : 1080
//         },
//         {
//             "name" : "CECS 100",
//             "sec" : "3778",
//             "days" : "Mon",
//             "location" : "ECS-130",
//             "st" : 960,
//             "et" : 1080
//         }
//     ]
//
// });

// us.find({email: "bofabofa2@bofa.com"}, {schedule: 1, _id:0}, (err, cbb) => {
//     console.log(cbb);
// })

//1. Run this to insert all ricks and mortys first then comment out after done
for (ii = 0; ii < 25; ii++) {
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    um.collection.insert({
        "name": "Rick",
        "lName": `Sanchez ${ii}`,
        "email": `RS${ii}@gmail.com`,
        "username": `RS${ii}`,
        "password": "$2a$10$NFWL3skztxANl0KujATZTOcLmnaClCkPf6pqW4HT0GUknkhI3sDx.",
        "regdate": utc,
        "emailVerified": true,
        "schedule": [],
        "__v" : 0
    });

    um.collection.insert({
        "name": "Morty",
        "lName": `Smith${ii}`,
        "email": `MS${ii}@gmail.com`,
        "username": `MS${ii}`,
        "password": "$2a$10$NFWL3skztxANl0KujATZTOcLmnaClCkPf6pqW4HT0GUknkhI3sDx.",
        "regdate": utc,
        "emailVerified": true,
        "schedule": [],
        "__v" : 0
    });
}

//2. After commenting 1. out, Run this to populate all ricks and mortys schedules with classes
// for(jj = 0; jj < 25; jj++){
//     var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
//     var arr = [8696, 3988, 1241, 6014, 9171, 5904, 3891, 6695, 9575, 3848]
//     var arr2 = [];
//     var z = -1;
//
//     for(kk = 0; kk < 5; kk++) {
//         while (z == -1) {
//             var c = Math.floor(Math.random() * (10 - 0));
//             if (arr2.indexOf(arr[c]) == -1) {
//                 arr2.push(arr[c]);
//                 z = 1;
//             }
//         }
//         request.post(
//             'http://localhost:3000/users/schedule/add',
//             {json: {email: `MS${jj}@gmail.com`, crsID: arr2[kk]}},
//             function (error, response, body) {
//                 if (!error && response.statusCode == 200) {
//                     console.log(body)
//                 }
//                 if (error) {
//                     console.log("!: " + error)
//                 }
//                 console.log("?: " + response)
//             }
//         )
//         var z = -1;
//     }
// }

mongoose.connection.close(function() {
    console.log('Disconnected from database'); })


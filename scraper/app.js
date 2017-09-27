
const mongoose = require('mongoose');
const um = require('../models/user');
const us = mongoose.model('User', um.schema)
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

um.collection.insert({

    "name" : "tom willis", 
    "email" : "tom@bofa.com", 
    "username" : "getfunck", 
    "password" : "$2a$10$UheBIbtgYHwCYUCUghw3Se01xDlvyfDZg/TTvuoQpnO4aBCkTf4VW", 
    "__v" : 0, 
    "schedule" : [
        {
            "name" : "ENG 5001", 
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
// us.find({email: "bofabofa2@bofa.com"}, {schedule: 1, _id:0}, (err, cbb) => {
//     console.log(cbb);
// })

/**
module.exports.addScheduleItem = function(eMail, u, callback) {
    User.findOneAndUpdate(
        {"email": eMail},
        {
            $push: {
                "schedule": {
                    "name": u.name,
                    "sec": u.sec,
                    "days": u.days,
                    "location": u.location,
                    "st": u.st,
                    "et": u.et
                }
            }
        }, {new: true}, function(err) {
            if (err) {
                console.log("Something wrong when updating data!");
            }

            User.find({ supportTicket: st }).toArray(function (err, docs) {
                callback(docs);
            });
            use.schedule.sort(helperSort)

            User.find({email: eMail}, {schedule: 1, _id:0}, callback);
        })
};
**/

var x = [];
function helperSort(a,b) {
    //console.log(a.time + " - " + b.time + " = " )
    return (a.sh - b.sh)
}

us.find({email: "jon@random.com"}).toArray(function (err, docs) {
    x = docs;
}).exec(x.sort(helperSort))

mongoose.connection.close(function() {
    console.log('Disconnected from database'); })
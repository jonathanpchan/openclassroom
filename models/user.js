const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const build = require('../models/building');
const CS = mongoose.model('Class', build.CS.Schema);
const Schema = mongoose.Schema;
const classes = require('../models/course');
const CSS = mongoose.model('Courses', classes.CS.Schema);
var ObjectId = require('mongodb').ObjectID;

// User Schema
const UserSchema = mongoose.Schema({
  name: { type: String },
  lName: { type: String},
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  regdate: { type: Date, required: true },
  emailVerified: {type: Boolean, required: false},
  schedule: {type: [CS.schema] }

});

// Export User Schema
const User = module.exports = mongoose.model('User', UserSchema);

// Get the user based on id
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

// Get the user based on username
module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

// Get the user based on email
module.exports.getUserByEmail = function(email, callback) {
  const query = {email: email}
  User.findOne(query, callback);
}

// Gen random key to use for password
module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

// Compare password for validation
module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
/* */
module.exports.getUserSchedule = function (username, callback){
  //console.log(User.findOne({email: "bofabofa2@bofa.com"}, {schedule: 1, _id:0}))
  //callback(null, User.findOne({email: "bofabofa2@bofa.com"}, {schedule: 1, _id:0}))
  User.find({email: username}, {schedule: 1, _id:0}, callback);
}

/**
// add should sort at end, idk if it needs to return the new list, prolly
module.exports.addScheduleItem = function(eMail, u, callback) {

   /** var u =
        {
            name: "ENG 5001",
            sec: "3718",
            days: "Tu",
            location: "AS-230",
            st: 960,
            et: 1080
        };

    User.findOneAndUpdate(
        {"email": eMail,
         "schedule.name": objID},
        {
            $set: {
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
            User.find({email: eMail}, {schedule: 1, _id:0}, callback);
        }
    )
};
**/

module.exports.addScheduleItem = function(eMail, crsID, callback) {

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
        sort(eMail, setSchedule)
        User.find({email: eMail}, {schedule: 1, _id:0}, callback);
    })
};

//editClass finds an objectID and then changes that objectID's contents by a modified class object.
//for front end; was thinking that user clicks edit button -> edit button triggers page to save objectID of course object
// -> user edits all fields -> submit sends all fields back as an object with objectID as well.
module.exports.editScheduleItem = function(eMail, objID, u, callback) {
    User.findOneAndUpdate(
        {
            "email": eMail,
            "schedule._id": ObjectId(objID)},
        {
            $set:
                {
                    "schedule.$.name": u.name,
                    "schedule.$.sec": u.sec,
                    "schedule.$.days": u.days,
                    "schedule.$.location": u.location,
                    "schedule.$.st": u.st,
                    "schedule.$.et": u.et
                }
        }, {new: true}, function(err) {
            if (err) {
                console.log("Something wrong when updating data!");
            }
            //User.find({schedule: {"_id": ObjectId(objID)}}, {schedule: 1, _id:0}, callback);
            //User.find({email: eMail}, {schedule: 1, _id:0}, callback);
        }
    )
}


//Helper functions to help sort schedule
function helperSort(a,b) {
    //console.log(a.time + " - " + b.time + " = " )
    return (a.sh - b.sh)
}

function sort(eMail, callback) {
    User.find({email: eMail}, function(err, cursor) {
        var arr = cursor[0].schedule.sort(helperSort)
        //console.log(arr);
        callback(arr, eMail);
        //console.log(typeof(cursor[0].schedule))
    });
}

function setSchedule(x, eMail){
    console.log(x);
    User.findOneAndUpdate(
        {"email": eMail},
        {
            $set: {
                "schedule": x
            }
        }, {new: true}, function(err) {
            if (err) {
                console.log("Something wrong when updating data!");
            }
        });
    /**
    us.find({email: eMail}, function (err, cursor) {
        console.log(cursor[0].schedule);
    });
     **/
}

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
// DO NOT DELETE. THIS IS NECESSARY FOR GET REQUESTS.
const build = require('../models/building');
//const classes = require('../models/course');
//const CS = mongoose.model('Courses', classes.CS.Schema);
var ObjectId = require('mongodb').ObjectID;


// Classes Schema
const classesSchema = mongoose.Schema({
    name: { type: String },
    num : { type: String },
    sec : { type: String },
    day :  { type: String },
    time : { type: String },
    location : { type: String },
    prof : { type: String }
})

// User Schema
const UserSchema = mongoose.Schema({
  name: { type: String },
  lName: { type: String},
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  regdate: { type: Date, required: true },
  emailVerified: {type: Boolean, required: false},
    schedFinal : {type: Boolean, default: false},
  schedule: { type: [classesSchema] },
  buddyList: {type: [{
      user: {type: String},
      email: {type: String}
  }]}
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
    if(candidatePassword != null) {
        bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
            if(err) throw err;
        callback(null, isMatch);
    })
    } else {
        callback(null, null);
    }
}

function compPassword(candidatePW, hash, callback) {
    if(candidatePW != null) {
        bcrypt.compare(candidatePW, hash, (err, isMatch) => {
            callback(null, isMatch);
        })
    } else {
        callback(null, null);
    }
}

/**
 *
 * @param email
 * @param pw
 * @param callback
 */
module.exports.changePW = function(eMail, oldpw, newpw, callback) {
    User.find({email : eMail}, {password: 1, _id:0}, (err, pw) => {
        console.log(pw[0].password);
        bcrypt.genSalt(10, (err, salt) => {
            compPassword(oldpw, pw[0].password, (err, isMatch) => {
                if(isMatch) {
                    bcrypt.hash(newpw, salt, (err, hash) => {
                        User.findOneAndUpdate({"email": eMail},
                        {
                            $set: {
                                "password": hash
                            }
                        }, {new: true}, function (err, doc) {
                            if (err) {
                                console.log("Something went wrong when changing the pw!!");
                            } else {
                                callback(null, "Password was successfully changed!")
                            }
                        })
                    })
                } else {
                    callback(null, null)
                }
            })
        })
    })
}

/**
 *
 * @param email
 * @param callback
 */
// Get schedule based on email
module.exports.getSchedule = function(email, callback) {
  User.findOne({ email : email }, {schedule : 1, _id : 0}, callback);
}

/**
 *
 * @param eMail
 * @param crsID
 * @param callback
 */
// Add schedule item based on email and section #
module.exports.addScheduleItem = function(eMail, crsID, callback) {
    CS.find({'courses.sec' : crsID}, {'name' : 1, 'courses.$' : 1}, (err, x) => {
        User.findOneAndUpdate(
        {"email" : eMail, "schedule.sec" : {$ne: crsID}},
        {
            $addToSet: {
                "schedule": {
                    "name": x[0].name,
                    "num" : x[0].courses[0].num,
                    "sec" : x[0].courses[0].sec,
                    "day" :  x[0].courses[0].day,
                    "time" : x[0].courses[0].time,
                    "location" : x[0].courses[0].location,
                    "prof" : x[0].courses[0].prof
                    }
                }
        }, {new: true}, function(err, doc) {
            if (err) {
                console.log("Something went wrong when adding a class!");
            }
            if (doc == null) {
                console.log("Class is already added.")
                User.find({ _id: null }, {email: 0, schedule: 0}, callback)
            }
            else { 
                User.find({email: eMail}, {schedule: 1, _id:0}, callback);
            }
        })
    })
};

// Delete section number based on email and section #
/**
 *
 * @param eMail
 * @param crsID
 * @param callback
 */
module.exports.deleteScheduleItem = function(eMail, crsID, callback) {
    User.findOneAndUpdate(
        {"email": eMail}, {
            $pull : {
                "schedule" : { sec : crsID }
            }
        }, {new: true}, function(err) {
            if (err) {
                console.log("Something went wrong when deleting a class!");
            }
            User.find({email: eMail}, {schedule: 1, _id:0}, callback);
        })
};

/**Adds a user to user's buddylist
 *
 * @param eMail1 user's buddylist
 * @param eMail2 user being added
 * @param user username of new buddy
 * @param chatID chatRoom of two users
 * @param callback route call
 */
module.exports.addBuddy = function( eMail1, eMail2, user, callback) {
    console.log("ADD BUDDY"+eMail1)
    User.findOneAndUpdate(
        {"email" : eMail1, "buddyList.user" : {$ne : user}},
        {
            $addToSet: {
                "buddyList": {
                    "user": user,
                    "email": eMail2
                }
            }
        }, {new: true}, function(err, doc) {
            if (err) {
                callback("Something went wrong when adding a student!")
                //console.log("Something went wrong when adding a student!");
            }
            if (doc == null) {
                console.log(doc);
                callback(null)
            }
            else {
                User.find({email: eMail1}, {buddyList: 1, _id:0}, callback);
            }
        })
}

/**Gets user's buddylist
 *
 * @param eMail user's eMail to retrieve data
 * @param callback route call
 */
module.exports.getBuddyList = function(eMail, callback) {
    User.find({email : eMail}, {buddyList: 1, _id:0}, callback)
}

/**Gets flag to see if user has finalized schedule or not
 *
 * @param eMail
 * @param callback
 */
module.exports.getSchedFlag = function(eMail, callback) {
    User.find({email :eMail}, {schedFinal: 1, _id: 0}, callback)
}


// /** depricated
//  *
//  * @param eMail
//  * @param callback
//  */
// module.exports.unfinalizeSched = function(eMail, callback) {
//     User.findOneAndUpdate(
//         {email : eMail},
//         {
//             $set: {
//                 "schedFinal": false
//             }
//         }, {new: true}, function(err, doc) {
//            if (err) {
//                 callback(null, null)
//             } else {
//                User.find({email :eMail}, {schedFinal: 1, _id: 0}, callback)
//             }
//         }
//     )
// }
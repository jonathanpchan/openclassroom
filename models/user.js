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

/**Finds the user based by ID
 *
 * @param id ID of user
 * @param callback Returns user object
 */
module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

/**Finds user based on Username
 *
 * @param username Username identifier
 * @param callback Returns user object
 */
module.exports.getUserByUsername = function(username, callback){
  const query = {username: username}
  User.findOne(query, callback);
}

/**Finds user based on E-mail
 *
 * @param email E-mail of user
 * @param callback Returns user object
 */
module.exports.getUserByEmail = function(email, callback) {
  const query = {email: email}
  User.findOne(query, callback);
}

/**Generates a hashed password for the user and saves user object into the database
 *
 * @param newUser User being added
 * @param callback Returns to function
 */
module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

/**Compares the password to database password for validation
 *
 * @param candidatePassword Password being compared
 * @param hash Hash code
 * @param callback Returns a boolean to the function
 */
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

/**Refer to above. This is used within the class in changePW
 *
 * @param candidatePW
 * @param hash
 * @param callback
 */
function compPassword(candidatePW, hash, callback) {
    if(candidatePW != null) {
        bcrypt.compare(candidatePW, hash, (err, isMatch) => {
            callback(null, isMatch);
        })
    } else {
        callback(null, null);
    }
}

/**Changes the user's password to access the website
 *
 * @param eMail E-mail to access user's data
 * @param oldpw Password used for authentication before changing
 * @param newpw New password to be changed
 * @param callback Returns success message if succeeded, else null to callback function
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

/**Returns the user's schedule
 *
 * @param email E-mail to access user's data
 * @param callback Returns the user's schedule to callback function
 */
// Get schedule based on email
module.exports.getSchedule = function(email, callback) {
  User.findOne({ email : email }, {schedule : 1, _id : 0}, callback);
}

/**Adds a course to a user's schedule
 *
 * @param eMail E-mail to grab the user's information
 * @param crsID Course ID to be added
 * @param callback Returns the schedule if succeeded to the callback function
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

/**Deletes a course from the user's schedule
 *
 * @param eMail E-mail to access user's information
 * @param crsID Course ID
 * @param callback Returns schedule back to callback function
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
 * @param callback Returns buddylist to callback function
 */
module.exports.getBuddyList = function(eMail, callback) {
    User.find({email : eMail}, {buddyList: 1, _id:0}, callback)
}

/**Gets flag to see if user has finalized schedule or not
 *
 * @param eMail E-mail to access user's data
 * @param callback Returns schedule flag to callback function
 */
module.exports.getSchedFlag = function(eMail, callback) {
    User.find({email :eMail}, {schedFinal: 1, _id: 0}, callback)
}
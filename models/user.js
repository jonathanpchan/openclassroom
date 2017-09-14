const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const build = require('../models/building');
const CS = mongoose.model('Class', build.CS.Schema);
const Schema = mongoose.Schema;

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

// add should sort at end, idk if it needs to return the new list, prolly
//module.exports.addScheduleItem = function (class, )

//edit should specify an array position and an entire class section object
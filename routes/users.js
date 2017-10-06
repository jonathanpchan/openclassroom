const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const mongoose = require('mongoose');
const Course = require('../models/course');
const CS = mongoose.model('Courses', Course.CS.Schema);


// Register POST request
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  	regdate: req.body.regdate
  });

  User.getUserByEmail(newUser.email, (err, user) => {
    // If invalid email
    if(err) {
      return res.json({success: false, msg:'Failed to register user'});
    }
    // If email not in database
    if(!user) {
      // Add the user
      User.addUser(newUser, (err, user) => {
        // If invalid user
        if(err){
          return res.json({success: false, msg:'Failed to register user'});
        } else {
          // Return when valid user
          return res.json({success: true, msg:'User registered'});
        }
      });
    } else {
      // Email is in database
      return res.json({success: false, msg:'Invalid Email.'});
    }
  })
});

// Authenticate POST request
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  // If user exists, check for password
  User.getUserByEmail(email, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    // Check the password to make sure it matches for the user
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      // If it matches, add more fields and return that data
      if(isMatch){
        // https://stackoverflow.com/questions/46115993/mean-app-error-expected-object 
        const token = jwt.sign({data : user}, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else { // Else return a wrong password response
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Get User Schedule based on email
router.post('/schedule', (req, res) =>{
  if (req.body.email) {
    User.getSchedule(req.body.email, (err, sched) =>{
      return res.json(sched);
    })
  }
  else {
    return res.json({error: "Bad request"});
  }
})

// Add a schedule item based on email and section #
router.post('/addschedule', (req, res) => { //request and response
  if(req.body.email){ //check if valid request
      User.addScheduleItem(req.body.email, req.body.crsID, (err, courses) => {
        return res.json(courses);
      })
    }
    else{
      return res.json({error: "Bad Request"}); //bad request
    }
})

// Get all course names
router.get('/courses/names', (req, res, next) => {
  Course.getCourseNames((err, Courses) => {
    if(err) throw err;
    if(Courses == "") { //if Courses is empty return false
      return res.json({success: false, msg: 'Courses not found'});
    }
    else { //Otherwise will return names of courses
      return res.json({success: true, Courses});
    }
  });
});

// Get all courses for cache
router.get('/courses', (req, res, next) => {
  Course.getCourses((err, Courses) => {
    if(err) throw err;
    if(Courses == "") { //if Courses is empty return false
      return res.json({success: false, msg: 'Courses not found'});
    }
    else { //Otherwise will all course documents
      return res.json({success: true, Courses});
    }
  });
});

module.exports = router;
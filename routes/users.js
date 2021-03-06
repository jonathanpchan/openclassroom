const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const mongoose = require('mongoose');
const Course = require('../models/course');
const CS = mongoose.model('Courses', Course.CS.Schema);

module.exports = router;

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
    if (err) {
      return res.json({success: false, msg:'Failed to register user'});
    }
    // If email not in database
    if (!user) {
      // Add the user
      User.addUser(newUser, (err, user) => {
        // If invalid user
        if (err){
          return res.json({success: false, msg:'Failed to register user'});
        }
        else {
          // Return when valid user
          return res.json({success: true, msg:'User registered'});
        }
      });
    } 
    else {
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
    if (err) throw err;
    if (!user){
      return res.json({success: false, msg: 'User not found'});
    }

    // Check the password to make sure it matches for the user
    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      // If it matches, add more fields and return that data
      if (isMatch){
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
      } 
      else { // Else return a wrong password response
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// POST request to change the user's password
router.post('/settings/pw', (req, res) => {
  if(req.body.oldpw) {
    User.changePW(req.body.email, req.body.oldpw, req.body.newpw, (err, resp) => {
      if(resp != null) {
        return res.json({success: true, msg: resp});
      } else {
        return res.json({success: false, msg: "Wrong password"})
      }
    })
  }else {
    return res.json({error: "Bad request"});
  }
})

// POST request to get User Schedule based on email
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

// POST request to add a schedule item based on email and section #
router.post('/schedule/add', (req, res) => { //request and response
  if (req.body.email){ //check if valid request
    User.addScheduleItem(req.body.email, req.body.crsID, (err, courses) => {
      return res.json(courses);
    })
  }
  else {
    return res.json({error: "Bad Request"}); //bad request
  }
})

// POST request to delete a schedule item based on email and section #
router.post('/schedule/delete', (req, res) => { //request and response
  if (req.body.email){ //check if valid request
    User.deleteScheduleItem(req.body.email, req.body.crsID, (err, courses) => {
      return res.json(courses);
    })
  }
  else {
      return res.json({error: "Bad Request"}); //bad request
  }
})

// GET request getting all the documents
router.get('/courses/names', (req, res, next) => {
  Course.getCourseNames((err, Courses) => {
    if (err) throw err;
    if (Courses == "") { //if Courses is empty return false
      return res.json({success: false, msg: 'Courses not found'});
    }
    else { //Otherwise will return names of courses
      return res.json({success: true, Courses});
    }
  });
});

// GET request to return the courses offered at CSULB
router.get('/courses', (req, res, next) => {
  Course.getCourses((err, Courses) => {
    if (err) throw err;
    if (Courses == "") { //if Courses is empty return false
      return res.json({success: false, msg: 'Courses not found'});
    }
    else { //Otherwise will all course documents
      return res.json({success: true, Courses});
    }
  });
});

// POST request to add a user to a buddylist
router.post('/buddylist/add', (req, res) => {
    User.addBuddy(req.body.email1, req.body.email2, req.body.user, (err, buddies) => {
    if (buddies == null) {
      return res.json({success: false, msg: 'User already added.'})
    } else {
      return res.json({success: true, buddies})
    }
  })
})

// POST request to return a user's buddylist
router.post('/buddylist', (req, res) => {
  User.getBuddyList(req.body.email, (err, buddies) => {
      return res.json(buddies);
  })
})

// POST request to return a user's finalized schedule flag
router.post('/final', (req, res) =>{
  User.getSchedFlag(req.body.email, (err, flag) => {
    if (err) throw err;
    return res.json(flag)
  })
});

// POST request to unfinalize the user's schedule
router.post('/settings/unfinalize', (req, res) => {
  User.unfinalizeSched(req.body.email, (err, resp) => {
    if(resp == null){
      return res.json({success: false, msg: 'Something went wrong.'})
    } else {
      return res.json({success: true, msg: resp})
    }
  })
})
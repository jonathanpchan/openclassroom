const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');

// Register
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

// Authenticate
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
        const token = jwt.sign(user, config.secret, {
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

// Profile
router.get('/schedule', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

module.exports = router;

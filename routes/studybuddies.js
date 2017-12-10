const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const mongoose = require('mongoose');
const StudyBuddy = require('../models/StudyBuddyModel');
const CS = mongoose.model('StudyBuddy', StudyBuddy.Schema);

module.exports = router;

// POST requst to add a user to the study buddy feature
router.post('/add', (req, res) => { //request and response
    if (req.body.email) { //check if valid request
        StudyBuddy.addUser(req.body.email, (err, msg) => {
            return res.json(msg);
        })
    } 
    else {
        return res.json({error: "Bad Request"});
    }//bad request
})

// POST request to remove a user from the study buddy feature
router.post('/remove', (req, res) => { //request and response
    if (req.body.email) { //check if valid request
    StudyBuddy.removeUser(req.body.email, (err, msg) => {
        if(msg != null) {
        return res.json({success: true, msg});
        } else {
            return res.json({success: false})
        }
    })
    } else {
        return res.json({error: "Bad Request"});
    }//bad request
})

// POST request to return the user's study buddies
router.post('/get', (req, res) => {
    if (req.body.email){
        StudyBuddy.getBuddies(req.body.email, (err, x) => {
            if (err) {
                return res.json({error: err})
            }
            else
                return res.json(x)
        })
    }
    else {
        return res.json({error: "Malformatted Request"})
    }
})
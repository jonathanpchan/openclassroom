const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const mongoose = require('mongoose');
const StudyBuddy = require('../models/StudyBuddyModel');
const CS = mongoose.model('Classroom', StudyBuddy.CS.Schema);
module.exports = router;

router.post('/add', (req, res) => { //request and response
    if(req.body.email) { //check if valid request
        StudyBuddy.addUser(req.body.email, (err, msg) => {
            return res.json(msg);
        })
    } else {
        return res.json({error: "Bad Request"});
    }//bad request
})

router.post('/remove', (req, res) => { //request and response
    if(req.body.email) { //check if valid request
    StudyBuddy.removeUser(req.body.email, (err, msg) => {
        return res.json(msg);
})
} else {
    return res.json({error: "Bad Request"});
}//bad request
})
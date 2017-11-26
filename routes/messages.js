const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Message = require('../models/message');
const mongoose = require('mongoose');

module.exports = router;

//create a new messages object using two user identifiers
router.post('/create', (req, res) =>{
    if (req.body.user_1 != null && req.body.user_2 != null) {
        Message.createNewChat(req.body.user_1, req.body.user_2, (err, msgs) => {
        return res.json(msgs);
    })} 
    else {
        return res.json({error: "Bad request"});
    }
})

//send a message to a messages object using ID, sender, and msg content
router.post('/send', (req, res) =>{
    if (req.body.sender != null ) {
    Message.saveMessage(req.body.sender, req.body.msg, req.body.ID, (err, msgs) => {
        return res.json(msgs);
    })} 
    else {
        return res.json({error: "Bad request"});
    }
})

//POST request to get messages between two users using ID of messages object
router.post('/get', (req, res) =>{
    if (req.body.ID != null) {
    Message.getMessages(req.body.ID, (err, msgs) => {
        return res.json(msgs);
    })} 
    else {
        return res.json({error: "Bad request"});
    }
})
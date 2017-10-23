const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Message = require('../models/message');
const mongoose = require('mongoose');
module.exports = router;


router.post('/create', (req, res) =>{
    if (req.body.user_1 != null && req.body.user_2 != null) {
        Message.createNewChat(req.body.user_1, req.body.user_2, (err, msgs) => {
        return res.json(msgs);
    })} else {
        return res.json({error: "Bad request"});
    }
})


router.post('/send', (req, res) =>{
    if (req.body.sender != null ) {
        console.log(req.body.sender);
    Message.saveMessage(req.body.sender, req.body.msg, req.body.ID, (err, msgs) => {
        return res.json(msgs);
})} else {
    return res.json({error: "Bad request"});
}
})
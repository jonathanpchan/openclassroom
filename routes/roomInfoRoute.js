const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const RI = require('../models/roomInfo');
const mongoose = require('mongoose');

router.post('/getRoomInfo', (req,res) => {
    //use email to poulate uVote
    building = req.body.building;
    room = req.body.room;
    email = req.body.email;
    //if (building != null && room != null)
    RI.getRoomInfo(building, room, (err, info) => {
        return res.json(info);
    })
   
})

//router.post('/addVote', )
module.exports = router;
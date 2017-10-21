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

router.post('/addVote', (req,res) => {
    building = req.body.building;
    room = req.body.room;
    item = req.body.item;
    email = req.body.email;
    if (req.body.nvote == null) return res.json("Error: Missing Vote")
    if (req.body.email == null) return res.json("Error: Missing Email")
    nvote = req.body.nvote>0?1:-1
    pos = req.body.pos;
    if (pos != null) {
        RI.addVote(building, room, item, pos, email, nvote, (err, x) => {
            return res.json(err?err:x);
        })
    }
    else{
        RI.addVote(building, room, item, email, nvote, (err, x) => {
            return res.json(err?err:x);
        })
    }
   
   
})

router.post('/addComment', (req,res) => {
    //return res.json("thans for comment")
    building = req.body.building;
    room = req.body.room;
    email = req.body.email;
    comment = req.body.comment;
    if (building == null || room == null || email == null || comment == null)
        return res.json("Malformatted Request")
    RI.addComment(building, room, email, comment, (err,x) => {
        return res.json(x.n>0?"comment added":"Nothing found")
    })
    
})
//router.post('/addVote', )
module.exports = router;
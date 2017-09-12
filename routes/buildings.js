const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const OpenBuilding = require('../models/open-building');
const mongoose = require('mongoose');

//What to display when getting a building
// router.get('/', function(req, res) {
//     mongoose.model('OpenBuilding').find(function(err, buildings){
//       res.send(buildings);
//     });
// });

router.post('/', (req, res, next) => {
  const name = req.body.name;
  const day = req.body.day;

  OpenBuilding.getBuildingsByDay(name,day,(err, OpenBuilding) => {
    if(err) throw err;
    if(OpenBuilding == "") { //if OpenBuilding is empty return false
      return res.json({success: false, msg: 'OpenBuilding not found'});
    }    else { //Otherwise will return a building and day?
      return res.json({success: true, OpenBuilding});
    }});
  });

// router.get('/building', passport.authenticate('jwt', {session:false}), (req, res, next) => {
//   res.json({building: req.building});
//});router.get()

module.exports = router;

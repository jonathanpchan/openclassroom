const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Building = require('../models/building');
const mongoose = require('mongoose');

// Post request based on building name
router.post('/', (req, res, next) => {
  const name = req.body.name;
  const day = req.body.day;
  Building.getBuildings(name,(err, OpenBuilding) => {
    if(err) throw err;
    if(OpenBuilding == "") { //if OpenBuilding is empty return false
      return res.json({success: false, msg: 'OpenBuilding not found'});
    }    
    else { //Otherwise will return a building and day?
      return res.json({success: true, OpenBuilding});
    }
  });
});

// Get request getting all the documents
router.get('/', (req, res, next) => {
  Building.getAll((err, OpenBuilding) => {
    if(err) throw err;
    if(OpenBuilding == "") { //if OpenBuilding is empty return false
      return res.json({success: false, msg: 'OpenBuilding not found'});
    }
    else { //Otherwise will return a building and day?
      return res.json({success: true, OpenBuilding});
    }
  });
});

// router.get('/building', passport.authenticate('jwt', {session:false}), (req, res, next) => {
//   res.json({building: req.building});
//});router.get()

module.exports = router;

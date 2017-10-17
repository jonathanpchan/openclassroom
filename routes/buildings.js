const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Building = require('../models/building');
const mongoose = require('mongoose');

// Post name to get a building
router.post('/', (req, res, next) => {
  const name = req.body.name;
  const day = req.body.day;
  Building.getBuilding(name,(err, OpenBuilding) => {
    if(err) throw err;
    if(OpenBuilding == "") { //if OpenBuilding is empty return false
      return res.json({success: false, msg: 'OpenBuilding not found'});
    }    
    else { //Otherwise will return a building and day?
      return res.json({success: true, OpenBuilding});
    }
  });
});

// Get all buildings
router.get('/', (req, res, next) => {
  Building.getBuildings((err, OpenBuilding) => {
    if(err) throw err;
    if(OpenBuilding == "") { //if OpenBuilding is empty return false
      return res.json({success: false, msg: 'OpenBuilding not found'});
    }
    else { //Otherwise will return a building and day?
      return res.json({success: true, OpenBuilding});
    }
  });
});

// Get all building names
router.get('/names', (req, res, next) => {
  Building.getBuildingNames((err, OpenBuilding) => {
    if(err) throw err;
    if(OpenBuilding == "") { //if OpenBuilding is empty return false
      return res.json({success: false, msg: 'OpenBuilding not found'});
    }
    else { // Otherwise will building names
      return res.json({success: true, OpenBuilding});
    }
  });
});

// router.get('/building', passport.authenticate('jwt', {session:false}), (req, res, next) => {
//   res.json({building: req.building});
//});router.get()

module.exports = router;

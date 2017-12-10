const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Building = require('../models/building');
const mongoose = require('mongoose');

module.exports = router;

// POST request to return a building object
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

// GET request to return all building objects
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

// GET request to return the names of all buildings
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
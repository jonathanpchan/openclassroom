const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Building = require('../models/building');
const mongoose = require('mongoose');



//queried
// router.get('/', function(req, res) {
//     mongoose.model('Building').find({ name: 'ECS' }).find(function(err, buildings){
//       res.send(buildings);
//     });
// });

//ALL data
router.get('/', function(req, res) {
    mongoose.model('Building').find(function(err, buildings){
      res.send(buildings);
    });
});


// router.get('/building', passport.authenticate('jwt', {session:false}), (req, res, next) => {
//   res.json({building: req.building});
//});

module.exports = router;

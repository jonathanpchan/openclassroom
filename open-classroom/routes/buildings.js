const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
// jonn-Testing
// const assert = require('assert');
// const Building = require('../models/building');
// const mongoose = require('mongoose');
// //var template = require('../views/template-main');

// const app = express();

// router.get('/', function (req, res) {
//   mongoose.model('Building').find(function(err, buildings){
//     console.log(buildings);
//     res.send({'buildings' : buildings})});
//   });

const Building = require('../models/building');
const mongoose = require('mongoose');



//queried
// router.get('/', function(req, res) {
//     mongoose.model('Building').find({ name: 'ECS' }).find(function(err, buildings){
//       res.send(buildings);
//     });
// });

router.get('/', function(req, res) {
    mongoose.model('Building').find(function(err, buildings){
      res.send(buildings);
    });
});


// router.get('/building', passport.authenticate('jwt', {session:false}), (req, res, next) => {
//   res.json({building: req.building});
//});router.get()

module.exports = router;
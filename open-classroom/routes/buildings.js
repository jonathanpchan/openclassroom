const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const assert = require('assert');
const Building = require('../models/building');
const mongoose = require('mongoose');
//var template = require('../views/template-main');

const app = express();

router.get('/', function (req, res) {
  mongoose.model('Building').find(function(err, buildings){
    console.log(buildings);
    res.send({'buildings' : buildings})});
  });

module.exports = router;

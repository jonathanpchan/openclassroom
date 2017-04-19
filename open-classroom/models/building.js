const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Building Schema
const BuildingSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  room: {
      type: String,
      required: true
  },
  start: {
    type: Number,
    required: true
  },
  end: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Buildings', BuildingSchema);

module.exports.addBuilding = function(newBuilding) {
    newBuilding.save();
}
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Building Schema
const ClassSectionSchema = mongoose.Schema({
  name : {type: String},
  sec :  {type: String},
  days :  {type: String},
  location :  {type: String},
  st :  {type: Number},
  et :  {type: Number}
});

const RoomSchema = mongoose.Schema({
  name : {type: Number},
  mon : {type: [ClassSectionSchema]},
  tue : {type: [ClassSectionSchema]},
  wed : {type: [ClassSectionSchema]},
  thu : {type: [ClassSectionSchema]}
});

const BuildingSchema = mongoose.Schema({
  name: {type: String},
  rooms: {type: [RoomSchema] }
});

//building schema
BS = module.exports = mongoose.model('Building', BuildingSchema );
//rooms schema
RS = module.exports = mongoose.model('Room', RoomSchema );

module.exports = {
  BS: BS,
  RS: RS
}

module.exports.addBuilding = function(newBuilding) {
    newBuilding.save();
}

module.exports.getBuildings = function(buildings, callback) {
    const query = {name: BuldingSchema.name}
    BS.find(query,callback);
  }

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Class Section Schema
const ClassSectionSchema = mongoose.Schema({
  name : {type: String},
  sec :  {type: String},
  days :  {type: String},
  location :  {type: String},
  st :  {type: Number},
  et :  {type: Number}
});

// Room Schema (Mon -> Thurs)
const RoomSchema = mongoose.Schema({
  name : {type: String},
  mon : {type: [ClassSectionSchema]},
  tue : {type: [ClassSectionSchema]},
  wed : {type: [ClassSectionSchema]},
  thu : {type: [ClassSectionSchema]},
  //open times
  omon : {type: [ClassSectionSchema]},
  otue : {type: [ClassSectionSchema]},
  owed : {type: [ClassSectionSchema]},
  othu : {type: [ClassSectionSchema]}
});

// Building Schema
const BuildingSchema = mongoose.Schema({
  name: {type: String},
  rooms: {type: [RoomSchema] }
});

// Export Building schema
BS = module.exports = mongoose.model('Building', BuildingSchema );
// Export Room SChema
RS = module.exports = mongoose.model('Room', RoomSchema );
// Export ClassSection schema
CS = module.exports = mongoose.model('Class', ClassSectionSchema);

// Export BS as BS and RS as RS, CSS as CSS
module.exports = {
  CS: CS,
  BS: BS,
  RS: RS
}

// Add a new building by saving
module.exports.addBuilding = function(newBuilding) {
    newBuilding.save();
}

// Gets the Buildings based on BuildingSchema name
module.exports.getBuildings = function(buildings, callback) {
    const query = {name: BuldingSchema.name}
    BS.find(query,callback).sort({name: BuildingSchema.name});
  }

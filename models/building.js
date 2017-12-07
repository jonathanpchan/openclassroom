const mongoose = require('mongoose');
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

// Export BS as BS and RS as RS, CS as CS
module.exports = {
  CS: CS,
  BS: BS,
  RS: RS
}

/**Add a new building by saving to the database
 *
 * @param newBuilding building object
 */
module.exports.addBuilding = function(newBuilding) {
    newBuilding.save();
}

/**Gets specific building based on name,
 *
 * @param Name building name
 * @param callback returns building object to callback function
 */
module.exports.getBuilding = function(Name, callback) {
  BS.find({name: Name}, {_id : 0}).exec(callback);
}

/**Gets all building object in database
 *
 * @param callback returns entire building object to callback function
 */
module.exports.getBuildings = function(callback) {
  BS.find({}, {_id : 0}).exec(callback);
}

/**Gets all building names in database
 *
 * @param callback returns building names to callback function
 */
module.exports.getBuildingNames = function(callback) {
  BS.find({},{_id : 0, rooms : 0}).sort({ name : 1 }).exec(callback);
}
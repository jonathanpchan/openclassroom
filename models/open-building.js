const mongoose = require('mongoose');
const config = require('../config/database');

// Open Class Schema
const OpenClassSchema = mongoose.Schema({
    st : { type : Number },
    et : { type : Number }
  });

// Open Room Schema
const OpenRoomSchema = mongoose.Schema({
  name : { type: String },
  class : { type : [OpenClassSchema] }
});

// Open Building Schema
const OpenBuildingSchema = mongoose.Schema({
  name : { type: String },
  day : { type: String },
  rooms : { type: [OpenRoomSchema] }
});

// Export OpenBuilding Schema
OBS = module.exports = mongoose.model('OpenBuilding', OpenBuildingSchema );
// Export OpenRoom Schema
ORS = module.exports = mongoose.model('OpenRoom', OpenRoomSchema );
// Export OpenClass Schema
OCS = module.exports = mongoose.model('OpenClass', OpenClassSchema );

// Export OBS as OBS, ORS as ORS, and OCS as OCS
module.exports = {
  OBS : OBS,
  ORS : ORS,
  OCS : OCS
}

/**Gets the builing by day and name
 *
 * @param Name Name of building
 * @param Day Day of the week
 * @param callback returns the building's classroom times to callback function
 */
module.exports.getBuildingsByDay = function(Name, Day, callback) {
  OBS.find({$and : [{name: Name}, {day: Day}]}, {_id : 0}).exec(callback);
}

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

module.exports.getBuildings = function(name, day, callback) {
    // const query = {name: name}
    // OBS.find(query).exec(callback);
    console.log(name);
    console.log(day);


    OBS.find({$and : [{name:"AS"}, {day: "Monday"}]}).exec(callback);
  }

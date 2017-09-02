const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const RoomSchema = mongoose.Schema({
    name : {type: String},
    times : {
        st : {type : Number },
        et : {type : Number }
    }
});

// Class Section Schema
const OpenRoomsSchema = mongoose.Schema({
  building : {type: String},
  day : {type: Number},
  rooms : {type: [RoomSchema]},
});

// Export OpenRooms schema
ORS = module.exports = mongoose.model('OpenRooms', OpenRoomsSchema );
// Export Room SChema
RS = module.exports = mongoose.model('Room', RoomSchema );

// Export ORS as ORS and RS as RS
module.exports = {
  ORS: ORS,
  RS: RS
}

// Add a new OpenRoom by saving
module.exports.addOpenRoom = function(newOpenRoom) {
    newOpenRoom.save();
}

// Gets the Buildings based on BuildingSchema name
module.exports.getOpenRooms = function(openROoms, callback) {
    const query = {name: ORS.building}
    ORS.find(query,callback).sort({name: ORS.building});
  }
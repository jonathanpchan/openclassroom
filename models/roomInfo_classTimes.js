const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


//Comments for each room's page schema
const RoomInfoOpenTimes = mongoose.Schema({
    building: {type: String},
    room: {type: String},
    mon : [{
        st : {type: Number},
        et : {type: Number},
        uVote: {type: Number},
        dVote: {type: Number},
        tVote: {type: Number}
    }],
    tue : [{
        st : {type: Number},
        et : {type: Number},
        uVote: {type: Number},
        dVote: {type: Number},
        tVote: {type: Number}
    }],
    wed : [{
        st : {type: Number},
        et : {type: Number},
        uVote: {type: Number},
        dVote: {type: Number},
        tVote: {type: Number}
    }],
    thu : [{
        st : {type: Number},
        et : {type: Number},
        uVote: {type: Number},
        dVote: {type: Number},
        tVote: {type: Number}
    }],
})


// Export room info schema
RIOT = module.exports = mongoose.model('RoomInfoOpenTimes', RoomInfoOpenTimes );
// Export comments Schema
//UC = module.exports = mongoose.model('Comments', CommentsSchema ); //UC = user comments

//Add comment function
//module.exports.addComment = function(){

//}



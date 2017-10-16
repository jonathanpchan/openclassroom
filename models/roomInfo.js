const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Vote object to track users votes on certain fields
const Vote = mongoose.Schema({
    vote: {type: Number},
    user: {type: String}
})

//Comments for each room's page schema
const CommentsSchema = mongoose.Schema({
    username: {type: String},
    uVote: {type: Number},
    dVote: {type: Number},
    votes: {type: [Vote]},
    content: {type: String},
    date:{type: Date},
})

//Room Information schema
const RoomInfoSchema = mongoose.Schema({
    building: {type: String},
    room: {type: String},
    hasOutlets: {
        uVote: {type: Number},
        dVote: {type: Number},
        votes: {type: [Vote]},
    },
    whiteBoard: {
        uVote: {type: Number},
        dVote: {type: Number},
        votes: {type: [Vote]},
    },
    comments: {type: [CommentsSchema] },
    mon : [{
        st : {type: Number},
        et : {type: Number},
        uVote: {type: Number},
        dVote: {type: Number},
        votes: {type: [Vote]}
    }],
    tue : [{
        st : {type: Number},
        et : {type: Number},
        uVote: {type: Number},
        dVote: {type: Number},
        votes: {type: [Vote]}
    }],
    wed : [{
        st : {type: Number},
        et : {type: Number},
        uVote: {type: Number},
        dVote: {type: Number},
        votes: {type: [Vote]}
    }],
    thu : [{
        st : {type: Number},
        et : {type: Number},
        uVote: {type: Number},
        dVote: {type: Number},
        votes: {type: [Vote]}
    }]
});

// Export room info schema
RI = module.exports = mongoose.model('RoomInfo', RoomInfoSchema );
// Export comments Schema
UC = module.exports = mongoose.model('Comments', CommentsSchema ); //UC = user comments

module.exports = {
  RI: RI,
  UC: UC
}


// return room info, no need to passalong votes array but do pass requested users vote
module.exports.getRoomInfo = function(building, room, callback){
    RI.findOne({$and: [{"building": building }, {"room": room}]}, callback)
}

//Add comment function on any fields
module.exports.addVote = function(building, room, email, item, vval, callback){
    console.log("hello")
}

module.exports.addVote = function(building, room, email, day, item, vval, callback){
    console.log("hello2")
}

module.exports.addComment = function(building, room, uname, comment, callback){
    RI.update(
        {$and: [{"building": building }, {"room": room}]},
        {$push: {"comments": {
            username: uname,
            uVote: 0,
            dVote: 0,
            content: comment,
            date: Date.now()
        }}}
    ).exec()
}





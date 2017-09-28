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
    /** NEEDS TO BE UPDATED W/ NEW SCHEMA
    validRoom:{ //need to discuss how to make this property for multiple open times
        uVote: {type: Number},
        dVote: {type: Number},
        votes: {type: [Vote]},
    },
     **/
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
    comments: {type: [UserComments] },
});

// Export room info schema
RI = module.exports = mongoose.model('RoomInfo', RoomInfoSchema );
// Export comments Schema
UC = module.exports = mongoose.model('Comments', CommentsSchema ); //UC = user comments

//Add comment function
module.exports.addComment = function(){

}



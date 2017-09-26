const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Comments for each room's page schema
const CommentsSchema = mongoose.Schema({
    poster: {type: String},
    uVote: {type: Number},
    dVote: {type: Number},
    content: {type: String},
    date:{type: Date},
    tags:{ //thinking of "tags" that user can check when posting a comment
        stFriendly: {type: Boolean},
        isClean: {type: Boolean},
        isSmelly: {type: Boolean},
        hasAC: {type: Boolean},
    }
})

//Room Information schema
const RoomInfoSchema = mongoose.Schema({
    validRoom:{ //need to discuss how to make this property for multiple open times
        uVote: {type: Number},
        dVote: {type: Number}
    },
    hasOutlets: {
        uVote: {type: Number},
        dVote: {type: Number}
    },
    whiteBoard: {type: Boolean}, //upvote downvote?? T/F for now
    size: {
        sml: {type: Number}, //voting for each size
        med: {type: Number},
        lrg: {type: Number}
    },
    comments: {type: [UserComments] },
    roomImg: {type: String}
});

// Export room info schema
RI = module.exports = mongoose.model('RoomInfo', RoomInfoSchema );
// Export comments Schema
UC = module.exports = mongoose.model('Comments', CommentsSchema ); //UC = user comments

//Add comment function
module.exports.addComment = function(){

}



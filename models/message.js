const mongoose = require('mongoose');
const config = require('../config/database');
var ObjectId = require('mongodb').ObjectID;

//Schema for a message object
const MessageSchema = new mongoose.Schema({
    sender : {type : String, required : true},
    timeStamp : {type : Date},
    message : {type : String, required : true}
})


//Schema for message chat room
//Schema uses 2 identifiers (two users), an ID, and message array
const MessagesSchema = new mongoose.Schema({
    user_1 : {type : String},
    user_2 : {type : String},
    _id : {type : String},
    messages : {type : [MessageSchema]}
})

MSG = module.exports = mongoose.model('Messages', MessagesSchema);
ME = module.exports = mongoose.model('Message', MessageSchema);

//Export the schemas
module.exports = {
    MSG : MSG,
    ME : ME
}

//Create a new user chat with two users and return _ID of the chat
/**
 *
 * @param user_1
 * @param user_2
 * @param callback
 */
module.exports.createNewChat = function(user_1, user_2, callback){
    MSG.findOne(
        {$or: [{$and: [{"user_1": user_1 }, {"user_2": user_2}]}, {$and: [{"user_1": user_2 }, {"user_2": user_1}]}]}, (err, x) => {
        if( x == null ){
            MSG.collection.insert(
                {
                    user_1 : user_1,
                    user_2 : user_2,
                    messages : []
                }
            )
        }
    MSG.find({$or: [{$and: [{"user_1": user_1 }, {"user_2": user_2}]}, {$and: [{"user_1": user_2 }, {"user_2": user_1}]}]}, { _id : 1}, callback)
    }).limit(1)
}

/**Add a comment to a message array inside a message chatroom
 *
 * @param sender The user sending the message
 * @param msg The message content
 * @param ID Chatroom identifier
 * @param callback callback function return message chain
 */
module.exports.saveMessage = function(sender, msg, ID, callback) {
    MSG.collection.findOneAndUpdate(
        {"_id": new ObjectId(ID)},
        {
            $push: {
                "messages":
                    {
                        sender : sender,
                        timeStamp : new Date(),
                        message : msg
                    }
            }
        }, {new: true}, function (err, doc) {
            if (err) {
                callback(null, null)
            }
            ME.find({ "_id": ObjectId(ID) }, {messages: 1}, callback)
        }
    )
}

/**Gets the messages array from a chatroom object
 *
 * @param ID Chatroom ID to find in database
 * @param callback Return message array to callback function
 */
module.exports.getMessages = function(ID, callback) {
    if(ID != null) {
        ME.find({"_id": ObjectId(ID)}, {messages: 1}, callback)
    }
}
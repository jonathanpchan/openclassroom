const mongoose = require('mongoose');
const config = require('../config/database');
var ObjectId = require('mongodb').ObjectID;

const MessageSchema = new mongoose.Schema({
    sender : {type : String, required : true},
    timeStamp : {type : Date},
    message : {type : String, required : true}
})

const MessagesSchema = new mongoose.Schema({
    user_1 : {type : String},
    user_2 : {type : String},
    _id : {type : String},
    messages : {type : [MessageSchema]}
})

MSG = module.exports = mongoose.model('Messages', MessagesSchema);
ME = module.exports = mongoose.model('Message', MessageSchema);

module.exports = {
    MSG : MSG,
    ME : ME
}

//Create a new user chat with two users and return _ID of the chat
module.exports.createNewChat = function(user_1, user_2, callback){
    console.log("createNewChat");
    MSG.findOne(
        {$or: [{$and: [{"user_1": user_1 }, {"user_2": user_2}]}, {$and: [{"user_1": user_2 }, {"user_2": user_1}]}]}, (err, x) => {
        console.log(x);
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

//add comment to chat array between 2 users
module.exports.saveMessage = function(sender, msg, ID, callback) {
    console.log("saveMessage");
    console.log(ID);
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
                console.log("Something went wrong!");
            }
            console.log(doc)
            ME.find({ "_id": ObjectId(ID) }, {messages: 1}, callback)
        })
}

//Get array of messages from messages array
module.exports.getMessages = function(ID, callback) {
    if(ID != null) {
        ME.find({"_id": ObjectId(ID)}, {messages: 1}, callback)
    }
}
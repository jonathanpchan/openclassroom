const mongoose = require('mongoose');
var config = require('../config/database');
const Messages = require('../models/message');
const MSG = mongoose.model('Messages', Messages.MSG.schema);
mongoose.set('debug', true)

var ObjectId = require('mongodb').ObjectID;




//mongoose.Promise = global.Promise;
mongoose.connect(config.database);
// Check to see if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected:');
})

// MSG.collection.drop();
//
// MSG.collection.insert(
//     {
//         user_1 : "mlem",
//         user_2 : "mlem2",
//         messages : []
//     }
// )
//
// MSG.find({$and: [{"user_1": "mlem" }, {"user_2": "mlem2"}]}, { _id : 1}, (err, x) => {
//     console.log(x);
// })



var dt = new Date();
var utcDate = dt.toUTCString();

// MSG.collection.findOneAndUpdate(
//     {"_id": ObjectId("59ed759a003ba8110920cb5c")},
//     {
//         $push: {
//             "messages":
//                 {
//
//                     sender: "mlem",
//                     timeStamp: new Date(),
//                     message: "hello"
//                 }
//         }
//     }, {new: true}, function (err, doc) {
//         if (err) {
//             console.log("Something went wrong!");
//         }
//         console.log(doc)
//     })

MSG.collection.findOne({"_id": ObjectId("59ed759a003ba8110920cb5c")}, {messages : 1}, (err, x) => {
    console.log(x);
})
const mongoose = require('mongoose');
var config = require('../config/database');

const rs = require('../models/roomInfo');
const rr = mongoose.model('roomInfo', rs.RI.schema);
const rr2 = mongoose.model('roomInfo', rs.RI.schema);
mongoose.set('debug', true)




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

// var test = function(callback){
//         rr.findOne({$and: [{"building": "AS" }, {"room": "243"}]}, {"comments":1}, callback)
//         //rr.findOne({building: 'AS'},callback)
//     }
//         test((err,x) => {console.log(x)})

// rs.getRoomInfo("AS", "243", (err,x) => {
//     console.log(x)
// })

var x = "comments"
var pos = ".0"
var proj = ".votes"

var y = "comments.0.votes"
rr.update(
    {$and: [{"building": "AS" }, {"room": "243"}]},
    {$push: {[y] : {
        vote: 1,
        email: "test"
    }}}
).exec()

// rr.update(
//     {$and: [{"building": "AS" }, {"room": "243"}]},
//     {$push: {"whiteBoard.votes": {
//         vote: 1,
//         user: "tom4"
//     }}}
// ).exec()

// rr.update(
//     {$and: [{"building": "AS" }, {"room": "243"}]},
//     {$inc: {"whiteBoard.uVote" : 1}},
// ).exec()
var i =0;
// rr.update(
//     {$and: [{"building": "AS" }, {"room": "243"}]},
//     {$pull: {
//         "whiteBoard.votes" : {user : "tom2"}
//     }
// }
// ).exec()




//rs.addComment("AS", "243", "gayfurry", "comment", callback => {})

//get votes arr
//check if not there => 
// if there and match or if there and no match
//update count
//return msg

//refactor for email everywhere in model
//all routes

var building = "AS";
var room = "243"
var item = 'whiteBoard';
var uname = "tom002";
var nvote = 1;


// //dont change these
// var found = -1;
// var projection = item + '.votes'
// var holder = item
// //dont touch here .. danger!!!

// rr.findOne({$and: [{"building": building }, {"room": room}]}, {[projection] :1}, (err, x) => {
//    //console.log(x.whiteBoard.votes[0].user)
//    for (let i in x[item]['votes']){
//       // console.log(i)
//        if (x[item].votes[i].email == uname){
//            found = i;
//            console.log("found")
//            break;
//        }
//    }
//    // if user is not found
//    if (found == -1){
//        console.log("inserting new")
//        //add to votes arr
//        rr.update(
//             {$and: [{"building": building}, {"room": room}]},
//             {$push: {[projection]: {
//                 vote: nvote,
//                 email: uname
//             }}},
//             (err, x) => {
//                 //update count
//                 holder += nvote > 0 ? '.uVote' : '.dVote'
//                 console.log("holder is: " + holder)
//                 rr.update(
//                         {$and: [{"building": building}, {"room": room}]},
//                         {$inc: {[holder] : 1}},
//                         (err,x) => {
//                             mongoose.connection.close(function() {
//                                 console.log('Disconnected from database'); })
//                         }
//                     )
//             }
//         )
//    }

//    else {
//        var oldVote =  x[item].votes[found].vote
//        //remove old vote
//        rr.update(
//         {$and: [{"building": building }, {"room": room}]},
//         {$pull: {[projection] : {email: uname}}},
//         (err, x) => {

//             //add new vote
//             rr.update(
//                 {$and: [{"building": building }, {"room": room}]},
//                 {$push: {[projection]: {
//                     vote: nvote,
//                     email: uname
//                 }}},
//                 (err,x) => {
//                     //only if vote is different do we update count
//                     if (nvote != oldVote){
//                         console.log("non - matching vote")
//                         // dec one count and inc the other
//                         var uVoteInc = nvote > 0 ? 1 : -1
//                         var dVoteInc = - uVoteInc
//                         var item1 = item + ".uVote"
//                         var item2 = item + ".dVote"
//                         rr.update(
//                             {$and: [{"building": building }, {"room": room}]},
//                             {$inc: {[item1] : uVoteInc,[item2] : dVoteInc}},
//                             (err,x) => {
//                                 mongoose.connection.close(function() {
//                                     console.log('Disconnected from database'); })
//                             }
//                         )

//                     }
//                     else {mongoose.connection.close(function() {
//                         console.log('Disconnected from database'); })}
//                 })      
//         }
//        )  
//    }
// })






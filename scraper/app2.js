const mongoose = require('mongoose');
var config = require('../config/database');

const rs = require('../models/roomInfo');
const rr = mongoose.model('roomInfo', rs.RI.schema);
const rr2 = mongoose.model('roomInfo', rs.RI.schema);
mongoose.set('debug', true)

const StudyBuddy = require('../models/StudyBuddyModel');
const SB = mongoose.model('StudyBuddy', StudyBuddy.CS.Schema);



// //mongoose.Promise = global.Promise;
mongoose.connect(config.database);
// Check to see if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected:');
})

// SB.findById("5a07f4be660b859b7c181fbb", function(err,x) {
//     console.log(x.students[0].buddies)
// })
var strarr = ["hi", "bi", "die"]
var pos =0;
var item = "students." + pos +  ".buddies"
SB.findByIdAndUpdate("5a08f67a6389fb9fa070d902",
    //{$set: {[item] : [strarr]}},
    {$addToSet: 
        {[item] : {$each: strarr} }
    },
    (err, newdoc) => {
        console.log(newdoc.students[0].buddies)
    }
)


// function fillArr(arr, st, et) {
//     if (st < 8*60) st = 0
//     else st = st - 8*60
//     if (et > 20*60) et = 20*60 - 5
//     else et = et - 8*60 
//     for (var i =st/5; i < et/5; i++){
//         arr[i] = 0;
//     }
// }

// function helper(arr){
//     var retArr = new Array(144)
//     arr.forEach(function(elem) {
//         fillArr(retArr, elem.stimeInMin, elem.etimeInMin)
//     }, this)
//     for (var i =0; i < retArr.length; i++){
//         if (retArr[i] == undefined)
//         retArr[i] = 1;
//     }
//     return retArr;
// }

// var arr = [{stimeInMin: 8*60, etimeInMin: 9*60},{stimeInMin: 13*60, etimeInMin: 14*60},{stimeInMin: 19*60, etimeInMin: 20*60}]
// var arr2 = helper(arr)
// var hour = 7
// var minute =0;
// for (var i =0; i < arr2.length; i++){
//     if (i%12 == 0) hour += 1;
//     minute = i%12 * 5
//     console.log(i + " @ " + hour + ":" + minute + " == " + arr2[i])
// }

// var arr = [{s: 1, b: 2}, {s: 11, b: 22}, {s: 111, b: 222}]
// arr[0].f = 0;
// console.log(arr)




// var test = function(callback){
//         rr.findOne({$and: [{"building": "AS" }, {"room": "243"}]}, {"comments":1}, callback)
//         //rr.findOne({building: 'AS'},callback)
//     }
//         test((err,x) => {console.log(x)})

// rs.getRoomInfo("AS", "243", (err,x) => {
//     console.log(x)
// })

// var x = "comments"
// var pos = ".0"
// var proj = ".votes"

// var y = "comments.0.votes"
// rr.update(
//     {$and: [{"building": "AS" }, {"room": "243"}]},
//     {$push: {[y] : {
//         vote: 1,
//         email: "test"
//     }}}
// ).exec()

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
// var i =0;
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

// var building = "AS";
// var room = "243"
// var item = 'whiteBoard';
// var uname = "tom002";
// var nvote = 1;


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






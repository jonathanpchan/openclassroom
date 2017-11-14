const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//Vote object to track users votes on certain fields
const Vote = mongoose.Schema({
    vote: {type: Number},
    email: {type: String}
})

//Comments for each room's page schema
const CommentsSchema = mongoose.Schema({
    email: {type: String},
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
    RI.findOne({$and: [{"building": building }, {"room": room}]} ,{_id : 0}, callback)
}

//copy code
//check mongoose close
//make generic
//add case is beggining for two thins
//make routes
module.exports.addVote = function(building, room, item, uname, nvote, callback){
    var found = -1;
    var projection = item + '.votes'
    var holder = item

    RI.findOne({$and: [{"building": building }, {"room": room}]}, {[projection] :1}, (err, x) => {
        if (x == null) {
            callback("No such room or building")
            return
        } 
        if (x[item] == null) {
            callback("No such item")
            return
        }
    //console.log(x.whiteBoard.votes[0].user)
    for (let i in x[item]['votes']){
        // console.log(i)
        if (x[item].votes[i].email == uname){
            found = i;
            console.log("found")
            break;
        }
    }
    // if user is not found
    if (found == -1){
        console.log("inserting new")
        //add to votes arr
        RI.update(
                {$and: [{"building": building}, {"room": room}]},
                {$push: {[projection]: {
                    vote: nvote,
                    email: uname
                }}},
                (err, x) => {
                    //update count
                    holder += nvote > 0 ? '.uVote' : '.dVote'
                    console.log("holder is: " + holder)
                    RI.update(
                            {$and: [{"building": building}, {"room": room}]},
                            {$inc: {[holder] : 1}},
                            (err,x) => {callback(err, "Success! First Vote added")}
                        )
                }
            )
    }

    else {
        var oldVote =  x[item].votes[found].vote
        //remove old vote
        RI.update(
            {$and: [{"building": building }, {"room": room}]},
            {$pull: {[projection] : {email: uname}}},
            (err, x) => {

                //add new vote
                RI.update(
                    {$and: [{"building": building }, {"room": room}]},
                    {$push: {[projection]: {
                        vote: nvote,
                        email: uname
                    }}},
                    (err,x) => {
                        //only if vote is different do we update count
                        if (nvote != oldVote){
                            console.log("non - matching vote")
                            // dec one count and inc the other
                            var uVoteInc = nvote > 0 ? 1 : -1
                            var dVoteInc = - uVoteInc
                            var item1 = item + ".uVote"
                            var item2 = item + ".dVote"
                            RI.update(
                                {$and: [{"building": building }, {"room": room}]},
                                {$inc: {[item1] : uVoteInc,[item2] : dVoteInc}},
                                (err,x) => {callback(err, "Success! Vote Change")}
                            )

                        }
                        else {callback(err, "Success! Vote Updated")}
                    })      
            }
        )  
    }
    })
}

module.exports.addNestedVote = function(building, room, item, pos, uname, nvote, callback){
    //callback(null, "hello2")
    var found = -1;
    var projection = item + "." + pos + '.votes'
    var holder = item + "." + pos

    RI.findOne({$and: [{"building": building }, {"room": room}]}, (err, x) => {
        if (x == null) {
            callback("No such room or building")
            return
        } 
        if (x[item] == null) {
            callback("No such item")
            return
        }
        if (pos > x[item].length -1) {
            callback("Array out of bounds")
            return
        }
        
    //console.log(x.whiteBoard.votes[0].user)
    if((x[item][pos]['votes']).length > 0){
        for (let i in x[item][pos]['votes']){
            // console.log(i)
            if (x[item][pos].votes[i].email == uname){
                found = i;
                console.log("found")
                break;
            }
        }
    
    }
    
    // if user is not found
    if (found == -1){
        console.log("inserting new")
        //add to votes arr
        RI.update(
                {$and: [{"building": building}, {"room": room}]},
                {$push: {[projection]: {
                    vote: nvote,
                    email: uname
                }}},
                (err, x) => {
                    //update count
                    holder += nvote > 0 ? '.uVote' : '.dVote'
                    console.log("holder is: " + holder)
                    RI.update(
                            {$and: [{"building": building}, {"room": room}]},
                            {$inc: {[holder] : 1}},
                            (err,x) => {
                                callback(err, "Success! First Vote added")}
                        )
                }
            )
    }

    else {
        var oldVote =  x[item][pos].votes[found].vote
        //remove old vote
        RI.update(
            {$and: [{"building": building }, {"room": room}]},
            {$pull: {[projection] : {email: uname}}},
            (err, x) => {

                //add new vote
                RI.update(
                    {$and: [{"building": building }, {"room": room}]},
                    {$push: {[projection]: {
                        vote: nvote,
                        email: uname
                    }}},
                    (err,x) => {
                        //only if vote is different do we update count
                        if (nvote != oldVote){
                            console.log("non - matching vote")
                            // dec one count and inc the other
                            var uVoteInc = nvote > 0 ? 1 : -1
                            var dVoteInc = - uVoteInc
                            var item1 = holder + ".uVote"
                            var item2 = holder + ".dVote"
                            RI.update(
                                {$and: [{"building": building }, {"room": room}]},
                                {$inc: {[item1] : uVoteInc,[item2] : dVoteInc}},
                                (err,x) => {callback(err, "Success! Vote Change")}
                            )

                        }
                        else {callback(err, "Success! Vote Updated")}
                    })      
            }
        )  
    }
    })
}

module.exports.addComment = function(building, room, newEmail, comment, callback){
    RI.update(
        {$and: [{"building": building }, {"room": room}]},
        {$push: {"comments": {
            email: newEmail,
            uVote: 0,
            dVote: 0,
            content: comment,
            date: Date.now()
        }}},
        (callback)
    )
}

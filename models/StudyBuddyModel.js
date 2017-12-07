const mongoose = require('mongoose');
const config = require('../config/database');
const user = require('../models/user');
const us = mongoose.model('User', user.schema);

//Classroom data that each user has in the students array of ClassSchema
const BaseSched = new mongoose.Schema({
    num : {type: String},
    sec : {type: String}, 
    day : {type: String}, 
    time : {type: String}, 
    sTimeInMin : {type: Number},
    eTimeInMin : {type: Number},
    sh : {type: Number},
    room : {type: String}, 
    location : {type: String}, 
    prof : {type: String}, 
})

//Classroom schema that holds data regarding a class.
//isChanged is used to notify chron job
//Students array holds an array of users which holds their schedule based on days, and an array of buddies
const ClassSchema = new mongoose.Schema({
    teacher : {type: String},
    dept: {type: String},
    num: {type: String},
    sec : {type: String},
    students: [{
        user: {type: String},
        oMon: {type: [BaseSched]},
        oTue: {type: [BaseSched]},
        oWed: {type: [BaseSched]},
        oThu: {type: [BaseSched]},
        buddies: {type: [{chatRoomId: {type: String}, email: { type: String}, name: {type: String}}]}
    }],
    isChanged : {type: Boolean, default: false}
})

//Place schema in export variable
SB = module.exports = mongoose.model('StudyBuddy', ClassSchema );

//Export Schema
module.exports = {
    SB: SB
}

/**
 *
 * @param arr
 * @param callback
 */
function placeByDay(arr , callback){
    function helperSort(a,b) {
        //console.log(a.time + " - " + b.time + " = " )
        return (a.sh - b.sh)
    }
    function timeFix(item){
        //if (!item.time) return;
        var time = item.time;
        var period = time.substring(time.length - 2)
        var rawtime = time.substring(0, time.length - 2)
        var temp = rawtime.split('-');
        var start = temp[0];
        var end = temp[1];
        if (end == undefined){console.log(name)}
    
        temp = start.split(':')
        var sh = temp[0] 
        var sm = temp[1]
        temp = end.split(':')
        var eh = temp[0]
        var em = temp[1]
    
        if (sm == undefined)
            {sm = 00}
        if (em == undefined)
            {em = 00}
    
        sh = parseInt(sh)
        sm = parseInt(sm)
        eh = parseInt(eh)
        em = parseInt(em)
    
        if (period == "PM" && eh != 12){
            if (sh > eh){
                eh = eh + 12
            }
            else {
                sh = sh +12
                eh = eh + 12
            }
    
        }
        item.sh = sh
        item.stimeInMin = (sh * 60) + sm
        item.etimeInMin = (eh * 60) + em
        // WHY THE FUCKING FUCK FUCKING FUCKITTY FUCK FUCKING FUCK DID I HAVE TO DO THIS!!
        var temp = {name : item.name, num : item.num, sec : item.sec, day : item.day, time : item.time, location : item.location,
        prof : item.prof, sh : item.sh, stimeInMin : item.stimeInMin , etimeInMin : item.etimeInMin  }
        //console.log(temp)
        return temp
    }
    
    var arr2 = {omon: [], otue: [], owed: [], othu: []}
    //console.log(arr2)
    // arr.forEach(function(element) {
    //     element = timeFix(element)
    //     //console.log(element)
    // }, this);

    for (var i =0; i < arr.length; i++) {
        var t = timeFix(arr[i])
        if (t.day == "MWF"){
            arr2.omon.push(t)
            arr2.owed.push(t)
        }
        else if (t.day == "MW"){
            arr2.omon.push(t)
            arr2.owed.push(t)
        }
        else if (t.day == "TuTh"){
            arr2.otue.push(t)
            arr2.othu.push(t)
        }
        else if (t.day == "M"){
           arr2.omon.push(t)
        }
        else if (t.day == "Tu"){
            arr2.otue.push(t)
        }
        else if (t.day == "W"){
            arr2.owed.push(t)
        }
        else if (t.day == "Th"){
            arr2.othu.push(t)
        }

        else{
            //console.log("ERROR: " + t.name + " on " + t.day)
        }
    }
    arr2.omon.sort(helperSort)
    arr2.otue.sort(helperSort)
    arr2.owed.sort(helperSort)
    arr2.othu.sort(helperSort)
    //console.log(arr2.othu)
    callback(arr2)
}

/**Adds a user to all sections listed in his or her finalized schedule. Sets finalized schedule flag to true.
 *
 * @param eMail E-mail to grab user's schedule
 * @param callback Returns a success message if all classes were successfully added
 */
module.exports.addUser = function(eMail, callback) {
    //open times algorithm goes here
    us.findOne({ email : eMail }, {schedule : 1, _id : 0}, (err, doc) => {
        var sched = doc.schedule
        var brk = false;
        setFinalizedFlag(eMail, true, filler => {
            placeByDay(sched, otObj => {
                //query each class in studybuddymodel (foreach)
                var counter = 0
                sched.forEach(function (crs) {
                    if(!brk) {
                        //add to classroom
                        SB.findOneAndUpdate(
                            {"sec": crs.sec, "students.user": {$ne: filler}},
                            {
                                $addToSet: {
                                    "students": {
                                        user: filler,
                                        oMon: otObj.omon,
                                        oTue: otObj.otue,
                                        oWed: otObj.owed,
                                        oThu: otObj.othu,
                                        buddies: []
                                    }
                                }
                            }, {new: true}, function (err, doc) {
                                if (err) {
                                    callback(null, "Something went wrong when adding a student!")
                                }
                                if (doc == null) {
                                    brk = true;
                                }
                                else {
                                    //set flag to true + return success
                                    setFlag(crs.sec, true)
                                    counter++
                                    if(counter == sched.length - 1){
                                        callback(null, "Student was successfully added to all classes.")
                                    }
                                }
                            }
                        )
                    }
                    if (brk) {
                        callback(null, "Student is already enrolled!");
                    }
                })
            })
        })
    })
};

/**Removes a user from each class section that he or she is enrolled in. Sets finalized schedule flag to false.
 *
 * @param eMail E-mail to grab the user's schedule
 * @param callback Returns success message to callback function
 */
module.exports.removeUser = function(eMail, callback) {
    us.findOne({ email : eMail }, {schedule : 1, _id : 0}, (err, doc) => {
        sched = doc.schedule
        var counter = 0
        //query each class user's schedule in StudyBuddy Classroom schema
        sched.forEach( function (crs) {
            //add to classroom
            SB.findOneAndUpdate({"sec" : crs.sec},
                {
                    $pull : {
                        "students" : { user : eMail }
                    }
                }, {new: true}, function(err, doc) {
                    if (err) {
                        callback(null, null)
                    } else {
                        setFlag(crs.sec, true)
                        counter++
                        if(counter == sched.length - 1){
                            setFinalizedFlag(eMail, false, null)
                            callback(null, "All classes were successfully deleted")
                        }
                    }
                }
            )
        })
    })
};

/**Gets section object based on section number
 *
 * @param sect Section # of classroom
 * @param callback function to receive section object
 */
module.exports.getClass = function(sect, callback){
    SB.find({ 'sec' : sect }, callback)
};

/**Sets flag for isChanged in the classroom. Used to signal chron job that a classroom is ready to be used
 *
 * @param sec Section of the classroom
 * @param flag Flag to set to either true or false
 */
function setFlag(sec, flag) {
    SB.findOneAndUpdate(
        {sec : sec},
        {
            $set : {
                "isChanged" : flag
            }
        }, {new: true}, function(err, doc) {
        }
    )
}

/**Sets the finalized flag inside a user's schedule. This signifies that the user has been added or removed
 * from a classroom.
 *
 * @param eMail E-mail to access user's data
 * @param flag Flag to set to either true or false
 * @param callback Returns the eMail back to callback function
 */
function setFinalizedFlag(eMail, flag, callback) {
    us.findOneAndUpdate(
        {email : eMail},
        {
            $set : {
                "schedFinal" : flag
            }
        }, {new: true}, function(err, doc) {
            if(callback != null){
                callback(eMail)
            }
        }
    )
}

/**Grabs the buddies of a user
 *
 * @param eMail E-mail to access user's data
 * @param callback Returns the the array of study buddies to callback function
 */
module.exports.getBuddies = function(eMail, callback) {
    us.findOne({ email : eMail }, {schedule : 1, _id : 0}, (err, doc) => {
        sched = doc.schedule
        if( !(sched.length > 0)) {
            callback("Nothing in Schedule")
            return
        }
        var promise = sched.length;
        var did =0;
        var retArr = []
        sched.forEach(function(element) {
            SB.findOne(
                {"sec" : element.sec}, (err, doc) => {
                    if ( !(doc.students.length > 0)) {
                        callback("Nothing Found in SB")
                        return
                    }
                    for (var i = 0; i< doc.students.length; i++){
                        //console.log()
                        //if (doc[students][i][user] == email){
                        if (doc.students[i].user == eMail){
                            retArr.push({sec: element.sec, name: element.name, buddies: doc.students[i].buddies})
                            break;
                        }
                    }
                    if (retArr.length == promise){
                        callback(null, retArr)
                    }
                })
        }, this);
    })
};
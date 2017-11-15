var initArray = [];
var newArr = [];
var x;
const mongoose = require('mongoose');
var config = require('../config/database');
const classes = require('../models/course');
const CS = mongoose.model('Courses', classes.CS.Schema);
const buddy = require('../models/StudyBuddyModel.js');
const cs = mongoose.model('StudyBuddy', buddy.CS.Schema);
const um = require('../models/user');
const us = mongoose.model('User', um.schema)



mongoose.connect(config.database);
// Check to see if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected:');
})

function closecon(){mongoose.connection.close(function() {
    console.log('Disconnected from database'); })}  

function bulkAddUserstoStudyBuddyWithSchedule(){
    us.find({},(err, docs) => {
        docs.forEach(function(element) {
            if (element.schedule.length > 0){
                buddy.addUser(element.email, (err, msg) =>{
                    console.log(element.email + " : " )
                    if (err) {console.log(err)}
                    else {console.log(msg)}
                })
            }
                
        }, this);
    })
}

function initStudyBudy() {CS.find({}, (err, cbb) => {
    initArray = cbb;
    //console.log(initArray[0]);
    for(ii = 0; ii < initArray.length; ii++){
        for(jj = 0; jj < initArray[ii].courses.length; jj++){
            var cls = {
                dept : initArray[ii].name,
                teacher : initArray[ii].courses[jj].prof,
                num : initArray[ii].courses[jj].num,
                sec : initArray[ii].courses[jj].sec,
                students: [],
                isChanged: false
            }
            //console.log(cls);
            newArr.push(cls);
        }
    }
    for(kk = 0; kk < newArr.length; kk++) {
        //console.log(newArr[kk]);
    }
    //const buddy = require('../models/StudyBuddyModel');
    //const cs = mongoose.model('Dept', buddy.DS.Schema);
    cs.collection.drop();
    cs.collection.insert(newArr);
}).then(closecon)}

//add function
//query user's schedule

var myArgs = process.argv.slice(2);
if (myArgs[0] == 1){
    initStudyBudy()
    console.log("initialized")
}
else{
    bulkAddUserstoStudyBuddyWithSchedule()
}



var test = "RS0@gmail.com"

// us.findOne({ email : test}, {schedule : 1, _id : 0}, (err, doc) => {
//     sched = doc.schedule;
//     //query each class in studybuddymodel (foreach)
//     sched.forEach( function (crs) {
//         //add to classroom
//         cs.findOneAndUpdate(
//             {"sec" : crs.sec, "students.user" : {$ne: test}},
//             {
//                 $addToSet: {
//                     "students": {
//                         user: test,
//                         oMon: [],
//                         oTues: [],
//                         oWed: [],
//                         oThurs: [],
//                         buddies: []
//                     }
//                 }
//             }, {new: true}, function(err, doc) {
//                 if (err) {
//                     console.log("Something went wrong when adding a student!");
//                 }
//                 if (doc == null) {
//                     //callback(null)
//                     console.log("hello");
//                 }
//                 else {
//                     //set flag to true + return success
//                     cs.findOneAndUpdate(
//                         {sec : crs.sec},
//                         {
//                             $set : {
//                                     "isChanged" : true
//                             }
//                         }, {new: true}, function(err, doc) {
//                             console.log(doc)
//                         }
//                     )
//                 }
//             }
//         )
//     })
// })

// us.findOne({ email : test }, {schedule : 1, _id : 0}, (err, doc) => {
//     sched = doc.schedule;
// //query each class in studybuddymodel (foreach)
// sched.forEach( function (crs) {
//     //add to classroom
//     cs.findOneAndUpdate(
//         {"sec" : crs.sec},
//         {
//             $pull : {
//                 "students" : { user : test }
//             }
//         }, {new: true}, function(err, doc) {
//             if (err) {
//                 console.log("Something went wrong when deleting the student!");
//             } else {
//                 //set flag to true + return success
//                 cs.findOneAndUpdate(
//                     {sec : crs.sec},
//                     {
//                         $set : {
//                             "isChanged" : true
//                         }
//                     }, {new: true}, function(err, doc) {
//                         console.log(doc)
//                     }
//                 )
//             }
//         }
//     )
// })
// }).then(closecon)
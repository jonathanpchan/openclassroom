/*
Purpose: feed users to study buddy
this code will be made into routes
*/

const mongoose = require('mongoose');
var config = require('../config/database');
const Users = require('../models/user');
const US = mongoose.model('User', Users.Schema);
const buddy = require('../models/StudyBuddyModel');
const ds = mongoose.model('Dept', buddy.DS.Schema);
var debug = false;

mongoose.connect(config.database);
// Check to see if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected:');
})

ds.find({"dept" : "CECS"}, (err, x) => {
    console.log(x[0].courses[0])
    ds.update(
        {"dept" : "CECS"},
        {
            $set: {"courses.0.isChanged" : true}
        }, 
        (err,cb) => {})
})

function placeByDay(arr , arr2){
    for (let i in arr) {
        t = arr[i]
        if (t.day == "M"){
           arr2[0].push(t)
        }
        else if (t.day == "Tu"){
            arr2[1].push(t)
        }
        else if (t.day == "W"){
            arr2[2].push(t)
        }
        else if (t.day == "Th"){
            arr2[3].push(t)
        }
        else if (t.day == "MW"){
            arr2[0].push(t)
            arr2[2].push(t)
        }
        else if (t.day == "TuTh"){
            arr2[1].push(t)
            arr2[3].push(t)
        }
        else if (t.day == "MWF"){
            arr2[0].push(t)
            arr2[2].push(t)

        }
        else{
           if (debug) console.log("ERROR: " + t.name + " on " + t.day)
        }
    }
    // add sort in day
    // check 2d
    //check cb
    return arr2;
    
}

function findOT(arr, arr2){
    var arr = [[],[]];
    arr.forEach(function(element) {
        // populate ot
    }, this)
}

US.find({}, (err, cb) => {
    cb.forEach(function(element) {
        if (debug)
        console.log(element.email + ": ")
        // calc open times
            //sort days
            //sort in day
            //add to 2d arr (12 * 12)
            
        element.schedule.forEach(function(element2) {
            if (debug)
            console.log("   " + element2.sec + " " + element2.day + " " + element2.time)
            //add user email and open times to appropriate section

            //update is changed
        }, this)
    }, this);
    
    //closecon()
})

function closecon(){mongoose.connection.close(function() {
    console.log('Disconnected from database'); })}  


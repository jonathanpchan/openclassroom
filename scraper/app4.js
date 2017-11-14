/*
Purpose: feed users to study buddy
this code will be made into func in model
*/

const mongoose = require('mongoose');
var config = require('../config/database');
const Users = require('../models/user');
const US = mongoose.model('User', Users.Schema);
const buddy = require('../models/StudyBuddyModel');
//const ds = mongoose.model('Dept', buddy.DS.Schema);
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

// ds.find({"dept" : "CECS"}, (err, x) => {
//     console.log(x[0].courses[0])
//     ds.update(
//         {"dept" : "CECS"},
//         {
//             $set: {"courses.0.isChanged" : true}
//         }, 
//         (err,cb) => {})
// })

function placeByDay(arr , callback){
    function helperSort(a,b) {
        //console.log(a.time + " - " + b.time + " = " )
        return (a.sh - b.sh)
    }
    function timeFix(item){
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
    }
    var arr2 = {omon: [], otue: [], owed: [], othu: []}
    //console.log(arr2)
    arr.forEach(function(element) {
        timeFix(element)
    }, this);

    for (let i in arr) {
        t = arr[i]
        if (t.day == "M"){
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
        else if (t.day == "MW"){
            arr2.omon.push(t)
            arr2.owed.push(t)
        }
        else if (t.day == "TuTh"){
            arr2.otue.push(t)
            arr2.othu.push(t)
        }
        else if (t.day == "MWF"){
            arr2.omon.push(t)
            arr2.owed.push(t)
        }
        else{
           if (debug) console.log("ERROR: " + t.name + " on " + t.day)
        }
    }
    arr2.omon.sort(helperSort)
    arr2.otue.sort(helperSort)
    arr2.owed.sort(helperSort)
    arr2.othu.sort(helperSort)
    callback(arr2)
}

var sched = [{name: "last" , day: "MWF" , time : "6:30-9:15 PM"}, {name: "first", day:"M", time : "6:30-9:15 AM"}]

placeByDay(sched, arr => {
    console.log(arr.omon)
    console.log(arr.othu)
}
)

// function findOT(arr, arr2){
//     var arr = [[],[]];
//     arr.forEach(function(element) {
//         // populate ot
//     }, this)
// }

// US.find({}, (err, cb) => {
//     cb.forEach(function(element) {
//         if (debug)
//         console.log(element.email + ": ")
//         // calc open times
//             //sort days
//             //sort in day
//             //add to 2d arr (12 * 12)
            
//         element.schedule.forEach(function(element2) {
//             if (debug)
//             console.log("   " + element2.sec + " " + element2.day + " " + element2.time)
//             //add user email and open times to appropriate section

//             //update is changed
//         }, this)
//     }, this);
    
//     //closecon()
// })

function closecon(){mongoose.connection.close(function() {
    console.log('Disconnected from database'); })}  


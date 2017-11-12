const mongoose = require('mongoose');
var config = require('../config/database');
const request = require('request')
const StudyBuddy = require('../models/StudyBuddyModel');
const SB = mongoose.model('StudyBuddy', StudyBuddy.CS.Schema);

//mongoose.Promise = global.Promise;
mongoose.connect(config.database);
// Check to see if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database');})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected:');})

function closecon(){mongoose.connection.close(function() {
    console.log('Disconnected from database'); })}  

    function fillArr(arr, st, et) {
        //8am - 8pm
        if (st < 8*60) st = 0
        else st = st - 8*60
        if (et > 20*60) et = 20*60 - 5
        else et = et - 8*60 
        for (var i =st/5; i < et/5; i++){
            arr[i] = 0;
        }
    }
    
    function helper(arr){
        var retArr = new Array(144)
        if (arr.length == 0){
            for (var i =0; i < retArr.length; i++){
                if (retArr[i] == undefined)
                retArr[i] = 0;
            }
            return retArr
        }
        arr.forEach(function(elem) {
            fillArr(retArr, elem.stimeInMin, elem.etimeInMin)
        }, this)
        for (var i =0; i < retArr.length; i++){
            if (retArr[i] == undefined)
            retArr[i] = 1;
        }
        return retArr;
    }

function creatOT(student, callback) {
    var arr = []
    var here = new Boolean(true);
    arr.push.apply(arr,helper(student.oMon))
    arr.push.apply(arr,helper(arr,student.oTue))
    arr.push.apply(arr,helper(arr,student.oWed))
    arr.push.apply(arr,helper(arr,student.oThu))
    callback(arr)
}

var once = true;
function match(){

    var count = 0;

    SB.find({"isChanged" : true}, {}, (err, x) => {
        if (err) {console.log(err)
        return}
        if (x.length < 2) {console.log("not enough changes")
        return}

        x.forEach(function(document) {
            count++;
            var mainArr =[];
            var mainArr2 =[];
            document.students.forEach(function(student) {
                arr = creatOT(student, cbb => {
                    if (cbb == null) {
                        console.log("Major ERROR!!!!")
                    }
                    mainArr.push({email : student.user, ot: cbb})
                })
                
            }, this)
            //should have array here!! main is good to go
            console.log("Class: " + document.num + " " + "Size: " + mainArr.length)
            for (var i = 0; i < mainArr.length; i++) {
                // console.log(mainArr[i].email)
                // if (once)
                // console.log(mainArr[i].ot[2])
                // once = false;
            }
            //for each user in arr
            //nested for each other user in arr
            for (var i = 0; i < mainArr.length; i++){
                console.log("-------------------- "+ i+ " -----------------------------------")
                for (var j = i+1; j < mainArr.length; j++){
                    var counter = 0;
                    for (var k = 0; k < 144; k++){
                        if (mainArr[i].ot[k] == 1 && mainArr[j].ot[k] == 1){
                            counter++
                        }
                    }
                    //if(i ==0 )
                    console.log("     " + mainArr[i].email.substr(0,3) + " count: " + counter + " with " + mainArr[j].email.substr(0,3))
                }
            }
            // make sum
            // sort
            // check for min val
            // make rooms and returrn


        }, this)

        console.log(count)
        closecon()
    })
    
    console.log("why does this not print")
}

match()



//for chron
//check is changed
// just sum it all??
//match. how to deal with same id??  concat emails alphabetically and hash
//reset is changed
//route to retrieve a users matches?? store matches for earch section in user model not study budy


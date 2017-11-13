const mongoose = require('mongoose');
var config = require('../config/database');
const request = require('request')
const StudyBuddy = require('../models/StudyBuddyModel');
const SB = mongoose.model('StudyBuddy', StudyBuddy.CS.Schema);
var myArgs = process.argv.slice(2);
var debug = myArgs[0];
//mongoose.set('debug', true)

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

    function hashCode(x){
        var hash = 0;
        if (x.length == 0) return hash;
        for (i = 0; i < x.length; i++) {
            char = x.charCodeAt(i);
            hash = ((hash<<5)-hash)+char;
            hash = hash & hash; // Convert to 32bit integer
        }
        return hash;
    }

    function helperSort2(a,b) {
        //console.log(a.score + " - " + b.score + " = " )
        return (b.score - a.score)
    }

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
    var iAmFinished =0;

    SB.find({"isChanged" : true}, {}, (err, x) => {
        if (err) {console.log(err)
        return}
        if (x.length < 2) {console.log("not enough changes")
        return}

        x.forEach(function(document) {
            var check = true;
            count++;
            var mainArr =[];
            var mainArr2 =[];
            document.students.forEach(function(student) {
                arr = creatOT(student, cbb => {
                    if (cbb == null) {
                        console.log("Major ERROR!!!!")
                    }
                    
                    mainArr.push({email : student.user, ot: cbb})
                    check = false;
                })
                
            }, this)
            //should have array here!! main is good to go
            if (debug > 0){
                console.log("-------------------------------------------------------------------------")
                console.log("Class: " + document.num + " " + "Size: " + mainArr.length)
                console.log("-------------------------------------------------------------------------")
            }
            if (check == true) console.log("Error on flow")
            for (var i = 0; i < mainArr.length; i++) {
                // console.log(mainArr[i].email)
                // if (once)
                // console.log(mainArr[i].ot[2])
                // once = false;
            }
            //for each user in arr
            //nested for each other user in arr
            for (var i = 0; i < mainArr.length; i++){
                if (debug==2)console.log("                       -- "+ i+ " --                             ")
                var tempBuddies = [];

                for (var j = 0; j < mainArr.length; j++){
                    if (j == i) j++ //skip over self
                    if (j > mainArr.length - 1) break
                
                    var counter = 0;
                
                    for (var k = 0; k < 144; k++){
                        if (mainArr[i].ot[k] == 1 && mainArr[j].ot[k] == 1){
                            counter++
                        }
                    }
                    //if(i ==0 )
                    if (debug == 2)console.log("     " + mainArr[i].email.substr(0,3) + " count: " + counter + " with " + mainArr[j].email.substr(0,3))
                    if (counter>50){
                        //create id for pair
                        if (mainArr[i].email < mainArr[j].email){
                            id = mainArr[i].email + "+" + mainArr[j].email
                        }
                        else id = mainArr[j].email + "+" + mainArr[i].email

                        id = Buffer.from(id).toString('base64')

                        //add to buddies list
                        tempBuddies.push({id: id, score: counter, otherUser: mainArr[j].email})
                    }
                }//inner loop

                //sort buddies list
                tempBuddies.sort(helperSort2)
                //console.log(tempBuddies)
                var buddies = []
                tempBuddies.forEach(function(element) {
                    buddies.push(element.id)
                }, this);
                //add to db
                //buddies = ["hela", "bela", "mela"]
                var pos =i;
                var item = "students." + pos +  ".buddies"
                //console.log(document)
                //const SB2 = mongoose.model('StudyBuddy', StudyBuddy.CS.Schema);
                SB.findByIdAndUpdate(document._id,
                    //{$set: {[item] : [strarr]}},
                    {$addToSet: 
                        {[item] : {$each: buddies} }
                    },
                    {new: true},
                    (err, newdoc) => {
                        console.log(newdoc.sec)
                    }
                )
            }//outer loop

        }, this)

        console.log(count)
        //closecon()
    })
    
    console.log("why does this not print")
}

match()



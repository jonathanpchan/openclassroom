/*
    syed hussain, csulb, cecs 491a&b
    nicholas sugimoto, csulb, cecs 491b
*/
test = false // turn this to false to see all errors (should be flase in general)
var fs = require('fs');
var cheerio = require('cheerio');
// Be explicit at its location
var mongoose = require('mongoose');
var config = require('../config/database');

//pipe output to file
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};
//pipe output to file end

// For processing buildings
var arr = []
// For processing courses
var courseList = []
var initCourseList = []
var alldays = new Set();


$ = cheerio.load(fs.readFileSync('fulllisting.html'));
//$ = cheerio.load(fs.readFileSync('rawfull.html'));
var t1 = Date.now();
function classSection(name, sec, day, time, room){
    this.name = name;
    this.sec = sec;
    this.day = day;
    alldays.add(day);
    

    //parse building and room
    this.location = room;
    temp = this.location.split('-');
    this.building = temp[0];
    this.room = temp[1].replace(/^0+/, '');
    //parse time
    this.time = time;
    this.period = time.substring(time.length - 2)
    rawtime = time.substring(0, time.length - 2)
    temp = rawtime.split('-');
    this.start = temp[0];
    this.end = temp[1];
    if (this.end == undefined){console.log(name)}

    temp = this.start.split(':')
    this.sh = temp[0] 
    this.sm = temp[1]
    temp = this.end.split(':')
    this.eh = temp[0]
    this.em = temp[1]

    if (this.sm == undefined)
        {this.sm = 00}
    if (this.em == undefined)
        {this.em = 00}

    this.sh = parseInt(this.sh)
    this.sm = parseInt(this.sm)
    this.eh = parseInt(this.eh)
    this.em = parseInt(this.em)

    if (this.period == "PM" && this.eh != 12){
        if (this.sh > this.eh){
            this.eh = this.eh + 12
        }
        else {
            this.sh = this.sh +12
            this.eh = this.eh + 12
        }

    }
    
    this.stimeInMin = (this.sh * 60) + this.sm
    this.etimeInMin = (this.eh * 60) + this.em
    
}

function oclassSection(st,et){
    this.stimeInMin = st;
    this.etimeInMin = et;
}

// target course block
$('.courseBlock').each( function(i, e)     {
    name = $('.courseCode', this).text(); 
    //skip course header and target next child
    var target = $(this).children().next() 
    var row
    while (target.attr('class') != null ) {
        if (target.attr('class') == 'groupMessage') {
            target = target.next();
        }
        else if (target.attr('class') == 'sectionTable') {
            row = target.children().next()
            while( row.html() != null){
                // Course code
                sec = row.children().next().html();
                // M, TuTh, W, F
                day = row.children().next().next().next().next().html();
                // #:##-#:##PM
                time = row.children().next().next().next().next().next().html()
                // Make sure there's spacing between AM and PM
                time = time.replace("PM", " PM")
                time = time.replace("AM", " AM")
                // ECS 416
                room = row.children().next().next().next().next().next().next().next().html()
                // Kobata K
                prof = row.children().next().next().next().next().next().next().next().next().html()
                row = row.next()

                if (!(room == "TBA" || room == "ONLINE ONLY" || room == "ONLINE-ONLY" || time == "TBA"
                        || sec == "&#xA0;"
                )){
                    arr.push(new classSection(name, sec, day, time, room))
                    initCourseList.push({"num": name, "sec" : sec, "day" : day, "time" : time, "location" : room, "prof" : prof})
                }
            }
            target = target.next();
        }

        else {
            console.log("error")
        }
    }
    //call next part here 
    //actual this is blocking so nvm
    
})

//console.log("Parsing took: " + (Date.now() - t1) + "ms")
//var arr2 = JSON.stringify(arr)
/*
fs.writeFile("file.txt", arr2, function(err) {
    if(err) {
        return console.log(err);
    }
})
*/
//console.log(arr)
console.log(alldays)
//-------------------------------make this a new file for processing-------------------------------
//export primary array
var bmap = new Map()
buildingset = new Set();
var t2 = Date.now();

function building(str){
    this.name = str;
    this.classes = [];
    this.rmap = new Map();
    this.rset = new Set();
    //this.print()
    
}

function roomObject(room){
    this.room = room
    this.classesinroom = []
    this.mon = []
    this.tue = []
    this.wed = []
    this.thu = []
    this.fri = []
    this.sat = []
    this.openTimesMon = []
    this.openTimesTue = []
    this.openTimesWed = []
    this.openTimesThu = []

    this.print = function(){
        console.log("-------------------------------------------------")
        console.log(this.room + ": ")
        console.log("Monday: ")
        //console.log("")
        for (let i in this.mon){
            console.log("   " + this.mon[i].name + " on " + this.mon[i].day + " at " + this.mon[i].time)
        }
        
        //console.log("")
        console.log("Tuesday: ")
        //console.log("")
        for (let i in this.tue){
            console.log("   " + this.tue[i].name + " on " + this.tue[i].day + " at " + this.tue[i].time)
        }

        //console.log("")
        console.log("Wednesday: ")
        //console.log("")
        for (let i in this.wed){
            console.log("   " + this.wed[i].name + " on " + this.wed[i].day + " at " + this.wed[i].time)
        }

        //console.log("")
        console.log("Thursday: ")
        //console.log("")
        for (let i in this.thu){
            console.log("   " + this.thu[i].name + " on " + this.thu[i].day + " at " + this.thu[i].time)
        }
        //console.log("end")

        
    }
    this.placeByDay = function() {
        for (let i in this.classesinroom) {
            t = this.classesinroom[i]
            if (t.day == "M"){
               this.mon.push(t)
            }
            else if (t.day == "Tu"){
                this.tue.push(t)
            }
            else if (t.day == "W"){
                this.wed.push(t)
            }
            else if (t.day == "Th"){
                this.thu.push(t)
            }
            else if (t.day == "F"){
                this.fri.push(t)
            }
            else if (t.day == "Sa"){
                this.sat.push(t)
            }
            else if (t.day == "MW"){
                this.mon.push(t)
                this.wed.push(t)
            }
            else if (t.day == "TuTh"){
                this.tue.push(t)
                this.thu.push(t)
            }
            else if (t.day == "MWF"){
                this.mon.push(t)
                this.wed.push(t)
                this.fri.push(t)
            }
            else{
               if (!test) console.log("ERROR: " + t.name + " on " + t.day)
            }
        }
        
    }
    this.sortEachDay = function(){
        function helperSort(a,b) {
            //console.log(a.time + " - " + b.time + " = " )
            return (a.sh - b.sh)
        }
        this.mon.sort(helperSort)
        this.tue.sort(helperSort)
        this.wed.sort(helperSort)
        this.thu.sort(helperSort)

    }

    this.findTimes = function(){        
        this.helper (this.mon, this.openTimesMon)
        this.helper (this.tue, this.openTimesTue)
        this.helper (this.wed, this.openTimesWed)
        this.helper (this.thu, this.openTimesThu)
    }

    this.helper = function(arr1, arr2){
        let tEnd = 21 * 60 //9 PM
        let tStart = 8*60//8am
        let size = arr1.length
        //console.log(size)

        //account for 0 and 1 class
        if (size > 2){
            //console.log(arr1[0].sec)
            //handle last class
            if(tEnd - arr1[size-1].etimeInMin > 20){
                arr2.push(new oclassSection(arr1[size-1].etimeInMin, tEnd))
            }
            
            //account for all other
            for (let i = arr1.length -2; i > 0; i--){
                if (arr1[i].stimeInMin - arr1[i - 1].etimeInMin > 20){
                    arr2.push(new oclassSection(arr1[i - 1].etimeInMin,arr1[i].stimeInMin))
                }   
            } 
            //account for first class of the day 
            if (arr1[0].stimeInMin - tStart > 20){
                  arr2.push(new oclassSection(tStart, arr1[0].stimeInMin))
            }
            //reverse open times arr
            arr2.reverse()
        }
           /////console.log(room + " missed return or < 2")

    }
    
}

//------------get all buildings and add classess -------------
//get list of buildings
for (let i in arr){
    //console.log(arr[i].location)
    buildingset.add(arr[i].building)
}
//console.log(buildingset)
buildingset = new Set(Array.from(buildingset).sort()) 
//create building objects for each building and add to map
for (let item of buildingset.keys()){
   //console.log(item)
   bmap.set(item, new building(item) )
    //barr.push()
}

//add classes to buildings
for (let i in arr){
    temp = arr[i].building
    current = bmap.get(temp)
    current.classes.push(arr[i])
}

//------------------process every building-------------------------

//decalre function (function is actually called later after all this)
//console.log("in wrong file")
var buildcount = 0
function processBuildings(values, key, map){
   // console.log("Building: " + key)
    buildcount = buildcount + 1
    //step 1. get a list of rooms
    for (let i in values.classes){
        values.rset.add(values.classes[i].room)
    }

    values.rset = new Set(Array.from(values.rset).sort()) 
   

    //step 2. create room object and add to room map
    for (let item of values.rset.keys()){
        values.rmap.set(item, new roomObject(item) ) 
    }
    
    //values.rmap = new Map([values.rmap.entries()].sort())
    //console.log(nrmap)
    
    //step 3 add classes to rooms
    for(let i in values.classes){
        temp = values.classes[i].room
        current = values.rmap.get(temp)
        current.classesinroom.push(values.classes[i])
    }

    //print stuff for debug
    // console.log("")
    // console.log("Building: " + values.name)
    // for (var [key, value] of values.rmap.entries()) {
    //     console.log("")
    //     console.log("Room " + key + ":")
    //     for(let i in value.classesinroom){
    //         console.log(value.classesinroom[i].name + " at " + value.classesinroom[i].day + " " + value.classesinroom[i].time);   
    //     }
    //  }

    //step 5 break eachroom into days and sort
    function processRooms(values, key, map){
        values.placeByDay()
        values.sortEachDay()
        //values.print()
        values.findTimes()
        
      //console.log(values.toString())
    }
    values.rmap.forEach(processRooms)
    
     //step 6 find open times per day
     // if arr[i +1].start - arr[i].end > 20
     //account for end of day
     
     if (buildcount == 49){
         insertToDB()
     }
}
//actual function call
bmap.forEach(processBuildings)

//------------------Process courses-------------------------
var title = ""
var tempCourseList = []
for (var i = 0; i < initCourseList.length; i++)
{
    // CourseName ex. From "S/I 60" to "S/I "
    let courseName = initCourseList[i].num.match(/^[a-zA-Z &/]*/)
    // From "S/I " to "S/I"
    courseName = courseName[0].substring(0, courseName[0].length-1)
    // CourseNumber ex. From "S/I 60" to "60"
    let courseNumber = initCourseList[i].num.replace(/^[a-zA-Z &/]*/, '')
    // Initial Case
    if (i == 0)
    {
        initCourseList[i].num = courseNumber
        tempCourseList.push(initCourseList[i])
        title = courseName
    }
    // Common Case
    else if (i != initCourseList[i].length - 1) 
    {
        // Push if same name
        if (title == courseName)
        {
            initCourseList[i].num = courseNumber
            tempCourseList.push(initCourseList[i])
        }
        // Push to courseList and reinitialize if different name
        else
        {
            courseList.push({"name" : title, courses : tempCourseList})
            title = courseName
            tempCourseList = []
            initCourseList[i].num = courseNumber
            tempCourseList.push(initCourseList[i])
        }
    }
    // End Case
    else
    {
        initCourseList[i].num = courseNumber
        tempCourseList.push(initCourseList[i])
        courseList.push({"name" : title, courses : tempCourseList})
    }
}

console.log("Processing took: " + (Date.now() - t2) + "ms" )
console.log("Total took: " + (Date.now() - t1) + "ms")

//GET ALL DEPARTMENTS
//GET OPEN TIMES
    //might have to creat new class for time data struct
//PAGES
    // EXPORTs AND CLASS-IFY  
//CONNECT AND IMOIRT TO DB

//delete all redundant objects
//better print methods and data structure


function insertToDB(){
    //const building = require('..\open-classroom\models\building');
    // Connect location of database
    //mongoose.set('debug', true)
    mongoose.connect(config.database);
    // Check to see if connected to database
    mongoose.connection.on('connected', () => {
        console.log('Connected to database');
    })
    // Check to see if connection failed
    mongoose.connection.on('error', () => {
        console.log('Database not connected:');
    })

    //--------Insert Buildings into database----------------
    // Require building model to access add function
    const build = require('../models/building');
    // Grab the schema used by said model
    const bs = mongoose.model('Building', build.BS.schema);
    var rs = require('../models/roomInfo');
    var ll = mongoose.model('RoomInfo', rs.RI.schema )
    bs.collection.drop()
    ll.collection.drop()


    var RoomInfo_classTimesARR = []

    var fullDBArr = []

    function dbAddBuildings(values1, key1, map1){
      //  console.log("adding : " + key1)
        var dbRoomsInBuildingArr = [];
        
            function dbAddRoomsToBuilding(values, key, map){

                function DBrooms(arr){
                    tarr = []
                    for (let i in arr){
                        tarr.push({
                            name: arr[i].name,
                            sec: arr[i].sec,
                            days: arr[i].day,
                            location: arr[i].location,
                            st: arr[i].stimeInMin,
                            et: arr[i].etimeInMin
                        })

                        
                    }
                    return tarr

                }
                //new function for room info class times schema
                function DBroomsForRoomInfo(otherArr){
                    tarr2 = []
                    for (let i in otherArr){
                        tarr2.push({
                            st: otherArr[i].stimeInMin,
                            et: otherArr[i].etimeInMin,
                            uVote:0,
                            dVote:0,
                            //tVote:0
                        })
                    }
                    return tarr2
                }
                
                var mon1 = DBrooms(values.mon)
                var tue1 = DBrooms(values.tue)
                var wed1 = DBrooms(values.wed)
                var thu1 = DBrooms(values.thu)
                var omon1 = DBrooms(values.openTimesMon)
                var otue1 = DBrooms(values.openTimesTue)
                var owed1 = DBrooms(values.openTimesWed)
                var othu1 = DBrooms(values.openTimesThu)
                //new stuff for room info schema
                var mon2 = DBroomsForRoomInfo(values.openTimesMon)
                var tue2 = DBroomsForRoomInfo(values.openTimesTue)
                var wed2 = DBroomsForRoomInfo(values.openTimesWed)
                var thu2 = DBroomsForRoomInfo(values.openTimesThu)

                
                dbRoomsInBuildingArr.push(
                    {
                        name: values.room, 
                        mon : mon1, tue : tue1, wed : wed1, thu : thu1,
                        omon : omon1, otue : otue1, owed : owed1, othu : othu1                    
                    }
                )

                RoomInfo_classTimesARR.push(
                    {
                        building : key1,
                        room: key,
                        hasOutlets: {
                            uVote: 0,
                            dVote: 0,
                        },
                        whiteBoard: {
                            uVote: 0,
                            dVote: 0,
                        },
                        mon: mon2,
                        tue: tue2,
                        wed: wed2,
                        thu: thu2
                    }
                )
            //dbRoomsInBuildingArr.push({name: values.room})
          
        }
        
        values1.rmap.forEach(dbAddRoomsToBuilding)

        //bs.create({name : key1 , rooms: dbRoomsInBuildingArr})

        fullDBArr.push({name : key1 , rooms: dbRoomsInBuildingArr})

         // console.log("added : " + key1)
        //bs.create({name : key})

    }
 
    var tCount =0
    // bmap.forEach( function(values,key,map){
    //     tCount = tCount + 1
    //     console.log( "(" + tCount + ") Building: " + key + " .. " + typeof key)
    // })    
    // console.log(tCount)


    bmap.forEach(dbAddBuildings)

    bs.collection.insert(fullDBArr, onInsert('Buildings'))
    ll.collection.insert(RoomInfo_classTimesARR, onInsert('RoomInfo'))

    //--------Insert Courses into database----------------
    // Require building model to access add function
    const course = require('../models/course');
    // Grab the schema used by said model
    const cs = mongoose.model('Courses', course.CS.schema)
    cs.collection.drop()

    cs.collection.insert(courseList, onInsert('Courses'))

    function onInsert(name, err) {
         if (err) {
            // TODO: handle error 
            console.log("Error on inserting: "+name)
         } else {
            console.info(name+' were successfully stored.');
        }
    } 
    // Close the database
    mongoose.connection.close(function() {
        console.log('Disconnected from database');
    })
}



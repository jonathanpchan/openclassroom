/*
syed hussain, csulb, cecs 491
*/
test = true // turn this to false to see all errors (should be flase in general)
var fs = require('fs');
var cheerio = require('cheerio');

var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', {flags : 'w'});
var log_stdout = process.stdout;

console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

var arr = []


$ = cheerio.load(fs.readFileSync('fulllisting.html'));
var t1 = Date.now();
function classSection(name, sec, day, time, room){
    this.name = name;
    this.sec = sec;
    this.day = day;

    //parse building and room
    this.location = room;
    temp = this.location.split('-');
    this.building = temp[0];
    this.room = temp[1];
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

                sec = row.children().next().html();
                day = row.children().next().next().next().next().html();
                time = row.children().next().next().next().next().next().html()
                room = row.children().next().next().next().next().next().next().next().html()
                row = row.next()

                if (!(room == "TBA" || room == "ONLINE ONLY" || room == "ONLINE-ONLY" || time == "TBA")){
                    arr.push(new classSection(name, sec, day, time, room))
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

    this.toString = function(){
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
        let tEnd = 21 //9 PM
        
        var helper = function(arr, arr2){
            let size = arr.length
            //account for 0 and 1 class
            if (size >= 1){
                //console.log(room + " " + "has more than one")
                return
                //account for last class of the day
                //if ()
                //account for first class of the day
                //account for all other
                for (let i = this.arr.length; i < 1; i--){
                    if (this.arr[i].stimeInMin - this.arr[i - 1].etimeInMin > 20){

                    }
                    //console.log(room + " " + lim) //will double count
                    
                }    
            }
           // console.log(room + " missed return or < 2")
            
        }
        helper (this.mon, this.openTimesMon)
        
        //sort array in right order
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

function processBuildings(values, key, map){
    console.log("Building: " + key)
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
        values.findTimes()
        console.log(values.toString())
      //console.log(values.toString())
    }
    values.rmap.forEach(processRooms)
    
     //step 6 find open times per day
     // if arr[i +1].start - arr[i].end > 20
     //account for end of day


}
//actual function call
bmap.forEach(processBuildings)

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


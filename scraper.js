/*
syed hussain, csulb, cecs 491
*/
var fs = require('fs');
var cheerio = require('cheerio');

var arr = []


$ = cheerio.load(fs.readFileSync('rawfull.html'));

function classSection(name, sec, day, time, room){
    this.name = name;
    this.sec = sec;
    this.day = day;
    this.time = time;
    this.location = room;
    
    temp = this.location.split('-');
    this.room = temp[1];
    this.building = temp[0];
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

                if (!(room == "TBA" || room == "ONLINE ONLY" || room == "ONLINE-ONLY")){
                    arr.push(new classSection(name, sec, day, time, room))
                }
            }
            target = target.next();
        }

        else {
            console.log("error")
        }
    }
    
})
//var arr2 = JSON.stringify(arr)
/*
fs.writeFile("file.txt", arr2, function(err) {
    if(err) {
        return console.log(err);
    }
})
*/
//console.log(arr)

//-------------------------------new file for processing-------------------------------
var bmap = new Map()
buildingset = new Set();
var t1 = Date.now();

function building(str){
    this.name = str;
    this.classes = [];
    this.rmap = new Map();
    this.rset = new Set();
    
}

function roomObject(room){
    this.room = room
    this.classesinroom = []
    this.opentimes = []
}

//------------get all buildings and add classess -------------
//get list of buildings
for (let i in arr){
    //console.log(arr[i].location)
    buildingset.add(arr[i].building)
}
//console.log(buildingset)

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

function processRooms(values, key, map){
    //step 1. get a list of rooms
    for (let i in values.classes){
        values.rset.add(values.classes[i].room)
    }
    //console.log(value.rset)
    //step 2. creat room object and add to map
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
    console.log("")
    console.log("Building: " + values.name)
    for (var [key, value] of values.rmap.entries()) {
        console.log("")
        console.log("Room " + key + ":")
        for(let i in value.classesinroom){
            console.log(value.classesinroom[i].name + " at " + value.classesinroom[i].day + " " + value.classesinroom[i].time);   
        }
     }

    //step4 process each room

    //step 4a break eachroom into days

    //step 4b find open times per day

}
//actual function call
bmap.forEach(processRooms)

console.log("building took: " + (Date.now() - t1) + "ms" )

//PAGES
    // EXPORT AND CLASS-IFY  

//figure our best way to sort rmap and put into array
//delete all redundant objects
//figure out what im actualy doing with loops
//am i creating new objects?
//better print methods and data structure


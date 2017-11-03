var initArray = [];
var newArr = [];
var x;
const mongoose = require('mongoose');
var config = require('../config/database');
const classes = require('../models/course');
const CS = mongoose.model('Courses', classes.CS.Schema);
const buddy = require('../models/classroom');
const ds = mongoose.model('Dept', buddy.DS.Schema);



mongoose.connect(config.database);
// Check to see if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database');
})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected:');
})

CS.find({}, (err, cbb) => {
    initArray = cbb;
    //console.log(initArray[0]);
    for(ii = 0; ii < initArray.length; ii++){
        var dept = {
            dept: initArray[ii].name,
            courses: []
        }
        for(jj = 0; jj < initArray[ii].courses.length; jj++){
            var cls = {
                teacher : initArray[ii].courses[jj].prof,
                num : initArray[ii].courses[jj].num,
                sec : initArray[ii].courses[jj].sec,
                users:[]
            }
            dept.courses.push(cls);
        }
        //console.log(dept);
        newArr.push(dept);
    }
    for(kk = 0; kk < newArr.length; kk++) {
        console.log(newArr[kk]);
    }
    const buddy = require('../models/classroom');
    const ds = mongoose.model('Dept', buddy.DS.Schema);
    ds.collection.drop();
    ds.collection.insert(newArr);
})

ds.find({ 'courses.sec' : '4222' }, {'courses.$.users' : 1}, (err,x) => {
    console.log(x[0].courses[0].users);
    //callback = x[0].courses[0].users
})

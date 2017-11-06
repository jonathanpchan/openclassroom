const mongoose = require('mongoose');
const config = require('../config/database');

//Class schema
const ClassSchema = new mongoose.Schema({
    teacher : {type: String},
    num: {type: String},
    sec : {type: String},
    users: [{
        user: {type: String},
        // add full user schedule
        // add functionality to route to
        //replace an existing schedule when user updates
        oTimes: {type: [String] },
        buddies: {type: [String]}
    }]
})

//Subject schema
const DeptSchema = mongoose.Schema({
    dept: {type: String},
    courses: {type: [ClassSchema] }
});

// Export Room SChema
DS = module.exports = mongoose.model('Dept', DeptSchema );

module.exports = {
    DS: DS
}

module.exports.addUser = function(sect, username, callback){
    DS.find({ 'courses.sec' : '4222' }, {'courses.$' : 1}, callback)
};

module.exports.getClass = function(sect, callback){
    DS.find({ 'courses.sec' : '4222' }, {'courses.$' : 1}, callback)
};

//route for later
router.post('/test', (req,res, next) => {
    Buddy.getClass(req.body.crsID, (err, cls) => {
    return res.json({success: true, cls});
})
})
//
// module.exports.removeUser = function();


const mongoose = require('mongoose');
const config = require('../config/database');
const user = require('../models/user');
const us = mongoose.model('User', user.User.Schema);

//Class schema
const ClassSchema = new mongoose.Schema({
    teacher : {type: String},
    dept: {type: String},
    num: {type: String},
    sec : {type: String},
    students: [{
        user: {type: String},
        oMon: {type: [String]},
        oTues: {type: [String]},
        oWed: {type: [String]},
        oThur: {type: [String]},
        buddies: {type: [String]}
    }],
    isChanged : {type: Boolean, default: false}
})

// Export Room SChema
CS = module.exports = mongoose.model('Classroom', ClassSchema );

module.exports = {
    CS: CS
}

//prototype for addUser. Adds user to class, implement open time data later
//having trouble making callback to show success/failure
module.exports.addUser = function(eMail, callback) {
    //open times algorithm goes here
    us.findOne({ email : eMail }, {schedule : 1, _id : 0}, (err, doc) => {
        sched = doc.schedule
        //query each class in studybuddymodel (foreach)
        sched.forEach( function (crs) {
            //add to classroom
            CS.findOneAndUpdate(
                {"sec" : crs.sec, "students.user" : {$ne: eMail}},
                {
                    $addToSet: {
                        "students": {
                            user: eMail,
                            oMon: [],
                            oTues: [],
                            oWed: [],
                            oThurs: [],
                            buddies: []
                        }
                    }
                }, {new: true}, function(err, doc) {
                    if (err) {
                        console.log("Something went wrong when adding a student!");
                    }
                    if (doc == null) {
                        callback(null);
                        console.log("Student is already in this section!");
                    }
                    else {
                        //set flag to true + return success
                        setFlag(crs.sec, true)
                    }
                }
            )
        })
    callback("worked? maybe")
    })
};

//having trouble making a callback to show success/failure otherwise done
module.exports.removeUser = function(eMail, callback) {
    us.findOne({ email : eMail }, {schedule : 1, _id : 0}, (err, doc) => {
        success = -1
        sched = doc.schedule
        //query each class user's schedule in StudyBuddy Classroom schema
        sched.forEach( function (crs) {
            //add to classroom
            CS.findOneAndUpdate({"sec" : crs.sec},
                {
                    $pull : {
                        "students" : { user : eMail }
                    }
                }, {new: true}, function(err, doc) {
                    if (err) {
                        console.log("Something went wrong when deleting the student!");
                        success = 0
                    } else {
                        setFlag(crs.sec, true)
                        success = 1
                    }
                }
            )
        })

        if(success == 1){
            callback("Success! User deleted.")
        } else if(success == 0) {
            callback("Failure! Something went wrong.")
        } else {
            callback("damn u rly messed up")
        }
    })
};

module.exports.getClass = function(sect, callback){
    CS.find({ 'sec' : sect }, callback)
};

//set flag to true + return success
function setFlag(sec, flag) {
    CS.findOneAndUpdate(
        {sec : sec},
        {
            $set : {
                "isChanged" : flag
            }
        }, {new: true}, function(err, doc) {
            console.log(doc)
        }
    )
}


//route for later
// router.post('/test', (req,res, next) => {
//     Buddy.getClass(req.body.crsID, (err, cls) => {
//     return res.json({success: true, cls});
// })
// })
//
// module.exports.removeUser = function();


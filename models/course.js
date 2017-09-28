const mongoose = require('mongoose');
const config = require('../config/database');

// Class Section Schema
const CourseSchema = mongoose.Schema({
  name : {type: String},
  course : {type: String},
  day : {type: String},
  time : {type: String},
  room : {type: String},
  prof : {type: String},
});

// Room Schema (Mon -> Thurs)
const CoursesSchema = mongoose.Schema({
  name: {type: String},
  courses: {type: [CourseSchema] }
});

// Export ClassSection schema
CS = module.exports = mongoose.model('Courses', CoursesSchema);

// Export CS as CS
module.exports = {
  CS: CS
}

//Finds courses based on subject and course name; ex: BIOL 200
module.exports.findCourses = function(subj, crs, callback) {

    CS.aggregate([
        // Filter possible documents
        { "$match": { "name" : subj } },

        // Unwind the array to denormalize
        { "$unwind": "$courses" },

        // Match specific array elements
        { "$match": { "courses.name": crs } },

        // project only course IDs
        { "$project": {"courses.course": 1} },

        // Group back to array form
        { "$group": {
            "_id": "$_id",
            "courses": { "$push": "$courses" }
        }}
    ], callback)
};
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
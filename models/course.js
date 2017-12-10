const mongoose = require('mongoose');
const config = require('../config/database');

// Class Section Schema
const CourseSchema = mongoose.Schema({
  num : {type: String},
  sec : {type: String}, 
  day : {type: String}, 
  time : {type: String}, 
  room : {type: String}, 
  location : {type: String}, 
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

/**Gets the Buildings based on BuildingSchema name (sorted on name)
 *
 * @param callback Return course names to callback function
 */
module.exports.getCourseNames = function(callback) {
  CS.find({}, {_id : 0, courses : 0}).sort({ name : 1}).exec(callback);
}

/**Gets the Buildings based on BuildingSchema name (sorted on name)
 *
 * @param callback Return all courses to callback function
 */
module.exports.getCourses = function(callback) {
  CS.find({}, {_id : 0}).sort({ name : 1}).exec(callback);
}
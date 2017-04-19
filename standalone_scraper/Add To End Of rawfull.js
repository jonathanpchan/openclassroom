//=================================//
// WRITE BUILDINGS TO THE DATABASE //
//=================================//

// Connect location of database
mongoose.connect(config.database);
// Check to see if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database'+config.database);
})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected');
})
// Require building model to access add function
const build = require('../open-classroom/models/building');
// Grab the schema used by said model
const Building = mongoose.model('Buildings', build.schema);

// FOR LOOP GOES HERE
bmap.forEach((value,key,map)
    // Add a building to the building collection
    build.addBuilding(new Building({
        name: "TODO", // replace with variable name
        room: "Something", // replace with room number
        start: 1, // replace with variable name start time
        end: 2 // Replace with variable name end time
    }));
// END OF FOR LOOP

// Close the database
mongoose.connection.close(function() {
    console.log('Disconnected from database'+config.database);
})
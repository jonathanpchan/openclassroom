// Comes packaged initially
const path = require('path');
// Require for routing
const express = require('express');
// Require to interact with our database
const mongoose = require('mongoose');
// Allows us to make request to api from different domain name
const cors = require('cors');
// Parses incoming requests and grabs the data
const bodyParser = require('body-parser');
// Require for password encryption and decryption
const passport = require('passport');
// Require to know where we are getting our data from
const config = require('./config/database');
// Require for routing
const app = express();
// Require for Chat Database
const http = require('http').Server(app);
const io = require('socket.io')(http);

// =============== Routes ========================
// Requires users and buildings from routes folder
const users = require('./routes/users');
const buildings = require('./routes/buildings');
const roomInfo = require('./routes/roomInfoRoute');
const messages = require('./routes/messages');
const studyBuddy = require('./routes/studybuddies');

// =============== Set Paths ========================
// Make route public so any domain can access it
app.use(cors());

// Set static location (what is seen first)
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Require the config file's passport which specifies authentication
require('./config/passport')(passport);

// The routes for the specific pages
app.use('/users', users);
app.use('/buildings', buildings);
app.use('/roomInfo', roomInfo);
app.use('/messages', messages);
app.use('/studyBuddies', studyBuddy);

// Index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint')
});

// Direct our homepage to be public/index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// =============== Main Database==================
// Connect to database location
mongoose.connect(config.database);

// Check to see if connected to database
mongoose.connection.on('connected', () => {
    console.log('Connected to database'+config.database);
})
// Check to see if connection failed
mongoose.connection.on('error', () => {
    console.log('Database not connected');
})

// =============== Chat Database ====================
io.on('connection', (socket) => {
    // Say socket connected
    console.log('Socket %s connected', socket.id);

    // Say socket disconnected
    socket.on('disconnect', () => {
        console.log('Socket %s disconnected', socket.id)
    });

    // On emit 'join', join room
    socket.on('join room', (room) => {
        if (socket.room != null) {
            console.log("Socket %s left room #%s", socket.id, socket.room)
            socket.leave(socket.room);
        }
        socket.room = room;
        socket.join(socket.room)
        console.log("Socket %s joined room #%s", socket.id, socket.room)
    })

    // On emit 'add message', send to client a message
    socket.on('add message', (id, sender, message) => {
        io.sockets.to(id).emit('message', {'sender': sender, 'timeStamp': new Date() ,'message': message})
    });
});

// =============== Listen to Ports ========================
// Port Number
// const port = 3000; // For testing
const port = process.env.PORT || 8080; // For Deployment
const chatPort = 4020; // TODO: Deployment route

// Takes a port and starts up server
app.listen(port, () => {
    console.log('Server started on port '+port);
})
// Starts up chat server on separate port
http.listen(chatPort, () => {
    console.log('Chat Server started on port '+chatPort);
})
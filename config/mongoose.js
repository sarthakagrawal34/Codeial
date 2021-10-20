//Require the mongoose library
const mongoose = require('mongoose');

// Connecting to the database
mongoose.connect('mongodb://localhost/codeial_development');

// acquire the connection(to check if its successful)
const db= mongoose.connection;

//error
db.on('error', console.error.bind(console, "error connecting to db"));

//up and running then print the message
db.once('open', function(){
    console.log("Connected to database :: MongoDB");
});

module.exports = db;
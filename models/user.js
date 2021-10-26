// requiring mongoose library
const mongoose = require('mongoose');

// defineing user schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter a email'],
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    // For Holding the time at which the user is created and updated at
    timestamps:true
});

//Whenever you create a new object the database should store a field called created
// at and whenever you update that object the database should store a field called
// updated at which gets updated. These two fields are managed by the mongoose
// itself using the timestamps property.


// Declaring a collection for the fields to be stored in db or to tell mongoose that User is the collection of all the schema
const User = mongoose.model('User', userSchema); // Here model defines the collection

// Exporting the module
module.exports = User;
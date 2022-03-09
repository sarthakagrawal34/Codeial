// requiring mongoose library
const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/uploads/users/avatars');

// defining user schema
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
    },
    avatar: {
        type: String,
    }
}, {
    // For Holding the time at which the user is created and updated at
    timestamps:true
});

//Whenever you create a new object the database should store a field called created
// at and whenever you update that object the database should store a field called
// updated at which gets updated. These two fields are managed by the mongoose
// itself using the timestamps property.


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', AVATAR_PATH));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

// static methods
userSchema.statics.uploadedAvatar = multer({ storage: storage }).single('avatar');
userSchema.statics.avatarPath = AVATAR_PATH;

// Declaring a collection for the fields to be stored in db or to tell mongoose that User is the collection of all the schema
const User = mongoose.model('User', userSchema); // Here model defines the collection

// Exporting the module
module.exports = User;
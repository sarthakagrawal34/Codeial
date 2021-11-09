 // requiring mongoose library
const mongoose = require('mongoose');

// Defining Post Schema that how will it be stored in MongoDB
const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    // Access the user schema
    user: {
        // type will be the user's id as it is always unique
        type: mongoose.Schema.Types.ObjectId,
        // ref is used to tell to refer to which schema i.e userSchema
        ref: 'User'
    }

},{
    // For Holding the time at which the post is created and updated at
    timestamps:true
});
//Whenever you create a new object the database should store a field called created
// at and whenever you update that object the database should store a field called
// updated at which gets updated. These two fields are managed by the mongoose
// itself using the timestamps property.

// Declaring a collection for the fields to be stored in db or to tell mongoose that User is the collection of all the schema
const Post = mongoose.model('Post', postSchema); // Here model defines the collection

// Exporting the module
module.exports = Post;
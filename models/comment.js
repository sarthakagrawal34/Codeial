// requiring mongoose library
const mongoose = require('mongoose');

// Defining Comment Schema that how will it be stored in MongoDB
const commentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    // Accessing the user schema as the comment belong to a user
    user: {
      // type will be the user's id as it is always unique
      type: mongoose.Schema.Types.ObjectId,
      // ref is used to tell to refer to which schema i.e userSchema
      ref: "User",
    },
    // Accessing the post schema as the comment belong to a post
    post: {
      // type will be the post's id as it is always unique
      type: mongoose.Schema.Types.ObjectId,
      // ref is used to tell to refer to which schema i.e postSchema
      ref: "Post",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ]
  },
  {
    // For Holding the time at which the comment is created and updated at
    timestamps: true,
  }
);


// Declaring a collection for the fields to be stored in db or to tell mongoose that User is the collection of all the schema
const Comment = mongoose.model('Comment', commentSchema); // Here model defines the collection


// Exporting the module
module.exports = Comment;
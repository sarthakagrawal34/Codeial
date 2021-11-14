// Requiring the comments schema
const Comment = require('../models/comment');

// Requiring the post schema
const Post = require('../models/post');

//Exporting module to browser when the route request create controller
module.exports.create = function(req,res){
    // Find the post that does it exist or not when the user is creating the comment
    Post.findById(req.body.post, function(err,post){
        // if error in finding the post
        if(err){
            console.log('error in finding post'); return;
        }
        // If the post is found create the comment for it
        if(post){
            Comment.create({
                content: req.body.content,
                post: req.body.post,
                // storing the signed-in user's id
                user: req.user._id
            }, function(err,comment){
                // if error in creating comment
                if(err){
                    console.log('error in creating comment'); return;
                }
                // If successfully created the comment then add the comment to the post
                post.comments.push(comment);
                // Save the comment
                post.save();
                // Redirecting to home page
                res.redirect('/');
            });
        }
    });
}
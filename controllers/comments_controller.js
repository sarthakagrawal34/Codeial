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

// Creating action for deleting the comments made on the post
module.exports.destroy = function(req,res){
    // first of all find that the comment deleting exists or not
    Comment.findById(req.params.id, function(err,comment){
        // if error in finding the comment
        if(err){
            console.log('Error in finding the comment to be deleted');
            return;
        }
        // if the one who is deleting the comment is the owner of the comment
        if(comment.user == req.user.id){
            // Store the id of the post in which the comment is deleting as we have to later delete the comment from the post also
            let postId = comment.post;
            // if founded the comment to be deleted
            comment.remove();

            // Now delete the comment id from the post's comment array so we use update as we have to update the comment array in the post
            Post.findByIdAndUpdate(postId, { $pull: {comment:req.params.id}}, function(err,post){
                // if error in updating
                if(err){
                    console.log('error in updating post');
                    return;
                }
                // if successful
                return res.redirect('back');
            });
        }else{
            // if the comment deleting user is not the owner of the comment
            return res.redirect('back');
        }
    });
}
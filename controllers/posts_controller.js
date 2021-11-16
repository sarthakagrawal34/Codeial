// Requiring the Post schema
const Post = require('../models/post');

// Requiring the comment schema as we require in deleting the comment
const Comment = require('../models/comment');

//Exporting module to browser when the route request create controller
module.exports.create = function(req,res){
    Post.create({
        content: req.body.content,
        // storing the signed-in user's id 
        user: req.user._id
    }, function(err,post){
        if(err){
            console.log('error in creating posts'); return;
        }
        return res.redirect('back');
    });
}

// Creating action for deleting the posts
module.exports.destroy = function(req,res){
    // First of all see the post to be delted exists or not
    //params have the id passed as we passed the id through route like /posts/destroy/:id
    Post.findById(req.params.id, function(err,post){
        // if error in finding post
        if(err){
            console.log('Error in finding post to delete');
            return;
        }
        // if post founded then we have to check whether the owner of post is deleting or someone else as owner can only delete
        // post.user gives id of the owner of post as string and req.user.id also gives the user's id as string 
        // .id means converting the object id into string
        if(post.user == req.user.id){
            // delete the post
            post.remove();

            // delete the comment also of the same post
            Comment.deleteMany({post:req.params.id}, function(err){
                // if error in deleting the comment
                if(err){
                    console.log('Error in deleting the comment');
                    return;
                }
                // if successful in deleting the post and comment
                return res.redirect('back');
            });
        }else{
            // if the user deleting the post is not the owner of the post
            return res.redirect('back');
        }

    })

}
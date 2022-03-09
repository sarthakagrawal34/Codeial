// Requiring the Post schema
const Post = require('../models/post');

// Requiring the comment schema as we require in deleting the comment
const Comment = require('../models/comment');

//Exporting module to browser when the route request create controller
module.exports.create = async function(req,res){
    try{
        // The await request
        let post = await Post.create({
            content: req.body.content,
            // storing the signed-in user's id 
            user: req.user._id
        });

        if (req.xhr) {
            return res.status(200).json({
                data: {
                    post: post
                },
                message: "Post created!"
            });
        }
        req.flash('success', 'Post Created!');
        // When await request is completed return to the browser
        return res.redirect('back');
    }catch(err){
        // console.log('Error', err);
        req.flash('error', err);
        return res.redirect('back');
    }
}

// Creating action for deleting the posts
module.exports.destroy = async function(req,res){

    try{
        // First of all see the post to be delted exists or not
        //params have the id passed as we passed the id through route like /posts/destroy/:id
        let post = await Post.findById(req.params.id);

        // if post founded then we have to check whether the owner of post is deleting or someone else as owner can only delete
        // post.user gives id of the owner of post as string and req.user.id also gives the user's id as string 
        // .id means converting the object id into string
        if(post.user == req.user.id){
            // delete the post
            post.remove();

            // delete the comment also of the same post and making it a await request
            await Comment.deleteMany({ post: req.params.id });
            
            if (req.xhr) {
                return res.status(200).json({
                    data: {
                        post_id: req.params.id,
                    },
                    message: "Post deleted successfully",
                })
            }

            req.flash('success', 'Post and associated comments deleted!');
            // if successful in deleting the post and comment 
            return res.redirect('back');

        }else{
            // if the user deleting the post is not the owner of the post
            req.flash('error', 'You cannot delete this post!');
            return res.redirect('back');
        }
    }
    catch(err){
        // console.log('Error', err);
        req.flash('error', err);
        return res.redirect('back');
    }
}
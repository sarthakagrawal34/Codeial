// Requiring the Post schema
const Post = require('../models/post');

//Exporting module to browser when the route request create controller
module.exports.create = function(req,res){
    Post.create({
        content: req.body.content,
        // storing the signed-in user's id 
        user: req.user._id
    }, function(err,post){
        if(err){
            console.log('error in creatimg posts'); return;
        }
        return res.redirect('back');
    });
}
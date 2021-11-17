// Requiring the Post schema
const Post = require('../models/post');

// Requiring the User scema
const User = require('../models/user');

//Exporting module to browser when the route request this controller using async + await
// Declaring the function to be asynchronous 
module.exports.home= async function(req,res){
    // Using try and catch method so as to not writing error statement again and again
    try{
        //Populating the referred object that is user id of each post so as to use the user and also tell to await
        // first await request
        let posts = await Post.find({})
        .populate('user')
        // populating the comments so as to display the content and user of the comment
        .populate({
            path: 'comments',
            // populating the user of the comment
            populate: {
                path: 'user'
            }
        });

        // 2nd await request
        let users = await User.find({});
        
        // returning the action to the browser when the above two await requests are completed
        return res.render('home', {
            title: "Codeial | Home",
            posts: posts,
            all_users: users
        });
    }catch(err){
        console.log('Error', err);
        return;
    }
}


// Using then statement will also do the same purpose
// Post.find({}).populate('comments').then(function());

// Using promises for the same purpose
// let posts = Post.find({}).populate('comments');
// posts.then();


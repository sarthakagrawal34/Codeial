// Requiring the Post schema
const Post = require('../models/post');

// Requiring the User scema
const User = require('../models/user');

//Defining action name and it's function
    // module.exports.actionName=function(req,res){}

//Exporting module to browser when the route request this controller
module.exports.home=function(req,res)
{
    // res.end('<h1>Express is up for Codeial!</h1>');

    // console.log(req.cookies);
    // res.cookie('user_id',29);

    //Rendering the post on to the home page
    // Post.find({},function(err,posts){
        // Now use home.ejs file for rendering
    //     return res.render('home', {
    //         title: "Codeial | Home",
    //         posts: posts
    // })
    // });

    //Populating the referred object that is user id of each post so as to use the user
    Post.find({})
    .populate('user')
    // populating the comments so as to display the content and user of the comment
    .populate({
        path: 'comments',
        // populating the user of the comment
        populate: {
            path: 'user'
        }
    })
    // executing the action
    .exec(function(err,posts){
        User.find({}, function (err,users) {
            // Now use home.ejs file for rendering
            return res.render('home', {
                title: "Codeial | Home",
                posts: posts,
                all_users: users
            });
        });
    });
    
}


// Another action for home controller
// module.exports.settings = function(req,res){
//     res.end('<a href="#">Home Setting</a>');
// }
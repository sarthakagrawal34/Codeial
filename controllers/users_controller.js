//Require the models so as to use the database
const User = require('../models/user');


//Exporting module to browser when the route request this controller
module.exports.profile = function(req,res){
    // res.end('<h1>User Profile</h1>');

    // Now use users.ejs file for rendering
    return res.render('users',{
        title: "Users Profile"
    });
};


// 2nd action for rendering sign up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    });
}

// 3rd action for sign in
module.exports.signIn = function(req,res){
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    });
}

// Get the sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err,user){
        if(err){console.log('error in finding a user while signing up'); return;}

        if(!user){
            User.create(req.body,function(err,user){
                if(err){console.log('error in creating a user while signing up'); return;}

                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('back');
        }
    })
}

// Sign in and create a session for a user and redirect back
module.exports.createSession = function(req,res){
    return res.redirect('/');
}
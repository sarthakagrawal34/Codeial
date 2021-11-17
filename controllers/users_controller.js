//Require the models so as to use the database
const User = require('../models/user');


//Exporting module to browser when the route request this controller
// let's not use async + await in this
module.exports.profile = function(req,res){
    User.findById(req.params.id, function (err,user) {
        return res.render('users',{
            title: "User_profile",
            profile_user: user
        });
    });
}

// Creating a action for the update profile action
// let's not use async + await in this
module.exports.update = function(req,res){
    // checking again if the same user which is signed-in is making the update as he can make changes in html
    if( req.user.id == req.params.id){
        //{name: req.body.name, email: req.body.email} can also be used instead of req.body
        User.findByIdAndUpdate(req.params.id, req.body, function(err,user){
            if(err){console.log('error in finding a user'); return;}
            return res.redirect('back');
        });
    }else{
        // if unauthorized request
        return res.status(401).send("Unauthorized");
    }
}


// 2nd action for rendering sign up page
// let's not use async + await in this
module.exports.signUp = function(req,res){
    // If the user is already signed-in then sent it to the profile page
    if(req.isAuthenticated()){ // Here isAuthenticate() is a global function so can we use here
        console.log("User is already signed-in so why the need to again sign-up?");
        return res.redirect('./profile');
    }
    // else show the user sign-up page to do his signup
    return res.render('user_sign_up',{
        title: "Codeial | Sign Up"
    });
}

// 3rd action for sign in
// let's not use async + await in this
module.exports.signIn = function(req,res){
    // If the user is already signed-in then sent it to the profile page
    if(req.isAuthenticated()){
        console.log("User is already signed-in so why the need to again sign-in?")
        return res.redirect('./profile');
    }

    // else show the user sign-in page to do his signup
    return res.render('user_sign_in',{
        title: "Codeial | Sign In"
    });
}

// Get the sign up data
// let's not use async + await in this
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

// Sign in and create a session for a user and redirect back to the home page
// let's not use async + await in this
module.exports.createSession = function(req,res){
    // redirect to homepage
    return res.redirect('/');
}

// Sign out and destroy session of the user and return back to home page
// let's not use async + await in this
module.exports.destroySession = function(req,res){
    // Function to do logout. The function is provided by the passport library used
    req.logout();

    // redirect to home page for signing up or signing in
    return res.redirect('/');
}
// require the passport library
const passport = require('passport');

// require the passport-local strategy
const Localstrategy = require('passport-local').Strategy;

//Require the models so as to use the database
const User = require('../models/user');

// authentication using passport
passport.use(new Localstrategy(
    {
        usernameField: 'email'
    },
    // the call back function is named as done
    function(email, password, done){
        // find a user and establish a identity
        User.findOne({email:email}, function(err,user){
            //If error in finding the user
            if(err){
                console.log('Error in finding user --> Passport'); 
                return done (err);
            }
            
            //If user found two cases arise password didn't match and password matches
            if(!user || user.password!=password){
                console.log('Invalid Username/password');
                // Note done require two argument one is for error and one tells the authentification setup or not
                // If not then pass false else pass user
                return done(null, false);
            }
            // User found and authentification is done 
            //and send it to the serializer which serialize the key to the cookie
            console.log('Valid User') 
            return done(null,user);
        });
    }  
));

// Serializing the user to decide which key is to be kept in the cookies and send to the browser then browser deserialize it
passport.serializeUser(function(user,done){
    // we are storing id property in the cookie and then it is send to the middleware in index.js for encrypting the cookie
    done(null,user.id);
})


// deserializing the user from the key in the cookies so as to display on the browser
passport.deserializeUser(function(id,done){
    // deserialize the stored key from the cookie by finding the user from the id and deserializing it
    User.findById(id, function(err,user){
        //If error in finding the user
        if(err){
            console.log('Error in finding user --> Passport'); 
            return done (err);
        }
        // else return the user
        return done(null,user);
    });
});

// check if the user is authenticated and setting up the middleware which goes to next if the user is authenticated
passport.checkAuthentication = function(req, res, next){
    // if the user is signed-in then pass on the request to the next function (controller's action)
    if(req.isAuthenticated()){
        //passing onto next
        return next();
    }

    // if the user is not signed-in send the user to sign in page
    return res.redirect('/users/sign-in');
}

// set the users for the views using the setAuthenticatedUser function
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        //req.user contains the current signed in user from the session cookie 
        //and we are just sending it to the locals for storing the user details in the local so to use it
        res.locals.user = req.user;

    }
    // call next function so as to go to the views
    next();
}


// finally exporting passport module
module.exports = passport;
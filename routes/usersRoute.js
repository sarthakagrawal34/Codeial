// Including exist express library
const express = require('express');

// Calling express router
const router = express.Router();

// Including passport library
const passport = require('passport');

//Requiring the users_controller
const usersController = require('../controllers/users_controller');

//To test that whether the file is loaded
console.log("Users Router loaded");

//To access the user controller action when route is /profile/:id and get the ejs file so we used get not post
router.get('/profile/:id', passport.checkAuthentication, usersController.profile);
// we provide a middleware so as to check whether the user is signed-in or not. 
//If not then profile page will not open

//To access the user controller action when route is /update/:id 
router.post('/update/:id', passport.checkAuthentication, usersController.update);

//To access the user controller action when route is /sign-up and get the ejs file so we used get not post
router.get('/sign-up', usersController.signUp);

//To access the user controller action when route is /sign-in and get the ejs file so we used get not post
router.get('/sign-in', usersController.signIn);

//To access the user controller action when route is /create and post it in the database
router.post('/create', usersController.create);

// To access the user controller when route is /create-session 
//use passport as a middlewaare to authenticate
router.post('/create-session', passport.authenticate(
    // strategy is local so we give local
    'local',
    // when there is failure redirect to /users/sign-in page
    {failureRedirect: '/users/sign-in'}
), usersController.createSession);

// To access the user controller when route is /sign-out
router.get('/sign-out', usersController.destroySession);


// Using google strategy routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// Route where the information will come
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/users/sign-in" }), usersController.createSession
);

//Exporting the module
module.exports = router;
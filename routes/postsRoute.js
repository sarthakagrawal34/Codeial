// Including exist express library
const express = require('express');

// Calling express router
const router = express.Router();

//Requiring passport as it will be used
const passport = require('passport');

// Requiring the users_controller
const postsController = require('../controllers/posts_controller');

// To test that whether the file is loaded
console.log("Posts Router loaded");

// To access the posts controller action create and also check if the user is signed-in or not by checkAuthentication() function
router.post('/create', passport.checkAuthentication, postsController.create);

// To access the posts controller action destroy and also check if the user is signed-in or not by checkAuthentication() function
router.get('/destroy/:id', passport.checkAuthentication, postsController.destroy);


//Exporting the module
module.exports = router;
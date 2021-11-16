// Including exist express library
const express = require('express');

// Calling express router
const router = express.Router();

// Requiring passport as it will be used
const passport = require('passport');

// Requiring the users_controller
const commentsController = require('../controllers/comments_controller');

// To test that whether the file is loaded
console.log("Comments Router loaded");

// To access the comments controller action create and also check if the user is signed-in or not by checkAuthentication() function
router.post('/create', passport.checkAuthentication , commentsController.create);

// To access the comments controller action destroy and also check if the user is signed-in or not by checkAuthentication() function
router.get('/destroy/:id', passport.checkAuthentication, commentsController.destroy);

//Exporting the module
module.exports = router;
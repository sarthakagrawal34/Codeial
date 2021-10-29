// Including exist express library
const express = require('express');

// Calling express router
const router = express.Router();

//Requiring the users_controller
const usersController = require('../controllers/users_controller');

//To test that whether the file is loaded
console.log("Users Router loaded");

//To access the user controller action when route is /profile and get the ejs file so we used get not post
router.get('/profile', usersController.profile);

//To access the user controller action when route is /sign-up and get the ejs file so we used get not post
router.get('/sign-up', usersController.signUp);

//To access the user controller action when route is /sign-in and get the ejs file so we used get not post
router.get('/sign-in', usersController.signIn);

//To access the user controller action when route is /create and post it in the database
router.post('/create', usersController.create);

//To access the user controller action when route is /create-session and post it in the database
router.post('/create-session', usersController.createSession);

//Exporting the module
module.exports = router;
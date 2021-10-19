// Including exist express library
const express = require('express');

// Calling express router
const router = express.Router();

//Requiring the users_controller
const usersController = require('../controllers/users_controller');

//To test that whether the file is loaded
console.log("Users Router loaded");

//To access the home controller action
router.get('/profile', usersController.profile);


//Exporting the module
module.exports = router;
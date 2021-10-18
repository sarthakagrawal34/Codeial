// Including exist express library
const express = require('express');

// Calling express router
const router = express.Router();

//Requiring the home_controller
const homeController = require('../controllers/home_controller');

//To test that whether the file is loaded
console.log("Router loaded");

//To access the home controller action
router.get('/', homeController.home);


//Exporting the module
module.exports = router;
// Including exist express library
const express = require('express');

// Calling express router
const router = express.Router();

//Requiring the home_controller
const homeController = require('../controllers/home_controller');

//To test that whether the file is loaded
console.log("Home Router loaded");

//To access the home controller action
router.get('/', homeController.home);

//To access the home controller setting action
// router.get('/setting', homeController.settings);

//To access the user controller action
router.use('/users', require('./usersRoute'));

//To access the post controller action
router.use('/posts', require('./postsRoute'));

//For any further routes, access from here
    //router.use('/routerName', require('./routerFile'));


//Exporting the module
module.exports = router;
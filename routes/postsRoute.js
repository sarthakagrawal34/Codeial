// Including exist express library
const express = require('express');

// Calling express router
const router = express.Router();

//Requiring the users_controller
const postsController = require('../controllers/posts_controller');

//To test that whether the file is loaded
console.log("Posts Router loaded");

//To access the posts controller action create
router.post('/create', postsController.create);


//Exporting the module
module.exports = router;
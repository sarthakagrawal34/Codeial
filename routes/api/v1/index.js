// Including exist express library
const express = require("express");
// Calling express router
const router = express.Router();

router.use('/posts', require('./posts'));
router.use('/users', require ('./users'));

module.exports = router;

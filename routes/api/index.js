// Including exist express library
const express = require("express");
// Calling express router
const router = express.Router();

router.use('/v1', require('./v1'));

module.exports = router;
const express = require("express");
// Import the model to use its database functions
const burger = require("../models/burger.js");

const router = express.Router();


// Export routes for server.js to use
module.exports = router;
const express = require("express");
// Import the model to use its database functions
const burger = require("../models/burger.js");

const router = express.Router();

// Routes
router.get("/", function(req, res) {
    burger.all(function(data) {
      let hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burgers", function(req, res) {
    burger.insert([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


// Export routes for server.js to use
module.exports = router;
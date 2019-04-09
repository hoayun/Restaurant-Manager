var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var tables = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  tables.all(function(data) {
    var hbsObject = {
      tables: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/cats", function(req, res) {
  //  console.log(req.body);
  tables.create(["table_number"],[req.body.table_number,], function(data) {
    // Send back the ID of the new quote
   // res.redirect("/");
    res.json({data});
    
  });
});

router.put("/api/cats/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  tables.update({
    ready: req.body.ready
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      console.log(result.changedRows);
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;
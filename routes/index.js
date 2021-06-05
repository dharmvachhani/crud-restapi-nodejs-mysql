var express = require("express");
var router = express.Router();

var createController = require("../controllers/createController");
var readController = require("../controllers/readController");
var updateController = require("../controllers/updateController");
var deleteController = require("../controllers/deleteController");

router.get("/", function (req, res, next) {
  res.render("index", { title: "API" });
});

router.post("/user", createController);

router.get("/user", readController.read);

router.get("/user/:id", readController.readOne);

router.patch("/user/:id", updateController);

router.delete("/user/:id", deleteController);

module.exports = router;

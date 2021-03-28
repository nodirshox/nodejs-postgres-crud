var contactStorage = require("../storage/postgres/contact");
var express = require("express");
var router = express.Router();

// contacts
router.get("/contact", contactStorage.find);
router.post("/contact", contactStorage.create);

module.exports = router;
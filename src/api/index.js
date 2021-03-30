var contactStorage = require("../storage/postgres/contact");
var express = require("express");
var router = express.Router();

// contacts
router.get("/contact", contactStorage.find);
router.post("/contact", contactStorage.create);
router.get("/contact/:contact_id", contactStorage.get);
router.put("/contact/:contact_id", contactStorage.update);
router.delete("/contact/:contact_id", contactStorage.delete);

module.exports = router;
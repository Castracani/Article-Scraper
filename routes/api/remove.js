const router = require("express").Router();
const removeController = require("../../controllers/remove");

router.get("/", removeController.clearDB);

module.exports = router;

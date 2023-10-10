const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

router.get("/", homeController.getIndex);
router.post("/new", homeController.createTicket);

module.exports = router;

const express = require("express");
const router = express.Router();

const dashboardController = require("../controllers/dashboardController");

router.get("/edit/:email", dashboardController.getUserByEmail);

module.exports = router;

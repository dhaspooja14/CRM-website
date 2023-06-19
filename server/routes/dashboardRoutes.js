const express = require("express");
const router = express.Router();
const dashboardController = require("../controllers/dashboardController");

router.get("/formuser", dashboardController.getFormUser);
router.post("/formuser", dashboardController.saveFormUser);
router.get("/users", dashboardController.getUserCount);
router.get("/edit/:email", dashboardController.getUserByEmail);
router.post('/edit/:email', dashboardController.editUser)
router.delete('/edit/:email', dashboardController.deleteUser);

module.exports = router;
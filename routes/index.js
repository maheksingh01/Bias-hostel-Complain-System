const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");


router.get("/", homeController.home);
router.use("/registration", require("./student_registration"));
router.use("/login", require("./student_login"));
router.use("/admin", require("./admin"));
router.use("/complain", require("./complain"));
router.use("/logout", require("./logout"));


console.log("router loaded");


module.exports = router;

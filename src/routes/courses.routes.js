var express = require("express");
var router = express.Router();
const courseController = require("../app/controllers/CourseController");

//Để create bên trên để acces vào create trước slug khác
router.get("/create", courseController.create);
router.post("/store", courseController.store);
router.get("/:slug", courseController.show);

module.exports = router;

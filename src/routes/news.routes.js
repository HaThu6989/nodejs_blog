var express = require("express");
var router = express.Router();
const newsController = require("../app/controllers/NewsController");

// Route luôn đọc từ trên xuống => "/" dưới cùng
router.get("/:slug", newsController.show);
router.get("/", newsController.index);

module.exports = router;

var express = require('express');
var router = express.Router();
const newsController = require('../app/controllers/NewsController');

// Route luôn đọc từ trên xuống => "/" dưới cùng
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;

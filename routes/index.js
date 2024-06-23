var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(process.cwd(), "public/index.html"))
});

console.log("Server open in:", "http://localhost:8848")

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hiiiiiiiiiiiiii");
  res.render('index', { title: 'Express' });
});
router.delete('/', function(req, res, next) {
  res.send("hii");
});
module.exports = router;

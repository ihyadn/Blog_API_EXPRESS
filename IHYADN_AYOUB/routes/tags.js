var express = require('express');
var router = express.Router();
var Tags=require("../respositories/tags.js");

/* GET users listing. */
router.get('/', async function(req, res, next) {
res.send(await Tags.getTags())
});

module.exports = router;

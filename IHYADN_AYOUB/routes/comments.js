var express = require('express');
var router = express.Router();
var Comments=require("../respositories/comments.js");

/* GET users listing. */
router.get('/', async function(req, res, next) {
res.send(await Comments.getComments())
});

module.exports = router;

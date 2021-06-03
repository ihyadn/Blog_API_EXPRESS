var express = require('express');
var router = express.Router();
var Articles=require("../respositories/articles.js");

/* GET users listing. */
router.get('/:id/comments', async function(req, res, next) {
    const {id}=req.params;
    res.send(await Articles.getArticleComments(id))
});
router.get('/:id/tags', async function(req, res, next) {
    const {id}=req.params;
    res.send(await Articles.getArticleTags(id))
});
module.exports = router;
var express = require('express');
var router = express.Router();
var Articles=require("../respositories/articles.js");

/* GET users listing. */
router.get('/', async function(req, res, next) {
    res.send(await Articles.getArticles())
});
router.get('/:id/comments', async function(req, res, next) {
    const {id}=req.params;
    res.send(await Articles.getArticleComments(id))
});
router.get('/:id/tags', async function(req, res, next) {
    const {id}=req.params;
    res.send(await Articles.getArticleTags(id))
});

router.delete('/:id',async (req, res)=>
{
  const {id}=req.params;
  res.send(Articles.deleteArticle(id));
});
module.exports = router;
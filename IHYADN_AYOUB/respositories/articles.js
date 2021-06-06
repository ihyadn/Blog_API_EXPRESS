const Sequelize=require('sequelize');
const { Comment,Article,Tag } = require('../models');

module.exports = {
    getArticles(id) {
    return Article.findAll()
 },
    getArticleComments(id) {
    return Comment.findAll({
        
        where:{ArticleId:id}
    })
 },
 getArticleTags(id) {
    return Article.findAll({
        
        include:[
            {
                model:Tag,
                required:true,
                attributes:[
                    "id",
                    "name"
                ]
            },
            
        ],
        where:{id:id},
        attributes:[]
    })
 },
 deleteArticle(id){
    try {
        
        const deleted = Article.destroy({
            where: { id: id }
        });
        if (deleted) {
            return "Article deleted";
        }
        throw new Error("Article not found");
    } catch (error) {
        return error.message;
    }
},
}

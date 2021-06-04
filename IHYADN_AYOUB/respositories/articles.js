const Sequelize=require('sequelize');
const { Comment,Article,Tag } = require('../models');

module.exports = {
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
            },
            
        ],
        where:{id:id},
        attributes:[]
    })
 },
}

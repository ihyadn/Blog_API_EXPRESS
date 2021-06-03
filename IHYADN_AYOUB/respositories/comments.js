const Sequelize=require('sequelize');
const { Comment,Article } = require('../models');
module.exports = {
    getComments() {
    return Article.findAll({
        attributes:[
            'title' ,
            [Sequelize.fn("COUNT", Sequelize.col("Article.id")), "comments_count"]  
        ],
        include: [{
            model:Comment,
            required:true,
            attributes:[

            ]
        }],
        group: ['Article.id']

    })
 },
}
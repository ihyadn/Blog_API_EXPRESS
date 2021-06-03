const Sequelize=require('sequelize');
const { Tag,Article } = require('../models');
module.exports = {
    getTags() {
    return Article.findAll({
        attributes:[
            'title' ,
            [Sequelize.fn("COUNT", Sequelize.col("Article.id")), "Tags_count"]  
        ],
        include: [{
            model:Tag,
            required:true,
            attributes:[

            ]
        }],
        group: ['Article.id']

    })
 },
}
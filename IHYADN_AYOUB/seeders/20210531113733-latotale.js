'use strict';
const faker = require('faker');
var id=1999;
const users = [...Array(21)].map((user) => (
  {
    id:++id,
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    role: faker.random.arrayElement(["admin","author","guest"]),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
var user_id=2000;
var id=1;
const articles = [...Array(21)].map((article,key) => (
	[...Array(Math.floor(Math.random() * (10 - 2 + 1))+2)].map((art) => (
	{
          id:id++,
          title:faker.name.title(),
          content:faker.lorem.text(),
    			published:faker.datatype.boolean(),
			    createdAt: new Date(),
			    updatedAt: new Date(),
			    UserId:key+user_id
  }))
))

const tags = [...Array(30)].map((tag,key) => (
  {
    id:key+1,
    name:faker.lorem.word()+" "+faker.lorem.word()+" "+faker.lorem.word(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

var articles_lenght=0;
for(var i=0;i<21;i++)
{
  articles_lenght+=articles[i].length;
}
const articletags = [...Array(articles_lenght)].map((article,key) => (
	[...Array(Math.floor(Math.random() * (6 - 2 + 1))+2)].map((art_tag) => (
	{
      createdAt: new Date(),
			updatedAt: new Date(),
			ArticleId:key+1,
			TagId:Math.floor(Math.random() * (30 - 1 + 1))+1
  }))
))

const comments = [...Array(articles_lenght)].map((article,key) => (
	[...Array(Math.floor(Math.random() * (10 - 0 + 1)))].map((art) => (
	{
      content:faker.lorem.text(),
			createdAt: new Date(),
			updatedAt: new Date(),
			ArticleId:key+1
  }))
))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', users, {});
    for(var i=0;i<21;i++)
    {
      await queryInterface.bulkInsert('articles', articles[i], {});
    }
    queryInterface.bulkInsert('tags', tags, {});
    
    for(var i=0;i<articles_lenght;i++)
    {
      queryInterface.bulkInsert('comments', comments[i], {});
    }
    for(var i=0;i<articles_lenght;i++)
    {
      queryInterface.bulkInsert('articletags', articletags[i], {});
    }

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

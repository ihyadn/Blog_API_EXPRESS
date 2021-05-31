'use strict';
const id=1999;
const users = [...Array(20)].map((user) => (
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
const tags = [...Array(20)].map((tag) => (
  {
    name:faker.word()+faker.word()+faker.word(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
const articles = [...Array(20)].map((article) => (
  {
    name:faker.word()+faker.word()+faker.word(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users, {}),
           queryInterface.bulkInsert('tags', tags, {});
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

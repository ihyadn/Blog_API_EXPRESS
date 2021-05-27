'use strict';
const faker = require('faker');
const users = [...Array(20)].map((user) => (
  {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(8),
    role: faker.random.arrayElement(["admin","author","guest"]),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users, {});
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

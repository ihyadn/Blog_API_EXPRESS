'use strict';
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
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
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

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('themes', [
       {
         "id": 1,
         "title": "Механічний рух",
         "description": ""
       },
       {
         "id": 2,
         "title": "Траєкторія і вектор переміщення",
         "description": ""
       }
     ], {});

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

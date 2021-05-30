'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('materials', [
       {
         "id": 1,
         "title": "Механічний рух",
         "description": null,
         "next_material_id": 2,
         "theme_id": 1,
         "resource_id": 1,
         "order": 1
       },
       {
         "id": 2,
         "title": "Механічний рух",
         "description": null,
         "next_material_id": 3,
         "theme_id": 1,
         "resource_id": 4,
         "order": 1
       },
       {
         "id": 3,
         "title": "Механічний рух",
         "description": null,
         "next_material_id": 4,
         "theme_id": 1,
         "resource_id": 5,
         "order": 1
       },
       {
         "id": 4,
         "title": "Механічний рух",
         "description": null,
         "next_material_id": null,
         "theme_id": 1,
         "resource_id": 2,
         "order": 1
       },
       {
         "id": 5,
         "title": "Траєкторія і вектор переміщення",
         "description": null,
         "next_material_id": 6,
         "theme_id": 2,
         "resource_id": 6,
         "order": 1
       },
       {
         "id": 6,
         "title": "Траєкторія і вектор переміщення",
         "description": null,
         "next_material_id": 7,
         "theme_id": 2,
         "resource_id": 7,
         "order": 1
       },
       {
         "id": 7,
         "title": "Траєкторія і вектор переміщення",
         "description": null,
         "next_material_id": null,
         "theme_id": 2,
         "resource_id": 8,
         "order": 1
       },
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

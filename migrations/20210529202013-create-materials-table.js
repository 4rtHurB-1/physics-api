'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('materials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      next_material_id: {
        type: Sequelize.INTEGER,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('materials');
  }
};

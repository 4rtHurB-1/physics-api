'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('resources', {
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
      type: {
        type: Sequelize.STRING,
      },
      text: {
        type: Sequelize.TEXT,
      },
      data: {
        type: Sequelize.JSONB,
      },
      url: {
        type: Sequelize.STRING,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('resources');
  }
};

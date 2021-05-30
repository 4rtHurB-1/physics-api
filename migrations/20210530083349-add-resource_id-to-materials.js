'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('materials', 'resource_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'resources',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('materials', 'resource_id');
  }
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('materials', 'theme_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'themes',
        key: 'id'
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('materials', 'theme_id');
  }
};

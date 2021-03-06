'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('materials', 'order', {
      type: Sequelize.INTEGER,
      defaultValue: 1,
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('materials', 'order');
  }
};

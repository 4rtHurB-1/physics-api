'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable('material_resources', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      resource_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'resources',
          key: 'id'
        }
      },
      material_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'materials',
          key: 'id'
        }
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('material_resources');
  }
};

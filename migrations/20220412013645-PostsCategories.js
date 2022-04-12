'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('PostsCategories', {
    postId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    },
    categoryId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    },
   })
  },

  down: async (queryInterface) => {
   return queryInterface.dropTable('PostsCategories');
  }
};

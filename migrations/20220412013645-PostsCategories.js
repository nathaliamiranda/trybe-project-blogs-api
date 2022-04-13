'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('PostsCategories', {
    postId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'BlogPosts',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true,
    },
    categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Categories', 
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    primaryKey: true,
    },
   })
  },

  down: async (queryInterface) => {
   await queryInterface.dropTable('PostsCategories');
  }
};

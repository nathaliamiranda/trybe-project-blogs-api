'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable('BlogPosts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    userId: {
       type: Sequelize.INTEGER, 
       allowNull: false,
       references: { model: 'User',foreignKey: 'id'},
    },
    published: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated: {
      type: Sequelize.DATE,
      allowNull: false,
    },
   })
  },

  down: async (queryInterface) => {
   return queryInterface.dropTable('BlogPosts');
  }
};

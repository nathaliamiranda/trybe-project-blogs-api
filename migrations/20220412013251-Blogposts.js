'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('BlogPosts', {
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
       references: { model: 'Users', foreignKey: 'id'},
       defaultValue: 1,
       onUpdate: 'CASCADE',
       onDelete: 'CASCADE',
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
   await queryInterface.dropTable('BlogPosts');
  }
};

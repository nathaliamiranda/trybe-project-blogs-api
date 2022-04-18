const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  userId: {
     type: DataTypes.INTEGER, 
     foreignKey: true,
  },
  published: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated: {
    type: DataTypes.DATE,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const BlogPost = sequelize.define('BlogPost',
    Attributes,
    {
      timestamps: false,
      tableName: 'BlogPosts',
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
      };
    
  return BlogPost;
};
const { DataTypes } = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
};

module.exports = (sequelize) => {
  const Category = sequelize.define('Category',
    Attributes,
    {
      undescored: true,
      timestamps: false,
      tableName: 'Categories',
    });
  return Category;
};
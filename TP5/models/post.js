'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, {
        foreignKey: {
          name: 'authorId',
          type: DataTypes.UUID,
          allowNull: false
        },
        onDelete: 'CASCADE'
      });
      Post.hasMany(models.Comment);
    }
  };
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};
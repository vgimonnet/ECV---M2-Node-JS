'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.Post, {
        foreignKey: {
          name: 'commentId',
          type: DataTypes.UUID,
          allowNull: false
        },
        onDelete: 'CASCADE',
        as: 'post'
      });
      Comment.belongsTo(models.User, {
        foreignKey: {
          name: 'authorId',
          type: DataTypes.UUID,
          allowNull: false
        },
        onDelete: 'CASCADE',
        as: 'author'
      });
    }
  };
  Comment.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    content: DataTypes.TEXT,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
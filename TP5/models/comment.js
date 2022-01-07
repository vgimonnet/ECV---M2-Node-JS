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
        onDelete: 'CASCADE'
      });
      Comment.belongsTo(models.User, {
        foreignKey: {
          name: 'authorId',
          type: DataTypes.UUID,
          allowNull: false
        },
        onDelete: 'CASCADE'
      });
    }
  };
  Comment.init({
    content: DataTypes.TEXT,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, { as: 'posts' });
      User.hasMany(models.Comment, { as: 'comments' });
      User.belongsTo(models.Role, {
        foreignKey: {
          name: 'roleId',
          type: DataTypes.UUID,
          allowNull: true
        },
        as: 'role'
      });
    }
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    lastname: DataTypes.STRING,
    firstname: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    github: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
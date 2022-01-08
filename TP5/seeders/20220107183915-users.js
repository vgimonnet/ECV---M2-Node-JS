'use strict';

const { v4 } = require ('uuid');
const { Role } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const roleAdmin = await Role.findOne({ where: { name: 'admin' } });
      const roleUser = await Role.findOne({ where: { name: 'user' } });
      const roleContrib = await Role.findOne({ where: { name: 'contrib' } });

      await queryInterface.bulkInsert('Users', [
        {
          id: v4(),
          firstname: "Valentin",
          lastname: "Gimonnet",
          username: "vgimonnet",
          email: "valentin.gimonnet18@gmail.com",
          github: "https://github.com/vgimonnet/",
          roleId: roleAdmin.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: v4(),
          firstname: "user",
          lastname: "user",
          username: "user",
          email: "user@user.com",
          github: "https://github.com/",
          roleId: roleUser.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: v4(),
          firstname: "contrib",
          lastname: "contrib",
          username: "contrib",
          email: "contrib@contrib.com",
          github: "https://github.com/",
          roleId: roleContrib.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};

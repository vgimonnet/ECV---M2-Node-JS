'use strict';

const { v4 } = require ('uuid');
const { User } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const vgimonnet = await User.findOne({ where: { username: 'vgimonnet' } });
      const contrib = await User.findOne({ where: { username: 'contrib' } });
      const user = await User.findOne({ where: { username: 'user' } });

      await queryInterface.bulkInsert('Posts', [
        {
          id: v4(),
          title: "Title n°1",
          content: "First post",
          date: "2022-01-08",
          userId: vgimonnet.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: v4(),
          title: "Title n°2",
          content: "Second post",
          date: "2022-01-08",
          userId: contrib.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: v4(),
          title: "Title n°3",
          content: "Third post",
          date: "2022-01-08",
          userId: user.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Posts', null, {});
  }
};

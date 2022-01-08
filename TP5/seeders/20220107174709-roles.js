'use strict';

const { v4 } = require ('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkInsert('Roles', [
        {
          id: v4(),
          name: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: v4(),
          name: 'contrib',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: v4(),
          name: 'user',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    } catch (error) {
      console.log(error);
    }    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};

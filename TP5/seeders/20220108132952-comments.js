'use strict';

const { v4 } = require ('uuid');
const { User, Post } = require('../models');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const vgimonnet = await User.findOne({ where: { username: 'vgimonnet' } });
      const contrib = await User.findOne({ where: { username: 'contrib' } });
      const user = await User.findOne({ where: { username: 'user' } });

      const firstPost = await Post.findOne({ where: { title: 'Title n°1' } });
      const secondPost = await Post.findOne({ where: { title: 'Title n°2' } });
      const thirdPost = await Post.findOne({ where: { title: 'Title n°3' } });

      await queryInterface.bulkInsert('Comments', [
        {
          id: v4(),
          content: "First comment",
          date: "2022-01-08",
          userId: vgimonnet.id,
          postId: firstPost.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: v4(),
          content: "Second comment",
          date: "2022-01-08",
          userId: contrib.id,
          postId: secondPost.id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: v4(),
          content: "Third comment",
          date: "2022-01-08",
          userId: user.id,
          postId: thirdPost.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    } catch (error) {
      console.log(error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Comments', null, {});
  }
};

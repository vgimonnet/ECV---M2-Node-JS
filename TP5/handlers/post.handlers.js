const { Post } = require('../models');

const getAll = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: ['author'] });
    
    res.status(200).json(posts);
  } catch (error) {
    console.log(error)
    res.status(500).json(error);
  }
}

const getOne = async (req, res) => {
  try {
    const post = req.query.comments === 'no'
    ? await Post.findByPk(req.params.id)
    : await Post.findByPk(req.params.id, { include: ['comments'] });

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
}

const createOne = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(200).json({
      message: 'Post created',
      data: post
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

const updateOne = async (req, res) => {
  try {
    const post = await Post.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    
    res.status(200).json({
      message: 'Post updated',
      data: post
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

const removeOne = async (req, res) => {
  try {
    const post = await Post.destroy({
      where: {
        id: req.params.id
      }
    });
    
    res.status(200).json({
      message: 'Post deleted'
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  removeOne
}
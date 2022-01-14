const { Post } = require('../models');
const createError = require('http-errors');

const getAll = async (req, res, next) => {
  try {
    const posts = await Post.findAll({ include: ['author'] });
    
    res.status(200).json(posts);
  } catch (error) {
    return next(createError(500));
  }
}

const getOne = async (req, res, next) => {
  try {
    const post = req.query.comments === false
    ? await Post.findByPk(req.params.id)
    : await Post.findByPk(req.params.id, { include: ['comments'] });

    res.status(200).json(post);
  } catch (error) {
    return next(createError(500));
  }
}

const createOne = async (req, res, next) => {
  try {
    const post = await Post.create(req.body);

    res.status(200).json({
      message: 'Post created',
      data: post
    });
  } catch (error) {
    return next(createError(500));
  }
}

const updateOne = async (req, res, next) => {
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
    return next(createError(500));
  }
}

const removeOne = async (req, res, next) => {
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
    return next(createError(500));
  }
}

module.exports = {
  getAll,
  getOne,
  createOne,
  updateOne,
  removeOne
}
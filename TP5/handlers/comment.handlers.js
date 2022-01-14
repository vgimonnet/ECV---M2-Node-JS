const { Comment } = require('../models');
const createError = require('http-errors');

const getAll = async (req, res, next) => {
  try {
    const comments = await Comment.findAll();
    
    res.status(200).json(comments);
  } catch (error) {
    return next(createError(500));
  }
  
}

const getOne = async (req, res, next) => {
  try {
    const comment = await Comment.findByPk(req.params.id);

    res.status(200).json(comment);
  } catch (error) {
    return next(createError(500));
  }
}

const createOne = async (req, res, next) => {
  try {
    const comment = await Comment.create(req.body);

    res.status(200).json({
      message: 'Comment created',
      data: comment
    });
  } catch (error) {
    return next(createError(500));
  }
}

const updateOne = async (req, res, next) => {
  try {
    const comment = await Comment.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    
    res.status(200).json({
      message: 'Comment updated',
      data: comment
    });
  } catch (error) {
    return next(createError(500));
  }
}

const removeOne = async (req, res, next) => {
  try {
    const comment = await Comment.destroy({
      where: {
        id: req.params.id
      }
    });
    
    res.status(200).json({
      message: 'Comment deleted'
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
const { Comment } = require('../models');

const getAll = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error);
  }
  
}

const getOne = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json(error);
  }
}

const createOne = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);

    res.status(200).json({
      message: 'Comment created',
      data: comment
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

const updateOne = async (req, res) => {
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
    res.status(500).json(error);
  }
}

const removeOne = async (req, res) => {
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
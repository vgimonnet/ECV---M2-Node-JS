const { User } = require('../models');
const createError = require('http-errors');

const getAll = async (req, res, next) => {
  try {
    const users = await User.findAll({ include: ['role'] });
    
    res.status(200).json(users);
  } catch (error) {
    return next(createError(500));
  }
  
}

const getOne = async (req, res, next) => {
  try {
    const user = req.query.posts === false
    ? await User.findByPk(req.params.id, { include: ['role'] })
    : await User.findByPk(req.params.id, { include: ['role', 'posts'] });

    res.status(200).json(user);
  } catch (error) {
    return next(createError(500));
  }
}

const createOne = async (req, res, next) => {
  try {
    const user = await User.create(req.body);

    res.status(200).json({
      message: 'User created',
      data: user
    });
  } catch (error) {
    return next(createError(500));
  }
}

const updateOne = async (req, res, next) => {
  try {
    const user = await User.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    
    res.status(200).json({
      message: 'User updated',
      data: user
    });
  } catch (error) {
    return next(createError(500));
  }
}

const removeOne = async (req, res, next) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id
      }
    });
    
    res.status(200).json({
      message: 'User deleted'
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
const { Role } = require('../models');
const createError = require('http-errors');

const getAll = async (req, res, next) => {
  try {
    const roles = await Role.findAll();
    
    res.status(200).json(roles);
  } catch (error) {
    return next(createError(500));
  }
  
}

const getOne = async (req, res, next) => {
  try {
    const role = await Role.findByPk(req.params.id);

    res.status(200).json(role);
  } catch (error) {
    return next(createError(500));
  }
}

const createOne = async (req, res, next) => {
  try {
    const role = await Role.create(req.body);

    res.status(200).json({
      message: 'Role created',
      data: role
    });
  } catch (error) {
    return next(createError(500));
  }
}

const updateOne = async (req, res, next) => {
  try {
    const role = await Role.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    
    res.status(200).json({
      message: 'Role updated',
      data: role
    });
  } catch (error) {
    return next(createError(500));
  }
}

const removeOne = async (req, res, next) => {
  try {
    const role = await Role.destroy({
      where: {
        id: req.params.id
      }
    });
    
    res.status(200).json({
      message: 'Role deleted'
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
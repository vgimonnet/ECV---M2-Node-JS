const { Role } = require('../models');

const getAll = async (req, res) => {
  try {
    const roles = await Role.findAll();
    
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json(error);
  }
  
}

const getOne = async (req, res) => {
  try {
    const role = await Role.findByPk(req.params.id);

    res.status(200).json(role);
  } catch (error) {
    res.status(500).json(error);
  }
}

const createOne = async (req, res) => {
  try {
    const role = await Role.create(req.body);

    res.status(200).json({
      message: 'Role created',
      data: role
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

const updateOne = async (req, res) => {
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
    res.status(500).json(error);
  }
}

const removeOne = async (req, res) => {
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
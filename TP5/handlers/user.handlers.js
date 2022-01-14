const { User } = require('../models');

const getAll = async (req, res) => {
  try {
    const users = await User.findAll({ include: ['role'] });
    
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
  
}

const getOne = async (req, res) => {
  try {
    const user = req.query.posts === false
    ? await User.findByPk(req.params.id, { include: ['role'] })
    : await User.findByPk(req.params.id, { include: ['role', 'posts'] });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
}

const createOne = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(200).json({
      message: 'User created',
      data: user
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

const updateOne = async (req, res) => {
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
    res.status(500).json(error);
  }
}

const removeOne = async (req, res) => {
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
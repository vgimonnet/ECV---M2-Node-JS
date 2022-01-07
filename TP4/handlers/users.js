// Exo9
const express = require('express');
const router = express.Router();

const { getAllUsers, getUser, createUser, deleteUser } = require('../routers/users')

router.get('/', getAllUsers(req, res));

router.get('/:id', getUser(req, res));

router.post('/', createUser(req, res));

router.delete('/:id', deleteUser(req, res));

module.exports = router;
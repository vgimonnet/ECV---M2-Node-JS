const express = require('express');
const router = express.Router();

const { getAll, getOne, createOne, updateOne, removeOne } = require('../handlers/role.handlers');

router.get('/', (req, res) => getAll(req, res));

router.get('/:id', (req, res) => getOne(req, res));

router.post('/', (req, res) => createOne(req, res));

router.patch('/:id', (req, res) => updateOne(req, res));

router.delete('/:id', (req, res) => removeOne(req, res));


module.exports = router;

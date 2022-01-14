const express = require('express');
const router = express.Router();

const validator = require('express-joi-validation').createValidator({});
const { userValidator } = require('../validators');

const { getAll, getOne, createOne, updateOne, removeOne } = require('../handlers/user.handlers');

router.get('/', validator.response(userValidator.getUsersSchema), (req, res) => getAll(req, res));

router.get('/:id', validator.query(userValidator.postsQuerySchema), validator.response(userValidator.getUserSchema), (req, res) => getOne(req, res));

router.post('/', validator.body(userValidator.createUserSchema), (req, res) => createOne(req, res));

router.patch('/:id', validator.body(userValidator.updateUserSchema), (req, res) => updateOne(req, res));

router.delete('/:id', (req, res) => removeOne(req, res));


module.exports = router;

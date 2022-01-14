const express = require('express');
const router = express.Router();

const validator = require('express-joi-validation').createValidator({});
const { roleValidator } = require('../validators');

const { getAll, getOne, createOne, updateOne, removeOne } = require('../handlers/role.handlers');

router.get('/', validator.response(roleValidator.getRolesSchema), (req, res) => getAll(req, res));

router.get('/:id', validator.response(roleValidator.getRoleSchema), (req, res) => getOne(req, res));

router.post('/', validator.body(roleValidator.createRoleSchema), (req, res) => createOne(req, res));

router.patch('/:id', validator.body(roleValidator.updateRoleSchema), (req, res) => updateOne(req, res));

router.delete('/:id', (req, res) => removeOne(req, res));


module.exports = router;

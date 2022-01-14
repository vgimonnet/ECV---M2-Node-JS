const express = require('express');
const router = express.Router();

const validator = require('express-joi-validation').createValidator({
  passError: true
});
const { roleValidator } = require('../validators');

const { getAll, getOne, createOne, updateOne, removeOne } = require('../handlers/role.handlers');

router.get('/', validator.response(roleValidator.getRolesSchema), getAll);

router.get('/:id', validator.response(roleValidator.getRoleSchema), getOne);

router.post('/', validator.body(roleValidator.createRoleSchema), createOne);

router.patch('/:id', validator.body(roleValidator.updateRoleSchema), updateOne);

router.delete('/:id', removeOne);


module.exports = router;

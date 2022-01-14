const Joi = require('joi');

const roleSchema = {
  id: Joi.string().guid(),
  name: Joi.string().min(1).max(50),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
};

const getRoleSchema = Joi.object().keys(roleSchema).unknown(true);

const getRolesSchema = Joi.array().items(getRoleSchema);

const createRoleSchema = Joi.object({
  name: Joi.string().min(1).max(50).required()
});

const updateRoleSchema = Joi.object({
  name: Joi.string().min(1).max(50).required()
});

module.exports = {
  getRoleSchema,
  getRolesSchema,
  createRoleSchema,
  updateRoleSchema
}
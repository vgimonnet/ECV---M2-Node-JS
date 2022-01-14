const Joi = require('joi');

const userSchema = {
  id: Joi.string().guid(),
  lastname: Joi.string().min(1).max(100),
  firstname: Joi.string().min(1).max(100),
  username: Joi.string().min(1).max(20),
  email: Joi.string().email(),
  github: Joi.string().uri(),
  roleId: Joi.string().guid(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
};

const getUserSchema = Joi.object().keys(userSchema).unknown(true);

const getUsersSchema = Joi.array().items(getUserSchema);

const createUserSchema = Joi.object({
  lastname: Joi.string().min(1).max(100).required(),
  firstname: Joi.string().min(1).max(100).required(),
  username: Joi.string().min(1).max(20).required(),
  email: Joi.string().email().required(),
  github: Joi.string().uri().required(),
  roleId: Joi.string().guid()
});

const updateUserSchema = Joi.object({
  lastname: Joi.string().min(1).max(100),
  firstname: Joi.string().min(1).max(100),
  username: Joi.string().min(1).max(20),
  email: Joi.string().email(),
  github: Joi.string().uri(),
  roleId: Joi.string().guid()
});

const postsQuerySchema = Joi.object({
  posts: Joi.string().empty('').default('yes')
});

module.exports = {
  getUserSchema,
  getUsersSchema,
  createUserSchema,
  updateUserSchema,
  postsQuerySchema
}
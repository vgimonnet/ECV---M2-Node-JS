const Joi = require('joi');

const postSchema = {
  id: Joi.string().guid(),
  title: Joi.string().min(1).max(255),
  content: Joi.string().min(1),
  date: Joi.date(),
  userId: Joi.string().guid(),
  createdAt: Joi.date(),
  updatedAt: Joi.date()
};

const getPostSchema = Joi.object().keys(postSchema).unknown(true);

const getPostsSchema = Joi.array().items(getPostSchema);

const createPostSchema = Joi.object({
  title: Joi.string().min(1).max(255).required(),
  content: Joi.string().min(1).required(),
  date: Joi.date().required(),
  userId: Joi.string().guid()
});

const updatePostSchema = Joi.object({
  title: Joi.string().min(1).max(255),
  content: Joi.string().min(1),
  date: Joi.date(),
  userId: Joi.string().guid()
});

const commentsQuerySchema = Joi.object({
  comments: Joi.string().empty('').default('yes')
});

module.exports = {
  getPostSchema,
  getPostsSchema,
  createPostSchema,
  updatePostSchema,
  commentsQuerySchema
}
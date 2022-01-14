const Joi = require('joi');

const commentSchema = {
  id: Joi.string().guid(),
  content: Joi.string().min(1),
  date: Joi.date(),
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
  userId: Joi.string().guid(),
  postId: Joi.string().guid()
};

const getCommentSchema = Joi.object().keys(commentSchema).unknown(true);

const getCommentsSchema = Joi.array().items(getCommentSchema);

const createCommentSchema = Joi.object({
  content: Joi.string().min(1).required(),
  date: Joi.date().required(),
  userId: Joi.string().guid().required(),
  postId: Joi.string().guid().required()
});

const updateCommentSchema = Joi.object({
  content: Joi.string().min(1),
  date: Joi.date(),
  userId: Joi.string().guid(),
  postId: Joi.string().guid()
});

module.exports = {
  getCommentSchema,
  getCommentsSchema,
  createCommentSchema,
  updateCommentSchema
}
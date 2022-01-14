const express = require('express');
const router = express.Router();

const validator = require('express-joi-validation').createValidator({});
const { postValidator } = require('../validators');

const { getAll, getOne, createOne, updateOne, removeOne } = require('../handlers/post.handlers');

const setContext = (req, res, next) => {
  res.set('App-Context', 'Post');
  next();
}

router.use(setContext);

router.get('/', validator.response(postValidator.getPostsSchema), (req, res) => getAll(req, res));

router.get('/:id', validator.query(postValidator.commentsQuerySchema), validator.response(postValidator.getPostSchema), (req, res) => getOne(req, res));

router.post('/', validator.body(postValidator.createPostSchema), (req, res) => createOne(req, res));

router.patch('/:id', validator.body(postValidator.updatePostSchema), (req, res) => updateOne(req, res));

router.delete('/:id', (req, res) => removeOne(req, res));


module.exports = router;

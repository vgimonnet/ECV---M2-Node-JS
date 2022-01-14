const express = require('express');
const router = express.Router();

const validator = require('express-joi-validation').createValidator({
  passError: true
});
const { postValidator } = require('../validators');

const { getAll, getOne, createOne, updateOne, removeOne } = require('../handlers/post.handlers');

const setContext = (req, res, next) => {
  res.set('App-Context', 'Post');
  next();
}

router.use(setContext);

router.get('/', validator.response(postValidator.getPostsSchema), getAll);

router.get('/:id', validator.query(postValidator.commentsQuerySchema), validator.response(postValidator.getPostSchema), getOne);

router.post('/', validator.body(postValidator.createPostSchema), createOne);

router.patch('/:id', validator.body(postValidator.updatePostSchema), updateOne);

router.delete('/:id', removeOne);


module.exports = router;

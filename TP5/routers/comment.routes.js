const express = require('express');
const router = express.Router();

const validator = require('express-joi-validation').createValidator({
  passError: true
});
const { commentValidator } = require('../validators');

const { getAll, getOne, createOne, updateOne, removeOne } = require('../handlers/comment.handlers');

const setContext = (req, res, next) => {
  res.set('App-Context', 'Comment');
  next();
}

router.use(setContext);

router.get('/',validator.response(commentValidator.getCommentsSchema), getAll);

router.get('/:id', validator.response(commentValidator.getCommentSchema), getOne);

router.post('/', validator.body(commentValidator.createCommentSchema), createOne);

router.patch('/:id', validator.body(commentValidator.updateCommentSchema), updateOne);

router.delete('/:id', removeOne);


module.exports = router;

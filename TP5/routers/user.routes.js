const express = require('express');
const router = express.Router();

const validator = require('express-joi-validation').createValidator({
  passError: true
});
const { userValidator } = require('../validators');

const { getAll, getOne, createOne, updateOne, removeOne } = require('../handlers/user.handlers');

const setContext = (req, res, next) => {
  res.set('App-Context', 'User');
  next();
}

router.use(setContext);

router.get('/', validator.response(userValidator.getUsersSchema), getAll);

router.get('/:id', validator.query(userValidator.postsQuerySchema), validator.response(userValidator.getUserSchema), getOne);

router.post('/', validator.body(userValidator.createUserSchema), createOne);

router.patch('/:id', validator.body(userValidator.updateUserSchema), updateOne);

router.delete('/:id', removeOne);


module.exports = router;

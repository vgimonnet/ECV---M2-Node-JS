const express = require('express');
const router = express.Router();

const validator = require('express-joi-validation').createValidator({});
const { commentValidator } = require('../validators');

const { getAll, getOne, createOne, updateOne, removeOne } = require('../handlers/comment.handlers');

router.get('/',validator.response(commentValidator.getCommentsSchema), (req, res) => getAll(req, res));

router.get('/:id', validator.response(commentValidator.getCommentSchema), (req, res) => getOne(req, res));

router.post('/', validator.body(commentValidator.createCommentSchema), (req, res) => createOne(req, res));

router.patch('/:id', validator.body(commentValidator.updateCommentSchema), (req, res) => updateOne(req, res));

router.delete('/:id', (req, res) => removeOne(req, res));


module.exports = router;

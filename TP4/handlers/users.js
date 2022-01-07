// Exo9
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'All users' });
});

router.get('/:id', (req, res) => {
  res.json({ message: `User id : ${ req.params.id }` });
});

router.post('/', (req, res) => {
  res.json({ message: 'Create user' });
});

router.delete('/:id', (req, res) => {
  res.json({ message: `Delete user id : ${ req.params.id }` });
});

module.exports = router;
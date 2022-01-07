const express = require('express');
const router = express.Router();
//  Exo 1
router.get('/hello-world', (req, res) => {
  res.json({ message: 'Hello World !' });
});

// Exo 2
router.get('/message', (req, res) => {
  if (!req.query.message || req.query.message.length > 20) {
    res.status(400).json({ message: 'Bad request' });
  } else {
    res.json({ message: req.query.message });
  }
});

// Exo 3
router.post('/infos/headers', (req, res) => {
  res.json(req.headers);
});

// Exo 4
router.post('/user', (req, res) => {
  const date = req.body.birthdate.split('/');
  const birthDate = new Date(date[2], date[1], date[0]);
  const today = new Date();
  Math.floor((today-birthDate)/31557600000) < 18 
  ? res.status(403).json({ message: 'Forbidden' })
  : res.status(200).json({ message: `Welcome : ${ req.body.firstname }` });
});


// Exo 5
router.get('/rick-roll', (req, res) => {
  res.redirect('https://youtu.be/dQw4w9WgXcQ');
});

// Exo 6
router.delete('/custom-header', (req, res) => {
  res.set('Message', 'Hello World !').json({ message: 'check Headers'});
});

// Exo 8
router.get('/params/:id/:key/:slug', (req, res) => {
  res.json({
    id: req.params.id,
    key: req.params.key,
    slug: req.params.slug
  });
});

module.exports = router;
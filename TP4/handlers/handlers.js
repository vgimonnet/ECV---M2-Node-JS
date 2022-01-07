const helloWorld = (req, res) => {
  res.json({ message: 'Hello World !' });
}

const message = (req, res) => {
  if (!req.query.message || req.query.message.length > 20) {
    res.status(400).json({ message: 'Bad request' });
  } else {
    res.json({ message: req.query.message });
  }
}

const infosHeaders = (req, res) => {
  res.json(req.headers);
}

const user = (req, res) => {
  const date = req.body.birthdate.split('/');
  const birthDate = new Date(date[2], date[1], date[0]);
  const today = new Date();
  Math.floor((today-birthDate)/31557600000) < 18 
  ? res.status(403).json({ message: 'Forbidden' })
  : res.status(200).json({ message: `Welcome : ${ req.body.firstname }` });
}

const rickRoll = (req, res) => {
  res.redirect('https://youtu.be/dQw4w9WgXcQ');
}

const customHeader = (req, res) => {
  res.set('Message', 'Hello World !').json({ message: 'check Headers'});
}

const getParams = (req, res) => {
  res.json({
    id: req.params.id,
    key: req.params.key,
    slug: req.params.slug
  });
}

module.exports = {
  helloWorld,
  message,
  infosHeaders,
  user,
  rickRoll,
  customHeader,
  getParams
}
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const basicRoutes = require('./routers/routes.js');
app.use('/', basicRoutes);

const userRoutes = require('./handlers/users.js');
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server starts and listens on port 3000');
});
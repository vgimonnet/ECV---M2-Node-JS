const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const userRoutes = require('./routers/user.routes.js');
app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log('Server starts and listens on port 3000');
});
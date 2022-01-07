const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const userRoutes = require('./routers/user.routes.js');
app.use('/users', userRoutes);

const roleRoutes = require('./routers/role.routes.js');
app.use('/roles', roleRoutes);

const commentRoutes = require('./routers/comment.routes.js');
app.use('/comments', commentRoutes);

const postRoutes = require('./routers/post.routes.js');
app.use('/posts', postRoutes);

app.listen(3000, () => {
  console.log('Server starts and listens on port 3000');
});
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

/**
 * TP 7
 */


// const logDate = (req, res, next) => {
//   console.log(new Date());
//   next();
// }

// const setHeaterResponse = (req, res, next) => {
//   res.set('Application-name', 'ecv-digital');
//   next();
// }

// const isAuthorized = (req, res, next) => {
//   if (typeof req.headers.authorization == 'undefined') {
//     return res.status(403).json({
//       message: 'Authorization header required'
//     });
//   }
//   next();
// }

// app.use(logDate);
// app.use(setHeaterResponse);
// app.use(isAuthorized);

// TP7


const errorHandler = require('./middlewares/error-handler.middleware');
const joiErrorHandler = require('./middlewares/joi-error-handler.middleware');


app.use(bodyParser.json());

const userRoutes = require('./routers/user.routes.js');
app.use('/users', userRoutes);

const roleRoutes = require('./routers/role.routes.js');
app.use('/roles', roleRoutes);

const commentRoutes = require('./routers/comment.routes.js');
app.use('/comments', commentRoutes);

const postRoutes = require('./routers/post.routes.js');
app.use('/posts', postRoutes);


app.use(joiErrorHandler);
app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server starts and listens on port 3000');
});
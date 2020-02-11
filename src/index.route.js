const express = require('express');
const TemplateRouter = require('./_template/template.route');
const UserRouter = require('./user/user.route');
const devserumMiddleware = require('./common/devserum.middleware');

const app = express();
app.use(devserumMiddleware);

const rootRouter = express.Router();
const indexRouter = express.Router();

rootRouter.get('/', (req, res) => res.send('OK'));
rootRouter.get('/health-check', (req, res) => res.send('OK'));

// Common hook for API
rootRouter.use((req, res, next) => {
  req.$params = {};
  req.$data = {};
  next();
});

app.use(rootRouter);

indexRouter.use('/templates', TemplateRouter);
indexRouter.use('/users', UserRouter);
app.use(indexRouter);

module.exports = app;

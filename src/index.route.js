const express = require('express');

const app = express();
const rootRouter = express.Router();
const indexRouter = express.Router();

rootRouter.get('/', (req, res) => res.send('OK'));
rootRouter.get('/health-check', (req, res) => res.send('OK'));

rootRouter.use((req, res, next) => {
  req.$params = {};
  req.$data = {};
  next();
});

app.use(rootRouter);

app.use('/api', indexRouter);

module.exports = app;

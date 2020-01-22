const app = require('./src/index.route');
const env = require('./config/env');

app.listen(env.port, () => {
  console.info(`server started on port ${env.port}`); // eslint-disable-line no-console
});

module.exports = app;

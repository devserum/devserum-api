const app = require('./src/index.route');
const env = require('./config/config');

app.listen(env.PORT, () => {
  console.info(`server started on port ${env.PORT}`); // eslint-disable-line no-console
});

module.exports = app;

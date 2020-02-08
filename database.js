const Sequelize = require('sequelize');
const glob = require('glob-promise');
// const consola = require('consola');

const config = require('./config/config');

const database = {};

const sequelize = new Sequelize(
  config.PSQL_DATABASE,
  config.PSQL_USERNAME,
  config.PSQL_PASSWORD,
  {
    host: config.PSQL_HOST,
    dialect: 'postgres',
  },
);

const modelFiles = glob.sync('**/*.model.js', {});
modelFiles.forEach((file) => {
  // eslint-disable-next-line
  const Model = require(`./${file}`);
  database[Model.name] = Model(sequelize, Sequelize);
});

Object.keys(database)
  .forEach((modelName) => {
    if (database[modelName].associate
      && {}.toString.call(database[modelName].associate) === '[object Function]') {
      database[modelName].associate(database);
    }
  });

database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;

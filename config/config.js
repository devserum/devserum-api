// this file name should config.js because sequelize-cli lookup config.json -> config.js
// for migration script.
const result = require('dotenv').config();
const defaultEnv = require('./default-env');

const parsedDotEnv = result.parsed;

const sequelizeCliConfigGenerator = (env) => {
  const sequelizeCliConfig = {
    development: {
      database: env.PSQL_DATABASE,
      username: env.PSQL_USERNAME,
      password: env.PSQL_PASSWORD,
      host: env.PSQL_HOST,
      dialect: 'postgres',
    },
    test: {
      database: env.PSQL_DATABASE,
      username: env.PSQL_USERNAME,
      password: env.PSQL_PASSWORD,
      host: env.PSQL_HOST,
      dialect: 'postgres',
    },
    production: {
      database: env.PSQL_DATABASE,
      username: env.PSQL_USERNAME,
      password: env.PSQL_PASSWORD,
      host: env.PSQL_HOST,
      dialect: 'postgres',
    },
  };
  return sequelizeCliConfig;
};

const mergeEnvironmentVariables = (processEnv, dotEnv, _defaultEnv) => {
  const mergedEnv = { ...processEnv };
  const sequelizeCliConfig = sequelizeCliConfigGenerator(dotEnv);
  if (sequelizeCliConfig) {
    Object.keys(sequelizeCliConfig).forEach((key) => {
      mergedEnv[key] = processEnv[key] || sequelizeCliConfig[key];
    });
  }
  // console.log(mergedEnv.development.toString());
  if (dotEnv) {
    Object.keys(dotEnv).forEach((key) => {
      mergedEnv[key] = processEnv[key] || dotEnv[key];
    });
  }
  if (_defaultEnv) {
    Object.keys(defaultEnv).forEach((key) => {
      mergedEnv[key] = processEnv[key] || _defaultEnv[key];
    });
  }
  return mergedEnv;
};

const config = mergeEnvironmentVariables(process.env, parsedDotEnv, defaultEnv);
// console.log(config);

module.exports = config;

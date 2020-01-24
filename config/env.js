const result = require('dotenv').config();
const defaultEnv = require('./default-env');

const dotEnv = result.parsed;

const mergeEnvironmentVariables = (processEnv, dotEnv, defaultEnv) => {
  if (dotEnv) {
    Object.keys(dotEnv).forEach((key) => {
      processEnv[key] = processEnv[key] || dotEnv[key];
    });
  }
  if (defaultEnv) {
    Object.keys(defaultEnv).forEach((key) => {
      processEnv[key] = processEnv[key] || defaultEnv[key];
    });
  }
  return processEnv;
};

const env = mergeEnvironmentVariables(process.env, dotEnv, defaultEnv);

module.exports = env;

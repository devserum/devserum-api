const result = require('dotenv').config();
const defaultEnv = require('./default-env');

const parsedDotEnv = result.parsed;

const mergeEnvironmentVariables = (processEnv, dotEnv, _defaultEnv) => {
  const mergedEnv = processEnv;
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

const env = mergeEnvironmentVariables(process.env, parsedDotEnv, defaultEnv);

module.exports = env;

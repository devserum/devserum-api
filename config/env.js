const result = require('dotenv').config();

const parsedEnv = result.parsed;
const defaultSettings = {
  PORT: 4000,
};

const mergeEnvironmentVariables = (processEnv, parsedEnv, defaultSettings) => {
  Object.keys(parsedEnv).forEach((key) => {
    processEnv[key] = processEnv[key] || parsedEnv[key];
  });
  Object.keys(defaultSettings).forEach((key) => {
    processEnv[key] = processEnv[key] || defaultSettings[key];
  });
  return processEnv;
};

const env = mergeEnvironmentVariables(process.env, parsedEnv, defaultSettings);

module.exports = env;

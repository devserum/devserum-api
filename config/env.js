const env = require('dotenv').config();

env.port = env.port || 4000;

module.exports = env;

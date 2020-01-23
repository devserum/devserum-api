const result = require('dotenv').config();

const env = result.parsed;

env.PORT = process.env.PORT || env.PORT || 4000;

module.exports = env;

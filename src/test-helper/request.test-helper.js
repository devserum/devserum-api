const request = require('supertest');
const indexRouter = require('../index.route');

module.exports = request.agent(indexRouter);

const ResponseController = require('./response.controller');

const db = require('../../../database');

class DevserumController extends ResponseController {
  static parseUrlLayer(req, depth = 1) {
    return req.originalUrl.split('/').slice(-depth);
  }
  
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
  
  static async create(req, res, next, args) {
    const layers = DevserumController.parseUrlLayer(req);
    const targetModelName = DevserumController.capitalize(layers.pop());
    return super.asyncResponse(
      req,
      res,
      next,
      args,
      db[targetModelName].create(req.body),
    );
  }
}

module.exports = DevserumController;

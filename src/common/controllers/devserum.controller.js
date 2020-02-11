const pluralize = require('pluralize');

const ResponseController = require('./response.controller');

const db = require('../../../database');

class DevserumController extends ResponseController {
  // static getDb() {
  //   return db;
  // }
  
  static parseUrlLayer(req, depth = 1) {
    return req.originalUrl.split('/').slice(-depth);
  }
  
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
  
  static async create(req, res, next, args) {
    const layers = DevserumController.parseUrlLayer(req);
    const targetModelName = DevserumController.capitalize(pluralize.singular(layers.pop()));
    
    return super.asyncResponse(
      req,
      res,
      next,
      args,
      db[targetModelName].create(req.body),
    );
  }
  
  static async get(req, res, next, args) {
    const layers = DevserumController.parseUrlLayer(req, 2);
    
    const targetModelId = layers.pop();
    const targetModelName = DevserumController.capitalize(pluralize.singular(layers.pop()));
    
    return super.asyncResponse(
      req,
      res,
      next,
      args,
      db[targetModelName].findByPk(targetModelId),
    );
  }
}

module.exports = DevserumController;

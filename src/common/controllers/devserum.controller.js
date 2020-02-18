const pluralize = require('pluralize');

const ResponseController = require('./response.controller');
const DevserumInterface = require('../devserum.interface');

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
    
    return super.modelResponse(
      req,
      res,
      next,
      args,
      db[targetModelName].create(req.body),
      'create',
    );
  }
  
  static async get(req, res, next, args) {
    const layers = DevserumController.parseUrlLayer(req, 2);
    
    const targetModelId = layers.pop();
    const targetModelName = DevserumController.capitalize(pluralize.singular(layers.pop()));
    
    return super.modelResponse(
      req,
      res,
      next,
      args,
      db[targetModelName].findByPk(targetModelId),
      'get',
    );
  }
  
  static async getList(req, res, next, args) {
    const layers = DevserumController.parseUrlLayer(req, 1);
    const targetModelName = DevserumController.capitalize(pluralize.singular(layers.pop()));
    
    return super.modelResponse(
      req,
      res,
      next,
      args,
      db[targetModelName].findAndCountAll(),
      'getList',
    );
  }
  
  static get [DevserumInterface.actions.update]() {
    return async (req) => {
      const layers = DevserumController.parseUrlLayer(req, 2);
      
      const targetModelId = layers.pop();
      const targetModelName = DevserumController.capitalize(pluralize.singular(layers.pop()));
      
      return db[targetModelName].update(
        req.body,
        {
          where: { id: targetModelId },
          returning: true,
        },
      );
    };
  }
  
  static get [DevserumInterface.actions.updateAndResponse]() {
    return async (req, res, next, args) => super.modelResponse(
      req,
      res,
      next,
      args,
      DevserumController[DevserumInterface.actions.update](req, res, next, args),
      DevserumInterface.actions.update,
    );
  }
  
  static get [DevserumInterface.actions.delete]() {
    return async (req) => {
      const layers = DevserumController.parseUrlLayer(req, 2);
      const targetModelId = layers.pop();
      const targetModelName = DevserumController.capitalize(pluralize.singular(layers.pop()));
      
      return db[targetModelName].destroy(
        {
          where: { id: targetModelId },
          returning: true,
        },
      );
    };
  }
  
  static get [DevserumInterface.actions.deleteAndResponse]() {
    return async (
      req, res, next, args,
    ) => super.modelResponse(
      req,
      res,
      next,
      args,
      DevserumController[DevserumInterface.actions.delete](req, res, next, args),
      DevserumInterface.actions.delete,
    );
  }
}

module.exports = DevserumController;

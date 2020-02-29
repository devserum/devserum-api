const pluralize = require('pluralize');

const ResponseController = require('./response.controller');
const ControllerInterface = require('../interfaces/devserum.controller.interface');

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
  
  static get [ControllerInterface.actions.update]() {
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
  
  static get [ControllerInterface.actions.updateAndResponse]() {
    return async (req, res, next, args) => super.modelResponse(
      req,
      res,
      next,
      args,
      DevserumController[ControllerInterface.actions.update](req, res, next, args),
      ControllerInterface.actions.update,
    );
  }
  
  static get [ControllerInterface.actions.delete]() {
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
  
  static get [ControllerInterface.actions.deleteAndResponse]() {
    return async (
      req, res, next, args,
    ) => super.modelResponse(
      req,
      res,
      next,
      args,
      DevserumController[ControllerInterface.actions.delete](req, res, next, args),
      ControllerInterface.actions.delete,
    );
  }
}

module.exports = DevserumController;

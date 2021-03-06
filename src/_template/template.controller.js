const DevserumController = require('../common/controllers/devserum.controller');
const DevserumInterface = require('../common/interfaces/devserum.controller.interface');

class TemplateController extends DevserumController {
  static create(req, res, next) {
    return super.create(req, res, next);
  }
  
  static get(req, res, next) {
    return super.get(req, res, next);
  }
  
  static getList(req, res, next) {
    return super.getList(req, res, next);
  }
  
  static get [DevserumInterface.actions.update]() {
    return async (
      req, res, next,
    ) => super[DevserumInterface.actions.updateAndResponse](req, res, next);
  }
  
  static get [DevserumInterface.actions.delete]() {
    return async (
      req, res, next,
    ) => super[DevserumInterface.actions.deleteAndResponse](req, res, next);
  }
  
  static subUrl(req, res) {
    return res.send(200);
  }
}

module.exports = TemplateController;

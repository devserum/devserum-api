const DevserumController = require('../common/controllers/devserum.controller');

class TemplateController extends DevserumController {
  static create(req, res, next) {
    return super.create(req, res, next);
  }
  
  static getList(req, res, next) {
    return super.getList(req, res, next);
  }
}

module.exports = TemplateController;

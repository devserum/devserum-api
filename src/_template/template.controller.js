const DevserumController = require('../common/controllers/devserum.controller');

class TemplateController extends DevserumController {
  static create(req, res, next) {
    super.create(req, res, next);
  }
}

module.exports = TemplateController;

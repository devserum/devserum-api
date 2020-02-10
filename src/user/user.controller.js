const DevserumController = require('../common/controllers/devserum.controller');

class UserController extends DevserumController {
  static create(req, res, next) {
    super.create(req, res, next);
  }
}

module.exports = UserController;

const express = require('express');
const TemplateController = require('./template.controller');
const DevserumInterface = require('../common/interfaces/devserum.controller.interface');

const router = express.Router();

router.route('/')
  .post(TemplateController.create)
  .get(TemplateController.getList);

router.route('/subUrl')
  .get(TemplateController.subUrl);

router.route('/:templateId')
  .get(TemplateController.get)
  .put(TemplateController[DevserumInterface.actions.update])
  .delete(TemplateController[DevserumInterface.actions.delete]);

module.exports = router;

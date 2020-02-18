const express = require('express');
const TemplateController = require('./template.controller');
const DevserumInterface = require('../common/devserum.interface');

const router = express.Router();

router.route('/')
  .post(TemplateController.create)
  .get(TemplateController.getList);

router.route('/:templateId')
  .get(TemplateController.get)
  .put(TemplateController[DevserumInterface.actions.update])
  .delete(TemplateController[DevserumInterface.actions.delete]);

module.exports = router;

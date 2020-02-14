const express = require('express');
const TemplateController = require('./template.controller');

const router = express.Router();

router.route('/')
  .post(TemplateController.create)
  .get(TemplateController.getList);

router.route('/:templateId')
  .get(TemplateController.get);

module.exports = router;

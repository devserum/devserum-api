const express = require('express');
const TemplateController = require('./template.controller');

const router = express.Router();

router.route('/')
  .post(TemplateController.create)
  .get(TemplateController.getList);

module.exports = router;

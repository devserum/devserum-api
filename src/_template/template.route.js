const express = require('express');
const TemplateController = require('./template.controller');

const router = express.Router();

router.post('/', TemplateController.create);

module.exports = router;

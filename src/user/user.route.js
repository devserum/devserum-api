const express = require('express');
const UserController = require('./user.controller');

const router = express.Router();

router.post('/', UserController.create);

module.exports = router;

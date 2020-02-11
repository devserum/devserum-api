const express = require('express');
const UserController = require('./user.controller');

const router = express.Router();

router.post('/', UserController.create);

router.route('/:userId')
  .get(UserController.get);

module.exports = router;

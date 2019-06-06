var express = require('express');
var router = express.Router();

router.use('/todos', require('./todos.js'));
router.use('/auth', require('./users.js'));

module.exports = router;

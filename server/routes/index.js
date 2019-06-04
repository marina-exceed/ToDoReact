var express = require('express');
var router = express.Router();

router.use('/todos', require('./todos.js'));

module.exports = router;

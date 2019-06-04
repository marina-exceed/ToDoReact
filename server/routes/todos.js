var express = require('express');
var todos = express.Router();

todos.get('/', (req, res) => {

});

todos.post('/add', (req, res) => {
  console.log('Element was added.');
});


module.exports = todos;

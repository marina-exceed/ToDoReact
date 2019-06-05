var express = require('express');
var todos = express.Router();

todos.get('/', require('../controllers/getTodo'));

todos.post('/add', require( '../controllers/addTodo'));

todos.delete('/del/:id', require('../controllers/deleteTodo'));

todos.put('/up', require('../controllers/updateTodo'));

module.exports = todos;

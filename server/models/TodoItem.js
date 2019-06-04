const {
  Schema,
  model
} = require('mongoose');

const TodoScheme = new Schema({
});

module.exports = model('todos', TodoScheme);
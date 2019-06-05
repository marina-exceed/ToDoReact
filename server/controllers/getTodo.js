const TodoItemModel = require('../models/TodoItem');

const getTodo = (req, res) => {
  TodoItemModel.find({}, (err, items) => {
    if (err) return res.status(500).json({err}).end();

    res.status(200).json({items}).end();
  });
};

module.exports = getTodo;
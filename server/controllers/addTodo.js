const TodoItemModel = require('../models/TodoItem');

const addTodo = (req, res) => {
  const {text, checked} = JSON.parse(req.body);

  const todoItem = new TodoItemModel({
    text: text,
    checked: checked,
  });

  todoItem.save((err, item) => {
    if (err) return res.status(500).json({ err }).end();

    res.status(200).json(item).end();
  });
};

module.exports = addTodo;
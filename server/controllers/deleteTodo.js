const TodoItemModel = require('../models/TodoItem');

const deleteTodo = (req, res) => {
  TodoItemModel.deleteOne({_id: req.params.id}, function(err) {
    if (err)
      res.send(err);
    else
      res.json({ message: 'Offer Deleted!'}).end();
  });
};



module.exports = deleteTodo;

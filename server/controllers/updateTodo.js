const TodoItemModel = require('../models/TodoItem');

const updateTodo = (req, res) => {
const { _id: id, text, checked} = JSON.parse(req.body);

  TodoItemModel.updateOne({_id: id}, { text, checked }, function(err, updatedEl) {
    if (err)
      res.send(err);
    else
      res.json({ message: 'Offer Update!'});
  });
};



module.exports = updateTodo;

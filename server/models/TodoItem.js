
const {
  Schema,
  model
} = require('mongoose');

const TodoScheme = new Schema({
  text: {
    type : String,
    required : true
  },
  checked: {
    type :  Boolean
  }
},
  {versionKey: false}
);

module.exports = model('todos', TodoScheme);
import React, { Component } from "react";
import TodoApi from './../../services/todoApi';
import './wrapper.css';
import TodoItem from '../TodoItem';

let counter = 0;

class Wrapper extends Component {

  state = {
    todos: [],
  };

  TodoApi = new TodoApi();

  inputRef = React.createRef();
//ВВОД С ПОМОЩТЮ ИНТЕР
  handleKeyPress = async (event) => {
    if (event.key === 'Enter') {
      const {todos} = this.state;
      if (this.inputRef.current.value !== '') {
        const newItem = await this.TodoApi.addTodo({
          text: this.inputRef.current.value
        });
        todos.push(newItem);
        if (this.inputRef.current.value === '') {
          return false;
        }
        this.inputRef.current.value = '';
        this.setState({todos: todos});
      }
    }
  };
//ДОБАВЛЯЕМ ЛИ
  changeTestState = async () => {
    const {todos} = this.state;
    if (this.inputRef.current.value !== '') {

      const newItem = await this.TodoApi.addTodo({
        text: this.inputRef.current.value,
        checked: false
      });

      todos.push(newItem);

      this.inputRef.current.value = '';
      this.setState({todos: todos});
    }
  };
  //ОЧИЩАЕМ ЛИ
  removeItem = (index) => {
    const {todos} = this.state;
    const idx = todos.findIndex(todo => todo._id === index);

    todos.splice(idx, 1);
    this.setState({todos: todos});
    this.TodoApi.deleteTodo(index);
  };
  //ЗАМЕНА ЛИ
  editTodoItem = (index, value) => {
    const {todos} = this.state;
    const idx = todos.findIndex(todo => todo._id === index);

    const updateddTodo = {
      ...todos[idx],
      text: value
    };

    this.TodoApi.updateTodo(updateddTodo);

    todos[idx].text = value;
    this.setState({todos: todos});
  };

  checkboxEditFunction = (e, index) => {
    this.setState(({todos}) => {
      const idx = todos.findIndex(todo => todo._id === index);
      const updateddTodo = {
        ...todos[idx],
        checked: !todos[idx].checked
      };

      this.TodoApi.updateTodo(updateddTodo);

      return({
        todos: [
          ...todos.slice(0, idx),
          updateddTodo,
          ...todos.slice(idx + 1),
        ]
      });
    });
  };

  componentDidMount() {
    this.TodoApi.getAllItems()
      .then(({items}) => {
        this.setState({todos: items});
      });
  }

  render() {
    const todos = this.state.todos.map((todo) => {
      return (
        <TodoItem key={todo._id} checkboxEditFunction={this.checkboxEditFunction} checked={todo.checked}
                  text={todo.text} index={todo._id} removeItem={this.removeItem} editTodoItem={this.editTodoItem}/>
      );
    });

    return (
      <div className="wrapper">
        <input type="text" onKeyPress={this.handleKeyPress} placeholder="Add Todo" ref={this.inputRef}/>
        <button onClick={this.changeTestState}>Add</button>
        <ul>
          {todos}
        </ul>
      </div>
    )
  }
}


export default Wrapper;

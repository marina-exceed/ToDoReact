import React, { Component } from "react";
import './wrapper.css';
import TodoItem from '../TodoItem';

let counter = 0;

class Wrapper extends Component {

  state = {
    todos: [],
  };
  inputRef = React.createRef();
//ВВОД С ПОМОЩТЮ ИНТЕР
  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const {todos} = this.state;
      if (this.inputRef.current.value !== '') {
        todos.push({
          text: this.inputRef.current.value
        });
        if (this.inputRef.current.value === '') {
          return false;
        }
        this.inputRef.current.value = '';
        this.setState({todos: todos});
      }
    }
  };
//ДОБАВЛЯЕМ ЛИ
  changeTestState = () => {
    const {todos} = this.state;
    if (this.inputRef.current.value !== '') {
      todos.push({
        text: this.inputRef.current.value,
        checked: false,
        id: counter,
      });
      counter++;
      this.inputRef.current.value = '';
      this.setState({todos: todos});
    }
  };
  //ОЧИЩАЕМ ЛИ
  removeItem = (index) => {
    const {todos} = this.state;
    todos.splice(index, 1);
    this.setState({todos: todos});
  };
  //ЗАМЕНА ЛИ
  editTodoItem = (index, value) => {
      const {todos} = this.state;
      todos[index].text = value;
      this.setState({todos: todos});
  };

  checkboxEditFunction = (e, index) => {
    const {todos} = this.state;
    todos[index].checked = !todos[index].checked;
    this.setState({todos: todos});
  };

  render() {
    const todos = this.state.todos.map((todo, index) => {
      return (
        <TodoItem checkboxEditFunction={this.checkboxEditFunction} checked={todo.checked} text={todo.text} index={index} removeItem={this.removeItem} editTodoItem={this.editTodoItem}/>
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
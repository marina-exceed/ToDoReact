import React, { Component, Fragment } from 'react';
import './toDoitem.css'

let counter = 0;

class TodoItem extends Component {

  state = {
    isEdit: false,

  };
  inputReff = React.createRef();
  changeItem = (index) => {
    this.setState({isEdit: true})
  };

  saveButtonClick = (e, index, value) => {
    const {editTodoItem} = this.props;
    editTodoItem(index, value);
    this.setState({isEdit: false});
  };
  changeInputLi = () => {
    // cb = this.refs(cb);
    // cat = this.refs(cat);
    // if (cb.checked) cat.style.display = "block";
    // else cat.style.display = "none";

  };

  render() {
    const {text, index, removeItem, editTodoItem, checked, checkboxEditFunction} = this.props;
    const {isEdit} = this.state;

    console.log('-------this.props:', this.props);

    return (
      <li className={`close ${checked? 'checked': ''}`} key={`todoItem-${index}`}>
        {
          isEdit ? (
            <Fragment>
              <input type="text" ref={this.inputReff}/>
              <button className = "btntodo" onClick={(e) => this.saveButtonClick(e, index, this.inputReff.current.value)}
                      onKeyPress={(index) => editTodoItem(index)}
              >Save
              </button>
            </Fragment>
          ) : (
            <Fragment>
              {text}
              <input className="check" type="checkbox" checked={checked} onClick={(e) => checkboxEditFunction(e, index)}/>
              <button className="btnli" onClick={() => removeItem(index)}>X</button>
              <button className="btnli" onClick={() => this.changeItem(index)}>c</button>
            </Fragment>
          )
        }
      </li>
    )
  }
}

export default TodoItem;
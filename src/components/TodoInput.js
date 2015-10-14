import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class TodoInput extends Component {
  constructor() {
    super();

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo() {
    let createTodo = ReactDOM.findDOMNode(this.refs.createTodo);
    if (createTodo.value.length > 0) {
      this.props.addTodo(createTodo.value);
      createTodo.value = '';
    }
  }

  render() {
    return (
      <div>
        <input ref='createTodo' type='text' placeholder={'Enter new todo'} />
        <button onClick={this.handleAddTodo}>Create</button>
      </div>
    )
  }
}

export default TodoInput;

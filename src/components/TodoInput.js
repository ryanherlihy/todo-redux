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
      <div className='container-fluid'>
        <div className='row'>
          <input
            ref='createTodo'
            type='text'
            placeholder={'Enter new todo'}
            className='form-control' />
          <button
            className='btn btn-primary col-md-2 col-md-offset-5'
            style={{marginTop: 20, marginBottom: 20}}
            onClick={this.handleAddTodo}>Create</button>
        </div>
      </div>
    )
  }
}

export default TodoInput;

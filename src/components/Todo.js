import React, {Component} from 'react';

class Todo extends Component {
  handleCompleteTodo() {
    this.props.completeTodo(this.props.id);
  }

  render() {
    return (
      <div>
        <button className='btn btn-success' onClick={this.handleCompleteTodo.bind(this)}>
          <span className='glyphicon glyphicon-ok'></span>
        </button>
        {this.props.text}
      </div>
    )
  }
}

export default Todo;

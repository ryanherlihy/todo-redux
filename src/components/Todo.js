import React, {Component} from 'react';

class Todo extends Component {
  handleCompleteTodo() {
    this.props.completeTodo(this.props.id);
  }

  render() {
    return (
      <div onClick={this.handleCompleteTodo.bind(this)}>
        {this.props.text}
      </div>
    )
  }
}

export default Todo;

import React, {Component} from 'react';

class Todo extends Component {
  handleCompleteTodo() {
    this.props.completeTodo(this.props.id);
  }

  render() {
    return (
      <div>
        <span
          onClick={this.handleCompleteTodo.bind(this)}
          style={{marginRight: 10, marginBottom: 10}}>
          <i className='small material-icons'>done</i>
        </span>
        {this.props.text}
      </div>
    )
  }
}

export default Todo;

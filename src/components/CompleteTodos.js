import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as todoActions from '../actions/TodoActions';
import Todo from './Todo';

class CompleteTodos extends Component {
  render() {
    let todos = this.props.todos.map((todo, index) => {
      if (todo.completed === true) {
        return (
          <li key={index}>
            <Todo
              text={todo.text}
              id={index}
              completeTodo={this.props.completeTodo} />
          </li>
        );
      }
    });

    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title grey-text'>Completed Todos</span>
          <ul>
            {todos}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state
  };
}

export const CompleteTodosContainer = connect(
  mapStateToProps,
  todoActions
)(CompleteTodos);

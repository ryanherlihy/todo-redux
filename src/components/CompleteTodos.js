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
      <div>
        <h2>Completed Todos</h2>
        <ul>
          {todos}
        </ul>
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

import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as todoActions from '../actions/TodoActions';
import Todo from './Todo';

class CompleteTodos extends Component {
  render() {
    let todos = this.props.todos.map((todo, index) => {
      if (todo.completed === true) {
        return (
          <li key={index} className='list-group-item'>
            <Todo
              text={todo.text}
              id={index}
              completeTodo={this.props.completeTodo} />
          </li>
        );
      }
    });

    return (
      <div className='panel panel-default'>
        <div className='panel-heading'>
          <h2 className='text-center'>Completed Todos</h2>
        </div>
        <div className='panel-body'>
          <ul className='list-group'>
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

import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoInput from './TodoInput';
import Todo from './Todo';
import * as todoActions from '../actions/TodoActions';

import {List} from 'immutable';

export class TodoList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let todos = this.props.todos.map((todo, index) => {
      if (todo.completed === false) {
        return (
          <li key={index}>
            <Todo text={todo.text} id={index} completeTodo={this.props.completeTodo} />
          </li>
        )
      }
    });

    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title grey-text valign'>Todo List</span>
          <TodoInput addTodo={this.props.addTodo} />
          <ul>
            {todos}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state
  };
}

export const TodoListContainer = connect(
  mapStateToProps,
  todoActions
)(TodoList);

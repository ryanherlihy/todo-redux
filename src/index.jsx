import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import App from './components/App';
import {TodoListContainer} from './components/TodoList';
import {CompleteTodosContainer} from './components/CompleteTodos';

import {createStore} from 'redux';
import reducer from './reducer';
import {Provider} from 'react-redux';
import {List} from 'immutable';

const store = createStore(reducer);

ReactDOM.render(
  (
    <Provider store={store}>
      <Router>
        <Route path='/' component={App}>
          <Route path='todolist' component={TodoListContainer} />
          <Route path='completed' component={CompleteTodosContainer} />
        </Route>
      </Router>
    </Provider>
  ), document.getElementById('app')
);

import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to='/todolist'>Todo List</Link></li>
          <li><Link to='/completed'>Completed Todos</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;

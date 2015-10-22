import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <nav className='nav-wrapper'>
          <ul className='left hide-on-med-and-down'>
            <li><Link to='/todolist'>Todo List</Link></li>
            <li><Link to='/completed'>Completed Todos</Link></li>
          </ul>
        </nav>
        <div className='container'>
          <div className='row'>
            <div className='col m6 offset-m3'>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

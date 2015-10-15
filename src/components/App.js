import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-default'>
          <div className='container-fluid'>
            <ul className='nav navbar-nav'>
              <li><Link to='/todolist'>Todo List</Link></li>
              <li><Link to='/completed'>Completed Todos</Link></li>
            </ul>
          </div>
        </nav>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6 col-md-offset-3'>
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

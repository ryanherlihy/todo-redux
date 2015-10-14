import React, {Component} from 'react';
import {Link} from 'react-router';

class App extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <Link to='/todolist'><button className='btn btn-default'>Todo List</button></Link>
          <Link to='/completed'><button className='btn btn-default'>Completed Todos</button></Link>
        </div>
        <div className='row'>
          <div className='col-md-6 col-md-offset-3'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;

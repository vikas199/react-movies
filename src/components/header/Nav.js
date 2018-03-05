import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return(
     
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
      <ul className="nav navbar-nav">
          <Link to="/movies"><li>Movies</li></Link>
          <Link to="/books"><li>Books</li></Link>
          </ul>
          </div>
        </nav>
      
    );
  }
}

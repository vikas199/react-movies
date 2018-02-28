import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return(
      <nav>
        <ul className="navbar">
          <Link to="/movies"><li>Movies</li></Link>
          <Link to="/books"><li>Books</li></Link>
        </ul>
      </nav>
    );
  }
}

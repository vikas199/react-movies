import React from 'react';
import Nav from './Nav';
import './header.css';

export default class Header extends React.Component {
  render() {
    return(
      <header className="header">
     <Nav />
      </header>
    );
  }
}

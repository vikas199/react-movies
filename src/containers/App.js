import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import Movies from './movies/movies'
import MovieDetail from './movieDetail/MovieDetail'

import Header from '../components/header/header'
import '../App.css';

class App extends Component {
  render() {
    return (
      <div>
 
        <Switch>
          
          <Route path={'/movie/:id'} component={MovieDetail} />
          <Route path="/movies" component={Movies} />
          <Route path="/" exact component={Header}/>
         </Switch>
   
      </div>
    );
  }
}

export default App;

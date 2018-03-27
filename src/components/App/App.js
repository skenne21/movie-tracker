import React, { Component } from 'react';
import './App.css';
import SignIn from '../SignIn/SignIn';
import * as movieData from '../../helper/helper'
import { Switch, Route } from 'react-router-dom';


class App extends Component {
  componentDidMount() {
    movieData.fetchRecentMovies();
  }

  render() {
    return (
      <div className="App">
        <header>MovieTracker</header>
        <Switch>
          <Route path="/" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import SignIn from '../SignIn/SignIn';
import { Switch, Route } from 'react-router-dom';
import MovieContainer from '../../containers/MovieContainer/MovieContainer';


export class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header>MovieTracker</header>

        <Switch>
          <Route exact  path="/" component={MovieContainer}/>
          <Route path="/login" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import SignIn from '../SignIn/SignIn';
import { Switch, Route } from 'react-router-dom';
import MovieWrapper from '../../containers/movieContainer/movieContainer';
import * as movieData from '../../helper/apiCall';

export class App extends Component {

  fetchMovies = async () => {
    const movies = await movieData.fetchRecentMovies();
    this.props.fetchMovies(movies)
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="App">
        <header>MovieTracker</header>
        <Switch>
          <Route exact path="/" component={MovieWrapper}/>
          <Route path="/login" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;

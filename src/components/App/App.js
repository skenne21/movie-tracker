import React, { Component } from 'react';
import './App.css';
import SignIn from '../SignIn/SignIn';
import * as movieData from '../../helper/helper'
import { Switch, Route } from 'react-router-dom';
import MovieContainer from '../../containers/MovieContainer/MovieContainer';


class App extends Component {
  constructor() {
    super()
    this.state = {
      movies:[]
    }
  }

  fetchMovies = async () => {
    const movies = await movieData.fetchRecentMovies();
    this.setState({ movies })
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="App">
        <header>MovieTracker</header>
        
        <Switch>
          <Route exact  path="/" render={() => <MovieContainer movies={movies} />} />
          <Route path="/login" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;

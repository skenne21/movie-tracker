import React, { Component } from 'react';
import './App.css';
import SignIn from '../../containers/signinContainer/signinContainer';
import { Switch, Route } from 'react-router-dom';
import MovieWrapper from '../../containers/movieContainer/movieContainer';
import * as movieData from '../../helper/apiCall';
import PropTypes from 'prop-types';

export class App extends Component {

  fetchMovies = async () => {
    const movies = await movieData.fetchRecentMovies();
    this.props.fetchMovies(movies);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  render() {
    return (
      <div className="App">
        <header>MovieTracker</header>
        <Switch>)
          <Route
            exact path="/"
            render= {({history}) => <MovieWrapper history={history}/>}/>
          <Route
            path="/login"
            render={({history}) => <SignIn history={history}/>} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  fetchMovies: PropTypes.func
};

export default App;

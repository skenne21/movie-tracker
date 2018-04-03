import React, { Component } from 'react';
import './App.css';
import SignIn from '../../containers/signinContainer/signinContainer';
import { Switch, Route } from 'react-router-dom';
import MovieWrapper from '../../containers/movieContainer/movieContainer';
import CreateAccount from
  '../../containers/createAccountContainer/createAccountContainer';
import * as movieData from '../../helper/apiCall';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

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
        <Header />
        <Switch>
          <Route
            exact path="/"
            render= {({history, match}) =>
              <MovieWrapper
                history={history}
                match={match}
              />}
          />
          <Route
            path="/login"
            render={({history}) =>
              <SignIn
                history={history}
              />}
          />
          <Route
            path="/account"
            render={({history}) =>
              <CreateAccount
                history={history}
              />}
          />
          <Route
            path="/favorites"
            render={({history, match}) =>
              <MovieWrapper
                history={history}
                match={match}
              />}
          />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  fetchMovies: PropTypes.func
};

export default App;

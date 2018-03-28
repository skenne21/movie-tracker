import React, { Component } from 'react';
import Movie from '../../components/Movie/Movie';
import * as movieData from '../../helper/helper';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class MovieContainer extends Component {


  createMovie = () => {
    return this.props.movies.map(movie => <Movie key={movie.id} movie={movie} />)
  }

  fetchMovies = async () => {
    const movies = await movieData.fetchRecentMovies();
    this.props.fetchMovies(movies)
  }

  componentDidMount() {
    this.fetchMovies();
  }
  render() {

    return (
      <div>
        {this.createMovie()}
      </div>
    )
  }

}

export const mapStateToProps = state => ({
  movies: state.moviesReducer
});

export const mapDispatchToProps = dispatch => ({
  fetchMovies: (movies) => dispatch(actions.loadMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);

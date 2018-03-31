import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { getFavorites } from '../../helper/apiCall';
import PropTypes from 'prop-types';

class MovieWrapper extends Component  {
  constructor(props) {
    super(props)
  
  }

  

  componentDidMount() {
    this.determinePath()
  }
  

  determinePath = () => {
    if(this.props.user.length) {

      switch(this.props.history.location.pathname) {
      case "/":
        return this.createMovie(this.props.movies)
      case "/favorites":
        return this.createMovie(this.props.user[0].favorites)
      default:
        return null;
      }
    }
    else {
      this.props.history.push('/login')
      return (
        <div></div>
      )
    }
    
  }
  
  createMovie = (movies) => {
    const mappedMovies = movies.map(movie => {
      return <Movie
        key={movie.id}
        movie={movie}
        user={this.props.user}
        addFavorites={this.props.addFavorites}
        handleUser={this.props.handleUser}
      />
    });

    return (
      <div className='movie'>
        {mappedMovies}
      </div>
    )
  }
  
  render() {
    return (
      this.determinePath()
    )
  }
}

MovieWrapper.propTypes = {
  movies: PropTypes.array,
  user: PropTypes.array,
  addFavorites: PropTypes.func
};

export default MovieWrapper;

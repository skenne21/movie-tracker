import React from 'react';
import Movie from '../Movie/Movie';
import { getFavorites } from '../../helper/apiCall';
import PropTypes from 'prop-types';

const MovieWrapper = (props) =>  {
  const pathName = props.history.location.pathname;
  
  const createMovie = props.movies.map(movie =>
    <Movie
      key={movie.id}
      movie={movie}
      user={props.user}
      addFavorites={props.addFavorites}
      handleUser={props.handleUser}
    />
  );

  return (
    <div>
      {createMovie}
    </div>
  );
};

MovieWrapper.propTypes = {
  movies: PropTypes.array,
  user: PropTypes.array,
  addFavorites: PropTypes.func
};

export default MovieWrapper;

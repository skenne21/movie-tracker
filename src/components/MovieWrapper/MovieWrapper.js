import React from 'react';
import Movie from '../Movie/Movie';
import PropTypes from 'prop-types';

const MovieWrapper = (props) =>  {
  const createMovie = props.movies.map(movie =>
    <Movie
      key={movie.id}
      movie={movie}
      user={props.user}
      addFavorites={props.addFavorites}
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
  user: PropTypes.object,
  addFavorites: PropTypes.func
};

export default MovieWrapper;

import React from 'react';
import Movie from '../Movie/Movie';
import PropTypes from 'prop-types';

const MovieWrapper = (props) =>  {
  const createMovie = props.movies.map(movie =>
    <Movie
      key={movie.id}
      movie={movie}
      user={props.user}
    />
  );

  return (
    <div>
      {createMovie}
    </div>
  );
};

MovieWrapper.propTypes = {
  movies: PropTypes.array
};

export default MovieWrapper;

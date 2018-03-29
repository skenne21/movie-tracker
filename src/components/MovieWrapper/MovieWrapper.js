import React from 'react';
import Movie from '../Movie/Movie'

const MovieWrapper = (props) =>  {
  const createMovie = props.movies.map(movie =>
      <Movie
        key={movie.id}
        movie={movie}
      />
    )

  return (
      <div>
      {createMovie}
      </div>
    )
}

export default MovieWrapper;

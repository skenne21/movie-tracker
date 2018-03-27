import React from 'react';
import Movie from '../../components/Movie/Movie'

const MovieContainer = ({movies}) => {
  const createMovie = movies.map(movie => <Movie key={movie.id} movie={movie} />);

  return(
    <div>
      {createMovie}
    </div>
  )
}

export default MovieContainer;
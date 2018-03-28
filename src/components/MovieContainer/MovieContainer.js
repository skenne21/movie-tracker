import React from 'react';
import Movie from '../Movie/Movie'

const MovieContainer = () =>  {
  const createMovie = () => {
    console.log(store)
    return this.state.movies.map(movie => 
      <Movie 
        key={movie.id}
        movie={movie} 
      />)
    }
  return (
      <div>
        {createMovie()}
      </div>
    )
}

export default MovieContainer;
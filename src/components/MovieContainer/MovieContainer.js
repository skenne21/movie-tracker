import React from react;

const MovieContainer = () =>  {
  const createMovie = () => {
    return this.props.movies.map(movie => 
      <Movie 
        key={movie.id}
        movie={movie} 
      />)
  return (
      <div>
        {this.createMovie()}
      </div>
    )
  }
}

export default MovieContainer;
export const cleanMovies = (movies) => {
  const cleanMovies = movies.map( movie => {
    const url = 'http://image.tmdb.org/t/p/w185/'
    const path = movie.poster_path
    const image = `${url}${path}`
    return {
      id: movie.id,
      title: movie.title,
      date: movie.release_date,
      rating: movie.vote_average,
      summary: movie.overview,
      image: image
    };
  });
  return cleanMovies;
}
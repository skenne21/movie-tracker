export const cleanMovies = (movies) => {
  const cleanMovies = movies.map( movie => {
    const url = 'http://image.tmdb.org/t/p/w185/';
    const path = movie.poster_path;
    const image = `${url}${path}`;
    return {
      movie_id: movie.id,
      title: movie.title,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview,
      poster_path: image
    };
  });
  return cleanMovies;
};
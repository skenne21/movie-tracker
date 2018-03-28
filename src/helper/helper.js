import { apiKey }  from '../apiKey.js';
const apiCall = `?api_key=${apiKey}`
const apiroot = `https://api.themoviedb.org/3/movie/`
const language = `language=en-US`
const page = `page=1`

export const fetchRecentMovies = async () => {
  const response = await fetch(`${apiroot}now_playing${apiCall}&${language}&${page}`)
  const apiData = await response.json();
  const movies = await createMovies(apiData.results);
  console.log(apiData.results);
  return movies;
 }

const createMovies = (movies) => {
  const moviePromises = movies.map( async movie => {
    const posterImage = await getPosters(movie.poster_path)
    return {
      id: movie.id,
      title: movie.title,
      date: movie.release_date,
      rating: movie.vote_average,
      summary: movie.overview,
      image: posterImage
    };
  });
  return Promise.all(moviePromises);
}

const getPosters = async (path) => {
    const url = 'http://image.tmdb.org/t/p/w185/'
    const response = await fetch(`${url}${path}`)
    const image = response.url;
    return image;
}

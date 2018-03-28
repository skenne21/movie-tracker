import { apiKey }  from '../apiKey.js';
import { cleanMovies } from './cleanMovies';
const apiCall = `?api_key=${apiKey}`
const apiroot = `https://api.themoviedb.org/3/movie/`
const language = `language=en-US`
const page = `page=1`

export const fetchRecentMovies = async () => {
  const response = await fetch(`${apiroot}now_playing${apiCall}&${language}&${page}`)
  const apiData = await response.json();
  const movies = cleanMovies(apiData.results);
  return movies;
 }




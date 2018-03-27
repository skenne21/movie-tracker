// working


import { apiKey }  from '../apiKey.js';
const apiCall = `?api_key=${apiKey}`
const root = `https://api.themoviedb.org/3/movie/`
const language = `language=en-US`
const page = `page=1`

export const fetchRecentMovies = async () => {
  const response = await fetch(`${root}now_playing${apiCall}&${language}&${page}`)
  const apiData = await response.json();

  console.log(apiData);
 }

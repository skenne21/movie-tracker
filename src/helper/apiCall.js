import { apiKey }  from '../apiKey.js';
import { cleanMovies } from './cleanMovies';
const apiCall = `?api_key=${apiKey}`;
const apiRoot = `https://api.themoviedb.org/3/movie/`;
const language = `language=en-US`;
const page = `page=1`;

export const fetchRecentMovies = async () => {
  const response =
  await fetch(`${apiRoot}now_playing${apiCall}&${language}&${page}`);
  const apiData = await response.json();
  const movies = cleanMovies(apiData.results);
  return movies;
};

export const signIn = async (event, email, password) => {
  try {
    const signIn = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'}
    });
    const user = await signIn.json();
    return user;
  } catch (error) {
    return ({error});
  }
};

export const postCreateUser = async (userInfo) => {
  const lowerCased = userInfo.email.toLowerCase();
  userInfo.email = lowerCased;
  try {
    const createUser = await fetch('/api/users/new', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {'Content-Type': 'application/json'}
    });
    const user = await createUser.json();
    return user;
  } catch (error){
    return ({error});
  }
};

export const postFavorites = async (movie, userId) => {
  const info = {
    movie_id: movie.id,
    user_id: userId,
    title: movie.title,
    poster_path: movie.image,
    release_date: movie.date,
    vote_average: movie.rating,
    overview: movie.summary
  };
  try {
    const response = await fetch('/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {'Content-Type': 'application/json'}
    });
    const favoritesId = response.json();
    return favoritesId;
  } catch (error) {
    return error;
  };
};

export const getFavorites = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}/favorites`);
    const info = await response.json();
    return info.data;
  } catch (error) {
    return error
  }
}

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
    const signInUser = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type': 'application/json'}
    });
    const user = await signInUser.json();
    return user;
  } catch (error) {
    throw error;
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
  } catch (error) {
    throw error;
  }
};

export const postFavorites = async (movie, userId) => {
  const info = Object.assign({}, movie, {user_id: userId});
  try {
    const response = await fetch('/api/users/favorites/new', {
      method: 'POST',
      body: JSON.stringify(info),
      headers: {'Content-Type': 'application/json'}
    });
    const favoritesId = response.json();
    return favoritesId;
  } catch (error) {
    throw error;
  }
};

export const getFavorites = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}/favorites`);
    const info = await response.json();
    return info.data;
  } catch (error) {
    throw error;
  }
};

export const removeFavorites = async(user, movie) => {
  const ids = {
    user,
    movie
  };
  try {
    const initialFetch = await fetch(`/api/users/${user}/favorites/${movie}`, {
      method:'DELETE',
      body: JSON.stringify(ids),
      headers: {'Content-Type': 'application/json'}
    });
    const response = initialFetch.json();
    return response;
  } catch (error) {
    throw error;
  }
};

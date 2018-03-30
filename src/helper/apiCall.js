import { apiKey }  from '../apiKey.js';
import { cleanMovies } from './cleanMovies';
const apiCall = `?api_key=${apiKey}`;
const apiroot = `https://api.themoviedb.org/3/movie/`;
const language = `language=en-US`;
const page = `page=1`;

export const fetchRecentMovies = async () => {
  const response = await fetch(`${apiroot}now_playing${apiCall}&${language}&${page}`);
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
  userInfo.email = lowerCased

  try {
    const createUser = await fetch('/api/users/new', {
      method: 'POST',
      body: JSON.stringify(userInfo),
      headers: {'Content-Type': 'application/json'}
    })
    const user = await createUser.json();

    return user;

  } catch (error){
    return ({error})
  }
}

export const postFavorites = async (movie, userId) => {
  console.log({userId})
  const data = Object.assign({}, movie, {user:userId})
  const response = await fetch('/users/favorites/new', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'Content-Type': 'application/json'}
  })
  console.log(data)
}

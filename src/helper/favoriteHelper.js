import { postFavorites, getFavorites, removeFavorites } from './apiCall';

export const addFavorites = async (movie, user, handleUser) => {
  await postFavorites(movie, user[0].id);
  const userFavorites = await getFavorites(user[0].id);
  const updatedUser = Object.assign({}, ...user, {favorites: userFavorites});
  handleUser(updatedUser);
};

export const updateFavorites = (user, movie, userFavorites, handleUser) => {
  removeFavorites(user[0].id, movie.movie_id);
  const newFavorites = 
  userFavorites.filter( fav => fav.movie_id !== movie.movie_id);
  const changedUser = Object.assign({}, ...user, {favorites: newFavorites});
  handleUser(changedUser);
};

import { getFavorites } from './apiCall';
import { updateFavorites, addFavorites } from './favoriteHelper';

export const createFavorites = async (movie, user, handleUser) => {
  const userFavorites = await getFavorites(user[0].id)
  if (!userFavorites.error) {
    const favorites = userFavorites.find(fav => fav.movie_id === movie.movie_id)
    favorites ?  updateFavorites(user, movie, userFavorites, handleUser) : addFavorites(movie, user, handleUser);
  }
};

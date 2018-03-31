
export const loadMovies = (movies) => ({
  type: 'LOAD_MOVIES',
  movies
});

export const addUser = (user) => ({
  type: 'ADD_USER',
  user
});

export const removeUser = () => ({
  type: 'REMOVE_USER'
});

export const addFavorites = (movies, user) => ({
  type: 'ADD_FAVORITES',
  movies,
  user
});

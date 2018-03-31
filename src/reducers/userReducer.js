export const userReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_USER':
    return [...state, action.user];
  case 'REMOVE_USER':
    return state = [];
  // case 'ADD_FAVORITES'
    // return [Object.assign({}, ...state.user, {action.user}, {favorites: [...action.movies]})]
  default:
    return state;
  }
};

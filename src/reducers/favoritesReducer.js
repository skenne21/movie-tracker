export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_FAVORITES' :
    return [...state, Object.assign({}, action.movie, action.userId)];
  default:
    return state;
  }
};


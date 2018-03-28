export const moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_MOVIES':
      console.log(action.movies)
      return [...state, ...action.movies]
    default:
      return state;
  }
}

export const userReducer = (state = [], action) => {
  const update = [Object.assign({}, ...state, action.user)]
  switch (action.type) {
  case 'UPDATE_USER':
    return [Object.assign({}, ...state, action.user)];
  case 'REMOVE_USER':
    return state = [];
  default:
    return state;
  }
};

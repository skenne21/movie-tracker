import * as actions from './index.js';
import { cleanData } from '../mocks/mockMovieData';

describe('Actions', () => {

  it('Creates an array of movies', () => {

    const expected = {
      type: 'LOAD_MOVIES',
      movies: cleanData
    };

    expect(actions.loadMovies(cleanData)).toEqual(expected);

  });

  it('Updates the user', () => {
    const user = {
      id: 13,
      name: "bob",
      password: "bugs",
      email: "jhonson@aol.col",
      favorites: cleanData
    };

    const expected = { 
      type: 'UPDATE_USER',
      user: user
    };

    expect(actions.updateUser(user)).toEqual(expected);
    
  });

  it('Should remove the user', () => {
    const expected = {
      type: 'REMOVE_USER'
    };

    expect(actions.removeUser()).toEqual(expected);
  });
});
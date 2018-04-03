import { moviesReducer } from './moviesReducer';
import * as actions from '../actions/index';
import { cleanData } from '../mocks/mockMovieData';

describe('moviesReducers', () => {

  it('Should return a default state', () => {
    const expected = [];
    expect(moviesReducer(undefined, {})).toEqual(expected);
  });

  it('Should Load movies to state', () => {
    const expected = cleanData;
    expect(moviesReducer(undefined, actions.loadMovies(cleanData)))
      .toEqual(expected);
  });
});
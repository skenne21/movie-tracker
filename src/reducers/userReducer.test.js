import { userReducer } from './userReducer';
import * as actions from '../actions/index';
import { cleanData } from '../mocks/mockMovieData';

describe('userReducer', () => {
  it('Should return a default state', () => {
    const expected = [];
    expect(userReducer(undefined, {})).toEqual(expected)
  })

  it('Should add a user to the store', () => {
    const user = {
      id: 13,
      name: "bob",
      password: "bugs",
      email: "jhonson@aol.col",
      favorites: cleanData
    };
    const expected = [user]
    expect(userReducer(undefined, actions.updateUser(user))).toEqual(expected)
  })

  it('should reset the user to a empty array', () => {
    const expected = [];
    expect(userReducer(undefined, actions.removeUser)).toEqual(expected)
  })
})
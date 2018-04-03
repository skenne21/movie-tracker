import { createFavorites } from './createFavorites';
import { updateFavorites, addFavorites } from './favoriteHelper';
import { getFavorites } from './apiCall';
import * as mockData from '../mocks/mockMovieData';

jest.mock('./favoriteHelper')
jest.mock('./apiCall')

describe('createFavorites', () => {
  it('should call updateFavorites if movie is already in user-favorites array', async () => {
    const mockUser = [{
      id: 1,
      name: "Bob",
      password: "ilovemywife",
      email: "billybob@gmail.com",
      favorites: mockData.cleanData
    }]
    const mockMovie = mockData.cleanMovie;
    const mockHandleUser = jest.fn();
    await createFavorites(mockMovie, mockUser, mockHandleUser)

    expect(updateFavorites).toHaveBeenCalled();
  });

  it('should call addFavorites if movie is not already in user fave array', async () => {
    const mockUser = [{
      id: 1,
      name: "Bob",
      password: "ilovemywife",
      email: "billybob@gmail.com",
      favorites: mockData.cleanData
    }]
    const mockMovie = mockData.notFavorite;
    const mockHandleUser = jest.fn();
    await createFavorites(mockMovie, mockUser, mockHandleUser)

    expect(addFavorites).toHaveBeenCalled();
  });
});

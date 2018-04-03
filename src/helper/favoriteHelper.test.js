import * as faveHelpers from './favoriteHelper';
import * as mockData from '../mocks/mockMovieData';

jest.mock('./apiCall');

describe('FavoriteHelper', () => {

  describe('addFavorites', () => {
    it('should call handleUser and add new movies to store', async () => {
      const mockUser = [{
        id: 1,
        name: "Bob",
        password: "ilovemywife",
        email: "billybob@gmail.com",
        favorites: mockData.cleanData
      }];
      const mockMovie = mockData.notFavorite;
      const mockHandleUser = jest.fn();
      const mockUserFavorites = [...mockData.cleanData];
      const expected = 
      Object.assign({}, ...mockUser, {favorites: mockUserFavorites});

      await faveHelpers.addFavorites(mockMovie, mockUser, mockHandleUser);

      expect(mockHandleUser).toHaveBeenCalledWith(expected);
    });
  });

  describe('updateFavorites', () => {
    it('should call handleUser and remove movie from store', () => {
      const mockUser = [{
        id: 1,
        name: "Bob",
        password: "ilovemywife",
        email: "billybob@gmail.com",
        favorites: mockData.cleanData
      }];
      const mockMovie = mockData.cleanMovie;
      const mockHandleUser = jest.fn();
      const mockUserFavorites = [...mockData.cleanData];

      const movie = [{
        movie_id: 284054,
        overview: "King T'Challa returns home....",
        poster_path:
        "http://image.tmdb.org/t/p/w500//uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
        release_date: "2018-02-13",
        title: "Black Panther",
        vote_average: 7.4
      }];
      const expected = Object.assign({}, ...mockUser, {favorites: movie});

      faveHelpers.updateFavorites(mockUser,
        mockMovie, mockUserFavorites, mockHandleUser);

      expect(mockHandleUser).toHaveBeenCalledWith(expected);
    });
  });

});

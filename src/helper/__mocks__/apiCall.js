import * as mockData from '../../mocks/mockMovieData';

export const fetchRecentMovies = 
jest.fn().mockImplementation(() => (mockData.cleanData));

export const postCreateUser = jest.fn()
  .mockImplementationOnce(() => ({
    error: "An error happened"
  }))
  .mockImplementationOnce(() => ({
    status: "true",
    data: {
      id: 13,
      name: "bob",
      password: "bugslife",
      email: "jhon@aol.col"
    }
  }));

export const signIn = jest.fn()
  .mockImplementationOnce(() => ({
    status: "success",
    data: {
      id: 13,
      name: "bob",
      password: "bugs456",
      email: "jhonson@aol.col"
    }
  }))
  .mockImplementationOnce(() => ({
    status: "success",
    data: {
      id: 13,
      name: "bob",
      password: "bugs456",
      email: "jhonson@aol.col"
    }
  }))
  .mockImplementationOnce(() => ({
    error: 'an error occurred'
  }));

export const postFavorites = jest.fn()
  .mockImplementation(() => ({
    id: 11,
    message: "Movie was added to favorites",
    status: "success"
  }));

export const getFavorites = jest.fn()
  .mockImplementation(() => (mockData.cleanData));

export const removeFavorites = jest.fn()
  .mockImplementation(() => ({
    body: 'ReadableStream',
    bodyUsed: false,
    headers: {},
    ok: true,
    redirected: false,
    status: 200,
    statusText: "OK",
    type: "basic",
    url: "http://localhost:3001/api/users/1/favorites/284054"
  }));

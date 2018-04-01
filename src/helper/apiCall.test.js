import * as apiCalls from './apiCall';
import { apiKey } from '../apiKey.js';
import * as mockData from '../mocks/mockMovieData';
import { cleanMovies} from './cleanMovies';

jest.mock('./cleanMovies');

 describe.skip('Helper', () => {

  describe('Fetch recent movies', () => {
    let response, url;

    beforeEach(() => {
      response = mockData.rawData;
      url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({ok: true, json: () => Promise.resolve(response)})
      ));
    });

    it('should fetch with correct URL', async () => {
      apiCalls.fetchRecentMovies();
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('Should return a clean array with movie objects', async () => {
      const expected = mockData.cleanData;
      const movies = await apiCalls.fetchRecentMovies();
      expect(movies).toEqual(expected);
    });

    it('Should have called cleanMovies  with the correct params', () => {
      apiCalls.fetchRecentMovies();
      const expected = mockData.rawData.results;
      expect(cleanMovies).toHaveBeenCalledWith(expected);
    });
  });

  describe('Handling sign in', () => {
    let mockEvent;
    let url;
    let email;
    let password;

    beforeEach(() => {
      mockEvent = {target: {}}
      url = '/api/users';
      email = 'tman220@gmail.com';
      password = 'password';
    });

    it('should be called with correct URL', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(
          {
            data: {
                id: 1,
                name: "Taylor",
                password: "password",
                email: "tman2272@aol.com"
              }
          })
      }))
      const expected = [
        url,
        {
          method: 'POST',
          body: JSON.stringify({email, password}),
          headers: { 'Content-Type': 'application/json'}
        }
      ]

      apiCalls.signIn(mockEvent, email, password)

      expect(window.fetch).toHaveBeenCalledWith(...expected)
    });

    it('throws an error if the status is not okay', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      )
      const apiCall = apiCalls.signIn(mockEvent, email, password)

      await expect(apiCall).rejects.toEqual(Error('an error happened'))
    });

    it('should return user object', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(
          {
            data: {
                id: 1,
                name: "Taylor",
                password: "password",
                email: "tman2272@aol.com"
              }
          })
      }))
      const expected = Promise.resolve({
        data: {
          id: 1,
          name: "Taylor",
          password: "password",
          email: "tman2272@aol.com"
          }
        })

        const apiCall = apiCalls.signIn(mockEvent, email, password);

        expect(apiCall).toEqual(expected)
    });
  });

  describe('postCreateUser', () => {
    let userInformation;
    let results;

    beforeEach(() => {
      userInformation = {name: "Bug", email: "bugsarecool@gmail.com", password: "yes"}
      results = {status: "success", message: "New user created", id: 20}
    });

    it('calls fetch with correct params', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(results)
      }))
      const expected = [
        '/api/users/new',
        {
          method: 'POST',
          body: JSON.stringify(userInformation),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ]

      await apiCalls.postCreateUser(userInformation)

      expect(window.fetch).toHaveBeenCalledWith(...expected)
    });

    it('should throw an error', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      )
      const apiCall = apiCalls.postCreateUser(userInformation)

      expect(apiCall).rejects.toEqual(Error('an error happened'))
    });

    it('should return a user object', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(results)
      }))

      const apiCall = await apiCalls.postCreateUser(userInformation)

      expect(apiCall).toEqual(results)
    });
  });

  describe('postFavorites', () => {
    let results;
    let info;
    let movie;

    beforeEach(() => {
      results = {
        id: 11,
        message: "Movie was added to favorites",
        status: "success"
      }
      info = mockData.info;
      movie = mockData.cleanMovie;
    });

    it('should be called with correct params', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(results)
      }))

      const expected = [
        '/api/users/favorites/new',
        { method: 'POST',
          body: JSON.stringify(info),
          headers: {'Content-Type': 'application/json'}
        }
      ]

      apiCalls.postFavorites(movie, 1);

      expect(window.fetch).toHaveBeenCalledWith(...expected)
    });

    it('should throw an error', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      )
      const apiCall = apiCalls.postFavorites(movie, 1)

      expect(apiCall).rejects.toEqual(Error('an error happened'))
    });

    it('should return a status-success object', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(results)
      }));

      const apiCall = await apiCalls.postFavorites(movie, 1);

      expect(apiCall).toEqual(results)
    });
  });

  describe('getFavorites', () => {
    let results;

    beforeEach(() => {
      results = {
        status: "success",
        data: mockData.cleanData,
        message: "Retrieved All favorites"
      }
    });

    it('should be called with correct params', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(results)
      }))
      const url = '/api/users/1/favorites'

      apiCalls.getFavorites(1);

      expect(window.fetch).toHaveBeenCalledWith(url)
    });

    it('should throw an error', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      )
      const apiCall = apiCalls.getFavorites(1)

      expect(apiCall).rejects.toEqual(Error('an error happened'))
    });

    it('should return a resolved object of movies', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(results)
      }));
      const url = '/api/users/1/favorites'

      const apiCall = await apiCalls.getFavorites(1);

      expect(apiCall).toEqual(results.data)
    });
  });

  describe('remove favorites', () => {
    let results;
    let userId;
    let movieId;
    let dataPassed;

    beforeEach(() => {
      results = {
        body: 'ReadableStream',
        bodyUsed: false,
        headers: {},
        ok: true,
        redirected: false,
        status: 200,
        statusText: "OK",
        type: "basic",
        url: "http://localhost:3001/api/users/1/favorites/284054"
      }
      userId = 1;
      movieId = 337167;
      dataPassed = {user: userId, movie: movieId}
    });

    it('should be called with the correct params', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(results)
      }));
      const expected = [
        `/api/users/${userId}/favorites/${movieId}`,
        {
        method: 'DELETE',
        body: JSON.stringify(dataPassed),
        headers: {'Content-Type': 'application/json'}
      }]

      apiCalls.removeFavorites(userId, movieId)

      expect(window.fetch).toHaveBeenCalledWith(...expected)
    });

    it('should throw an error', () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          status: 500
        })
      )
      const apiCall = apiCalls.removeFavorites(1, 11716)
      expect(apiCall).rejects.toEqual(Error('an error happened'))
    });

    it('should return a resolved object', async () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(results)
      }));

      const apiCall = await apiCalls.removeFavorites(userId, movieId)
      expect(apiCall).toEqual(results)
    });
  });














});

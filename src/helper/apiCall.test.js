import * as apiCalls from './apiCall';
import { apiKey } from '../apiKey.js';
import * as mockData from '../mocks/mockMovieData';
import { cleanMovies} from './cleanMovies';

jest.mock('./cleanMovies');

 describe('Helper', () => {

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

  describe('', () => {

  });


















});

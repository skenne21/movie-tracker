import { fetchRecentMovies } from './helper';
import { apiKey } from '../apiKey.js';
import mockMovieData from '../mocks/mockMovieData';

describe('Helper', () => {

  describe('Fetch recent movies', () => {

    it('should fetch with correct URL', async () => {
      const response = {results: [{},{},{},{}]};
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
      window.fetch = jest.fn().mockImplementation(() => (
        Promise.resolve({ok: true, json: () => Promise.resolve(response)})
      ));

      fetchRecentMovies();

      expect(window.fetch).toHaveBeenCalledWith(url)

    });

  });

});

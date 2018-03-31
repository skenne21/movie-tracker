import { cleanMovies } from './cleanMovies';
import { rawData, cleanData } from '../mocks/mockMovieData';

describe('cleanMovies method', () => {
  it('Should return a cleanMovie object', () => {
    const expected = cleanData;
    const movies = cleanMovies(rawData.results);
    expect(movies).toEqual(expected);
  });
});

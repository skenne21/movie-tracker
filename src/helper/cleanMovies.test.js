import { cleanMovies } from './cleanMovies';
import { rawData, cleanData } from '../mocks/mockMovieData';

describe('cleanMovies method', () => {
  it('Should have been called with the apiData', () => {
    const expected = rawData;
    cleanMovies(rawData.results)
    expect(cleanMovies).toHaveBeenCalledWith(expected)
  })
})
import { cleanData } from '../../mocks/mockMovieData'

export const cleanMovies = jest.fn().mockImplementation(() => cleanData)
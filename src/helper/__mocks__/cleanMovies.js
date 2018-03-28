import { mockClean } from '../../mocks/mockMovieData'

export const cleanMovies = jest.fn().mockImplementation(() => mockClean)
import { mapStateToProps, mapDispatchToProps } from './movieContainer';
import * as mocks from '../../mocks/mockMovieData';
import * as actions from '../../actions/index';

describe('appContainer', () => {

  describe('mapStateToProps', () => {
    const user = {
      name: 'Taylor',
      email: 'tman2272@aol.com',
      password: 'password'
    };
    const movies = mocks.cleanData;
    
    it('correctly maps the user to props', () => {
      const mockState = { user: [user] };
      const mapped = mapStateToProps(mockState);
      const expected = [user];
      expect(mapped.user).toEqual(expected);
    });

    it('correctly maps the movies to props', () => {
      const mockState = { movies: [movies] };
      const mapped = mapStateToProps(mockState);
      const expected = [movies];
      expect(mapped.movies).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params on fetchMovies', () => {
      const mockDispatch = jest.fn();
      const movies = mocks.cleanData;
      const mapped = mapDispatchToProps(mockDispatch);
      const expected = actions.loadMovies(movies);

      mapped.fetchMovies(movies);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should call dispatch with the correct params on handleUser', () => {
      const mockDispatch = jest.fn();
      const user = {
        name: 'Taylor',
        email: 'tman2272@aol.com',
        password: 'password'
      };
      const mapped = mapDispatchToProps(mockDispatch);
      const expected = actions.updateUser(user);

      mapped.handleUser(user);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});
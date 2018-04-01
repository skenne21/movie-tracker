import { mapStateToProps, mapDispatchToProps } from './appContainer';
import * as actions from '../../actions/index';

describe('appContainer', () => {

  describe('mapStateToProps', () => {
    const user = {
      email: 'tman2272@aol.com',
      password: 'password'
    };
    const mockState = { user: [user] };
    const mapped = mapStateToProps(mockState);

    it('correctly maps the user to props', () => {
      const expected = [user];
      expect(mapped.user).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch with the correct params on fetchMovies', () => {
      const mockDispatch = jest.fn();
      const movies = {};
      const mapped = mapDispatchToProps(mockDispatch);
      const expected = actions.loadMovies(movies);

      mapped.fetchMovies(movies);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});
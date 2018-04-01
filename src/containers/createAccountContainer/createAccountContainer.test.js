import { mapStateToProps, mapDispatchToProps } from './createAccountContainer';
import * as actions from '../../actions/index';

describe('appContainer', () => {

  describe('mapStateToProps', () => {
    const user = {
      name: 'Taylor',
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
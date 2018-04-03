import { mapStateToProps, mapDispatchToProps } from './signinContainer';
import * as actions from '../../actions/index';

describe('appContainer', () => {
  let user;

  beforeEach(() => {
    user = {
      name: 'Taylor',
      email: 'tman2272@aol.com',
      password: 'password'
    };
  });

  describe('mapStateToProps', () => {

    it('correctly maps the user to props', () => {
      const mockState = { user: [user] };
      const mapped = mapStateToProps(mockState);
      const expected = [user];
      
      expect(mapped.user).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {

    it('should call dispatch without params on removeUser', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      const expected = actions.removeUser();

      mapped.removeUser();

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });

    it('should call dispatch with the correct params on handleUser', () => {
      const mockDispatch = jest.fn();
      const mapped = mapDispatchToProps(mockDispatch);
      const expected = actions.updateUser(user);

      mapped.handleUser(user);

      expect(mockDispatch).toHaveBeenCalledWith(expected);
    });
  });
});

import SignIn from '../../components/SignIn/SignIn';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  handleUser: (user, favorites) => dispatch(actions.addUser(user, favorites)),
  removeUser: () => dispatch(actions.removeUser()),
  // addFavorites: (movies, user) => dispatch(actions.addFavorites(movies, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

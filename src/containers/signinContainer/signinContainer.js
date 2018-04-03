import SignIn from '../../components/SignIn/SignIn';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  handleUser: (user) => dispatch(actions.updateUser(user)),
  removeUser: () => dispatch(actions.removeUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

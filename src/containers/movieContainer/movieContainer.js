import MovieWrapper from '../../components/MovieWrapper/MovieWrapper';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user,
});

export const mapDispatchToProps = dispatch => ({
  fetchMovies: (movies) => dispatch(actions.loadMovies(movies)),
  handleUser: (user) => dispatch(actions.updateUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieWrapper);

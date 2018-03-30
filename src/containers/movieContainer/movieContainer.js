import MovieWrapper from '../../components/MovieWrapper/MovieWrapper';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export const mapStateToProps = state => ({
  movies: state.movies,
  user: state.user,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => ({
  fetchMovies: (movies) => dispatch(actions.loadMovies(movies)),
  addFavorites: (movies, userId) => dispatch(actions.addFavorites(movies, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieWrapper);

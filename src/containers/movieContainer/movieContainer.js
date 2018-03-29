import MovieWrapper from '../../components/MovieWrapper/MovieWrapper';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export const mapStateToProps = state => ({
  movies: state.movies
});

export const mapDispatchToProps = dispatch => ({
  fetchMovies: (movies) => dispatch(actions.loadMovies(movies))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieWrapper);

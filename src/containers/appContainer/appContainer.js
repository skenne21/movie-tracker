import App from '../../components/App/App';
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../actions';

export const mapStateToProps = state => ({
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  fetchMovies: (movies) => dispatch(actions.loadMovies(movies))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

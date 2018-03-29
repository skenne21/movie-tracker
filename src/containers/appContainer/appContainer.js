import App from '../../components/App/App';

import { connect } from 'react-redux';
import * as actions from '../../actions';

export const mapDispatchToProps = dispatch => ({
  fetchMovies: (movies) => dispatch(actions.loadMovies(movies))
});

export default connect(null, mapDispatchToProps)(App);

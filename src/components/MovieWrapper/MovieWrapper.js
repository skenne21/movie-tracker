import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';
import SignIn from '../../containers/signinContainer/signinContainer';
import './movie-wrapper.css';


const MovieWrapper = (props) =>  {

  const determinePath = () => {
    if (props.user.length) {
      switch (props.history.location.pathname) {
      case "/":
        return createMovie(props.movies);
      case "/favorites":
        return createMovie(props.user[0].favorites);
      default:
        return null;
      }
    } else {
      return (
        <div className="Login_text">
          <p>To view favorites, login.</p>
          {createMovie(props.movies)}
        </div>
      );
    }

  };

  const createMovie = (movies) => {
    const mappedMovies = movies.map(movie => {
      let selected;

      if (props.user.length && props.user[0].favorites) {
        selected =
        props.user[0].favorites.find(favs => favs.movie_id === movie.movie_id);
      }

      return <Movie
        favsMovie={selected ? 'favs' : ''}
        key={movie.movie_id}
        movie={movie}
        user={props.user}
        addFavorites={props.addFavorites}
        handleUser={props.handleUser}
      />;
    });

    return (
      <div className="movie-container">
        <SignIn history={props.history}/>
        <div className='movie-wrapper'>
          {mappedMovies}
        </div>
      </div>
    );
  };

  return (
    determinePath()
  );
};

MovieWrapper.propTypes = {
  movies: PropTypes.array,
  user: PropTypes.array,
  addFavorites: PropTypes.func
};

export default MovieWrapper;

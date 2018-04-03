import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';
import SignIn from '../../containers/signinContainer/signinContainer';
import './movie-wrapper.css';


const MovieWrapper = ({user, movies, history, addFavorites, handleUser}) =>  {

  const determinePath = () => {
    if (user.length) {
      switch (history.location.pathname) {
      case "/":
        return createMovie(movies);
      case "/favorites":
        return createMovie(user[0].favorites);
      default:
        return null;
      }
    } else {
      return (
        <div className="Login_text">
          <p>To view favorites, login.</p>
          {createMovie(movies)}
        </div>
      );
    }

  };

  const createMovie = (movies) => {
    const mappedMovies = movies.map(movie => {
      let selected;

      if (user.length && user[0].favorites) {
        selected =
        user[0].favorites.find(favs => favs.movie_id === movie.movie_id);
      }

      return <Movie
        favsMovie={selected ? 'favs' : ''}
        key={movie.movie_id}
        movie={movie}
        user={user}
        addFavorites={addFavorites}
        handleUser={handleUser}
      />;
    });

    return (
      <div className="movie-container">
        <SignIn history={history}/>
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

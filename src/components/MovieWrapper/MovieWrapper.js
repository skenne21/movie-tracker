import React from 'react';
import Movie from '../Movie/Movie';
import { getFavorites } from '../../helper/apiCall';
import PropTypes from 'prop-types';

// let movies = [];

const MovieWrapper = (props) =>  {
  const pathName = props.history.location.pathname;

  // const fetchFavorites = async () => {
  //   const response = await getFavorites(props.user[0].id)
  //   return Promise.resolve(response)
  // }

  //   if (props.user.length) {
  //     fetchFavorites();
  //   } else {
  //     movies = props.movies
  //   }


  const createMovie = props.movies.map(movie =>
    <Movie
      key={movie.id}
      movie={movie}
      user={props.user}
      addFavorites={props.addFavorites}
    />
  );

  return (
    <div>
      {createMovie}
    </div>
  );
};

MovieWrapper.propTypes = {
  movies: PropTypes.array,
  user: PropTypes.array,
  addFavorites: PropTypes.func
};

export default MovieWrapper;

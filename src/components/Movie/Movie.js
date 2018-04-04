import React from 'react';
import PropTypes from 'prop-types';
import { createFavorites } from '../../helper/createFavorites';
import './Movie.css';

const Movie = ({movie, user, handleUser, favsMovie}) => {
  const {
    title,
    vote_average,
    poster_path,
    release_date,
    overview} = movie;

  const handleClick = () => {
    !user.length ?
      alert('Please LogIn or Create An Account!')
      :
      createFavorites(movie, user, handleUser);
  };


  return (
    <article className='movie'>
      <button id={favsMovie}
        className='favorites'
        onClick={handleClick}>
        ❤
        ︎</button>
      <div className="title-container">
        <div className='title'>{title}</div>
      </div>
      <div className="movie-styling">
      <img id='image' src={poster_path} alt='movie poster'/>
      <div className="movie-info-container">
        <p className='rating'>
          <span className="card-category-title">Score: </span>
            {vote_average}
        </p>
        <p className='date'>
          <span className="card-category-title">Release Date: </span>
            {release_date}
        </p>
        <p className='summary'>
          <span className="card-category-title">Summary: </span>
          {overview}
        </p>
      </div>
      </div>
    </article>
  );
};

Movie.propTypes = {
  movie: PropTypes.object,
  user: PropTypes.array,
  handleUser: PropTypes.func,
  favsMovie: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
};

export default Movie;

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
      <button id={favsMovie} className='favorites'onClick={handleClick}>❤︎</button>
      <h1 className='title'>{title}</h1>
      <img id='image' src={poster_path} alt='movie poster'/>
      <p className='rating'>{vote_average}</p>
      <p className='date'>{release_date}</p>
      <p className='summary'>Summary: {overview}</p>
    </article>
  );
};

Movie.propTypes = {
  movie: PropTypes.object,
  user: PropTypes.array
};

export default Movie;

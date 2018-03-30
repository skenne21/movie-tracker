import React from 'react';
import PropTypes from 'prop-types';
import { postFavorites, getFavorites } from '../../helper/apiCall';
import './Movie.css';

const Movie = ({movie, user, addFavorites}) => {
  const {
    title,
    // eslint-disable-next-line
    id,
    rating,
    image,
    date,
    summary} = movie;

  const handleClick = () => {
    !user.length ?
      alert('Please LogIn or Create An Account!')
      :
      createFavorites();
  };

  const createFavorites = async () => {
    const userFavorites = await getFavorites(user[0].id)
    if (!userFavorites.error) {
      const  favorites = userFavorites.find(fav => fav.movie_id === movie.id)
      console.log({favorites})
      console.log({id})
      favorites ? alert('You already love this movie!') : await postFavorites(movie, user[0].id) 
    }
    return
  };

  return (
    <article className='movie'>
      <button className='favorites'onClick={handleClick}>❤︎</button>
      <h1 className='title'>{title}</h1>
      <img id='image' src={image} alt='movie poster'/>
      <p className='rating'>{rating}</p>
      <p className='date'>{date}</p>
      <p className='summary'>Summary: {summary}</p>
    </article>
  );
};

Movie.propTypes = {
  movie: PropTypes.object,
  user: PropTypes.array
};

export default Movie;

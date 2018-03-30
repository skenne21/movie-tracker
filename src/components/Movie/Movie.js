import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie, user, addFavorites}) => {
  const {
    title,
    // eslint-disable-next-line
    id,
    rating,
    image,
    date,
    summary} = movie

    const handleClick = () => {
      !user.length ? 
        alert('Please LogIn or Create An Account!')
        :
        addFavorites(movie, user.id)
    }

  return (
    <article className='movie'>
      <h1 className='title'>{title}</h1>
      <img src={image} alt='movie poster'/>
      <p className='rating'>{rating}</p>
      <p className='date'>{date}</p>
      <p className='summary'>Summary: {summary}</p>
      <button onClick={handleClick}>❤︎</button>
    </article>
  );
};

Movie.propTypes = {
  movie: PropTypes.object
};

export default Movie;

import React from 'react';
import PropTypes from 'prop-types';

const Movie = ({movie}) => {
  const {
    title,
    // eslint-disable-next-line
    id,
    rating,
    image,
    date,
    summary} = movie;

  return (
    <article className='movie'>
      <h1 className='title'>{title}</h1>
      <img src={image} alt='movie poster'/>
      <p className='rating'>{rating}</p>
      <p className='date'>{date}</p>
      <p className='summary'>Summary: {summary}</p>
    </article>
  );
};

Movie.propTypes = {
  movie: PropTypes.object
};

export default Movie;

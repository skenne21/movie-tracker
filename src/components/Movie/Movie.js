import React from 'react';

const Movie = ({movie}) => {
  const {
    title,
    id,
    rating,
    image,
    date,
    summary} = movie;

  return(
    <article className='movie'>
      <h1 className='title'>{title}</h1>
      <img src={image} alt='movie poster'/>
      <p className='rating'>{rating}</p>
      <p className='date'>{date}</p>
      <p className='summary'>Summary: {summary}</p>
    </article>
  )
}

export default Movie;

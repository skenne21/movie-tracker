/* eslint-disable camelcase */
export const rawData = {
  results: [{
    adult:false,
    id:337167,
    overview: "Believing they have left behind...",
    popularity:572.203541,
    poster_path:"/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
    release_date:"2018-02-07",
    title:"Fifty Shades Freed",
    video:false,
    vote_average:6.1,
    vote_count:1097
  },
  {
    adult:false,
    id:284054,
    overview:"King T'Challa returns home....",
    popularity:329.754985,
    poster_path:"/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    release_date:"2018-02-13",
    title:"Black Panther",
    video:false,
    vote_average:7.4,
    vote_count:3477
  }
  ]
};

export const cleanData = [
  {
    movie_id: 337167,
    overview: "Believing they have left behind...",
    poster_path:"http://image.tmdb.org/t/p/w185//jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
    release_date:"2018-02-07",
    title:"Fifty Shades Freed",
    vote_average:6.1
  }, {
    movie_id: 284054,
    overview: "King T'Challa returns home....",
    poster_path: "http://image.tmdb.org/t/p/w185//uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    release_date: "2018-02-13",
    title: "Black Panther",
    vote_average: 7.4
  }
];

export const cleanMovie = {
    movie_id:337167,
    overview: "Believing they have left behind...",
    poster_path:"http://image.tmdb.org/t/p/w185//jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
    release_date:"2018-02-07",
    title:"Fifty Shades Freed",
    vote_average:6.1
  }

export const info =  {
    movie_id: 337167,
    overview: "Believing they have left behind...",
    poster_path:"http://image.tmdb.org/t/p/w185//jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
    release_date:"2018-02-07",
    title:"Fifty Shades Freed",
    vote_average:6.1,
    user_id: 1
  }

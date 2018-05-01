import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieDivs = movies.map(mov => <div>{mov.title} {mov.time}<ul>{mov.genres.map(gen => <li>{gen}</li>)}</ul></div>)
  return (
    <div>
        <h1>Movies Page</h1>
        {movieDivs}
    </div>
  );
};

export default Movies;

import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorDivs = directors.map(dir => <div>{dir.name}<ul>{dir.movies.map(mov=><li>{mov}</li>)}</ul></div>)
  return (
    <div>
      <h1>Directors Page</h1>
      {directorDivs}
    </div>
  );
}

export default Directors

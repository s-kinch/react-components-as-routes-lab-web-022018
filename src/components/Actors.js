import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorDivs = actors.map(actor => <div className="actor">{actor.name}<ul>{actor.movies.map(mov=><li>{mov}</li>)}</ul></div>)
  return (
    <div>
      <h1>Actors Page</h1>
      { actorDivs }
    </div>
  );
};

export default Actors;

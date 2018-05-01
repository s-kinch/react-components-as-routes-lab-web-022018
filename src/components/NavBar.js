import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './Home'
import Directors from './Directors'
import Actors from './Actors'
import Movies from './Movies'


const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" component={Home}>Home</NavLink>
      <NavLink to="/directors" component={Directors}>Directors</NavLink>
      <NavLink to="/actors" component={Actors}>Actors</NavLink>
      <NavLink to="/movies" component={Movies}>Movies</NavLink>
    </div>
  );
};

export default NavBar;

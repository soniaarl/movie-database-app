import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
        <h1>This is the home page</h1>
        <div className="moviepage">
        <NavLink to={'/moviepage'}><a>Link to sample movie page (temporary)</a></NavLink>
        </div>
    </div>
  );
}

export default Home;

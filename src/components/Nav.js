import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
	<nav>
        <ul>
            <li><NavLink to={'/favourites'}><a>Favourites</a></NavLink></li>
            <li><NavLink to={'/about'}><a>About</a></NavLink></li>
        </ul>
	</nav>
);

export default Nav;
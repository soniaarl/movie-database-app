import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

const Header = () => (
	<header>

		{/* Logo */}
    	<NavLink to={'/'} exact>
    	<div className="logo">
        <img src={require('../images/icons/video.png')} alt="Video icon" height="35" width="35" />
        <p>TMDB</p>
    	</div>{/* <!-- end of logo --> */}
    	</NavLink>

		<div className="search">
        <input type="text" placeholder="Search for a movie.." />
        <button><img src={require("../images/icons/search.png")} height="25" width="25"/></button>
   		</div>{/* <!-- end of search --> */}

    <select className="sortby desktop-sort" id="sort-movies">
        <option value="Default">Sort</option>
        <option value="Popular">Popular</option>
        <option value="Top Rated">Top Rated</option>
        <option value="Now Playing">Now Playing</option>
        <option value="Upcoming">Upcoming</option>
    </select>

	<Nav />

	<div id="menu-btn" className="menu-btn">
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
    </div>{/* <!-- end of hamburger button --> */}

	</header>
);


export default Header;
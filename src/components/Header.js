import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import video from '../images/icons/video.png';
import search from '../images/icons/search.png';



//Menu button script
const Header = () => (
    
	<header>

		{/* Logo */}
    	<NavLink to={'/'} exact>
    	<div className="logo">
        <img src={video} alt="Video icon" height="35" width="35" />
        <p>TMDB</p>
    	</div>{/* <!-- end of logo --> */}
    	</NavLink>

		<div className="search">
        <input type="text" placeholder="Search for a movie.." />
        <button><img src={search} alt="Search icon" height="20" width="20"/></button>
   		</div>{/* <!-- end of search --> */}

	<Nav />

	<div id="menu-btn" className="menu-btn">
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
        <div className="menu-bar"></div>
    </div>{/* <!-- end of hamburger button --> */}

	</header>
);


export default Header;
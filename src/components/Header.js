import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import video from '../images/icons/video.png';
import search from '../images/icons/search.png';

//Menu button script
const Header = () => {
	// setState for mobile navigation
	const [menu, setMenu] = useState(false);

    const setActive = () =>  {
        if(menu === false){
            setMenu(true);
            console.log(menu);
        }else{
            setMenu(false);
            console.log(menu);
        }
	}
	
    return (
	<header className={menu === false ? "desktop-nav" : "mobile-nav"}>

		{/* Logo */}
    	<NavLink to={'/'} exact>
    	<div className="logo">
        <img src={video} alt="Video icon" height="35" width="35" />
        <p className="logo-text">TMDB</p>
    	</div>{/* <!-- end of logo --> */}
    	</NavLink>

		<div className="search">
        <input type="text" placeholder="Search for a movie.." />
        <button><img src={search} alt="Search icon" height="20" width="20"/></button>
   		</div>{/* <!-- end of search --> */}


		<div id="menu-btn" className="menu-btn" onClick={setActive}>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
            <div className="menu-bar"></div>
        </div>{/* end menu button */}

		<div className={menu === false ? "hide-nav" : "show-nav"}>
		<Navigation />
		</div>

	</header>
	)
}

export default Header;
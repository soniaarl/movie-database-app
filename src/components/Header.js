import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';
import video from '../images/icons/video.png';

//Menu button script
const Header = () => {
    
	// setState for mobile navigation
	const [menu, setMenu] = useState(false);

    const setActive = () =>  {
        if(menu === false){
            setMenu(true);
        }else{
            setMenu(false);
        }
	}
    
    useEffect(() => {
        const mql = window.matchMedia('(min-width: 720px)');
    
        const screenTest = (e) => {
            if(e.matches){
                console.log('Screen wider than 720px');
                // Remove the show class from the nav
                // by setting navOpen to false
                setMenu(false);
            }else{
                // Not needed...but leaving it in so you 
                // can see how it works...remove if you want...
                console.log('Screen narrower than 720px');
            } 
        }
    
        mql.addListener(screenTest);
    
        // Clean up to prevent multiple listeners
        // from being added to the component everytime
        // the component re-renders...
        // ...basically removes the listener
        return _ => {
            mql.removeListener(screenTest);
        }
    
    });
    
    return (
	<header className={menu === false ? "desktop-nav" : "mobile-nav"}>

		{/* Logo */}
    	<NavLink to={'/'} exact>
    	<div className="logo">
        <img src={video} alt="Video icon" height="35" width="35" />
        <p className="logo-text">TMDB</p>
    	</div>{/* <!-- end of logo --> */}
    	</NavLink>


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
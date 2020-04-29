import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    
    return(
    <div className="mobile-nav"> 

        <nav >
            <ul>
                <li><NavLink to={'/favourites'}>Favourites</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
            </ul>
        </nav>

       
    </div>
    );
}

export default Navigation;
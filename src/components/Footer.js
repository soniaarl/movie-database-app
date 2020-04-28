import React from 'react';
import { NavLink } from 'react-router-dom';
import facebook from '../images/icons/facebook.png';
import twitter from '../images/icons/twitter.png';
import instagram from '../images/icons/instagram.png';

const Footer = () => (
    <footer>
        <div className="social-media">
        <a href="#0"><img src={instagram} alt="Instagram" height="35" width="35"/></a>
        <a href="#0"><img src={twitter} alt="Twitter" height="35" width="35"/></a>
        <a href="#0"><img src={facebook} alt="Facebook" height="35" width="35"/></a>
    </div>{/* <!-- end of social media --> */}

    <NavLink to={'/'} exact><p>Created by Zahra and Sonia</p></NavLink>
    </footer>
);

export default Footer;
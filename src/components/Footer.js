import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <footer>
        <div className="social-media">
        <a href="#0"><img src={require("../images/icons/instagram.png")} alt="Instagram" height="35" width="35"/></a>
        <a href="#0"><img src={require("../images/icons/twitter.png")} alt="Twitter" height="35" width="35"/></a>
        <a href="#0"><img src={require("../images/icons/facebook.png")} alt="Facebook" height="35" width="35"/></a>
    </div>{/* <!-- end of social media --> */}

    <NavLink to={'/'} exact><p>Created by Zahra and Sonia</p></NavLink>
    </footer>
);

export default Footer;
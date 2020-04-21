import React from 'react';

const Footer = () => (
    <footer>
        <div className="social-media">
        <a href="#0"><img src={require("../images/icons/instagram.png")} alt="Instagram" height="35" width="35"/></a>
        <a href="#0"><img src={require("../images/icons/twitter.png")} alt="Twitter" height="35" width="35"/></a>
        <a href="#0"><img src={require("../images/icons/facebook.png")} alt="Facebook" height="35" width="35"/></a>
    </div>{/* <!-- end of social media --> */}

    <a href="about.html"><p>Created by Zahra and Sonia</p></a>
    </footer>
);

export default Footer;
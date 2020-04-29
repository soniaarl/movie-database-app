import React from 'react';
import sonia from '../images/profile-pics/sonia.png';
import zahra from '../images/profile-pics/zahra.png';
import tmdb from '../images/icons/tmdb.svg';

const About = () => (
    <div>
        <div className="wrapper">
        <main className="about">
            <h1>About the Team</h1>
            <p>This movie database has been put together by aspiring front-end developers, Sonia and Zahra. Check out our portfolios to see more of our work!</p>
            
            <div className="profile-pics">
                <div className="profile-pic">
                    <a href="http://slau.bcitwebdeveloper.ca/"><img src={sonia} alt="Sonia"/>
                    <p>Sonia</p></a>
                </div>
                <div className="profile-pic">
                    <a href="http://znouri.bcitwebdeveloper.ca/"><img src={zahra} alt="Zahra"/>
                    <p>Zahra</p></a>
                </div>
            </div>{/* <!-- end of profile pics --> */}

            <div className="attribution">
            <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>
            <a href="https://www.themoviedb.org/"><img src={tmdb} alt="tmdb logo" height="100" width="100"/></a>
            </div>

        </main>
        </div>{/* <!-- end of wrapper --> */}
    </div>
);

export default About;
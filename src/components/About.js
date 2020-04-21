import React from 'react';

const About = () => (
    <div>
        <div className="wrapper">
        <main className="about">
            <h1>About the Team</h1>
            <p>This movie database has been put together by aspiring front-end developers, Sonia and Zahra. Check out our portfolios to see more of our work!</p>
            
            <div className="profile-pics">
                <div className="profile-pic">
                    <a href="http://slau.bcitwebdeveloper.ca/"><img src={require("../images/profile-pics/sonia.png")} alt="Sonia"/>
                    <p>Sonia</p></a>
                </div>
                <div className="profile-pic">
                    <a href="http://znouri.bcitwebdeveloper.ca/"><img src={require("../images/profile-pics/zahra.png")} alt="Zahra"/>
                    <p>Zahra</p></a>
                </div>
            </div>{/* <!-- end of profile pics --> */}
        </main>
        </div>{/* <!-- end of wrapper --> */}
    </div>
);

export default About;
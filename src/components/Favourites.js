import React from 'react';
import { NavLink } from 'react-router-dom';

const Favourites = () => (
    <div>
        <div className="wrapper">

        <main className="favourites">
            <h1>Favourites</h1>
            <p>Click on the heart on your favourite movies to easily find them here!</p>

            <section className="favourite-movies">
   
            </section> {/* end of favourite-movies */}

         <div className="browse-container">
            <NavLink to={'/'} exact>
                <p className="browse">Browse more movies</p>
            </NavLink>
        </div>

        </main>
        </div> {/* end of wrapper */}
    </div>

);

export default Favourites;
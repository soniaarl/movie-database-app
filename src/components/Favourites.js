import React from 'react';
import { NavLink } from 'react-router-dom';
import getStorage from '../utilities/storageMaker';
import MovieMaker from '../utilities/MovieMaker';

const Favourites = () => {

    let movieItems = getStorage();
    console.log(movieItems)
    
return(

    <div>

        <div className="wrapper">

        <main className="favourites">
            <h1>Favourites</h1>
            <p>Click on the heart on your favourite movies to easily find them here!</p>

            <section className="favourite-movies">
   
            </section> {/* end of favourite-movies */}

         <div className="browse-container">

         <section className="movies restOfMovies">
        {movieItems && movieItems.map((movieItems, index) => (
             
                  <MovieMaker key={index}
                      movie={movieItems}

                  />
           
        ))}

      </section> {/* end rest of movies */}

            <NavLink to={'/'} exact>
                <p className="browse">Browse more movies</p>
            </NavLink>
        </div>

        </main>
        </div> {/* end of wrapper */}
    </div>

);
}

export default Favourites;
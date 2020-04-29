import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { IMAGE_URL, API_URL, API_KEY_NOPAGE } from '../globals/variables';
import  {isItemInStorage , setStorage, removeFromStorage} from '../utilities/storageMaker';
import backdrop from '../images/movies/coming-soon-backdrop.png';

const MoviePage = () => {
        // Grabs the id from query string
        let movieId = useParams()

        // Create state for movies
        const [movie, setMovie] = useState([])

        // Add to/remove from favourites
        const [faved , setFaved ] = useState(isItemInStorage(movie));
        const addToFavs = () =>  {

            setStorage(movie);
            setFaved(true);
            }

        const removeFavs = () =>{
            removeFromStorage(movie);
            setFaved(false);
        }

        // Convert release date to string
        function formatDate(string){
            let options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(string).toLocaleDateString([],options);
        }
    
        useEffect(() => {
            const fetchMovies = async () => {
                const allData = await fetch(`${API_URL}${movieId.movieId}?api_key=${API_KEY_NOPAGE}`)
                let results = await allData.json();
                setMovie(results)
                console.log(results);
                }
                fetchMovies();
                
    }, [])
    return(
    <div className="moviepage">
        {/* Banner Image */}
        <div className="banner-image">
            <img src={`${movie.backdrop_path}` !== null ? 
                      `${IMAGE_URL}/w1280${movie.backdrop_path && movie.backdrop_path}`: 
                      backdrop } 
                      alt={movie.original_title}/>
        </div>
        {/* end banner image */}

        <div className="wrapper">
        <main>
       
        {/* Movie Info */}
        <h1>{movie.original_title}</h1>

        {/* Favourite Button */}
        { faved === false ? <button className="heart add" onClick={addToFavs} > Add to Favourites ❤</button> :
                    <button className="heart remove" onClick={removeFavs} > Remove from Favourites ❤</button>}

        <h2>Release Date</h2>
        <p>{formatDate(movie.release_date)}</p>
        <h2>Rating</h2>
        <p>{movie.vote_average*10}%</p>
        <h2>Summary</h2>
        <p>{movie.overview}</p>

        </main>

        </div>{/* <!-- end of wrapper --> */}
    </div>

    );

}

export default MoviePage;
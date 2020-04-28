import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { IMAGE_URL, API_URL, API_KEY_NOPAGE } from '../globals/variables';
import  {isItemInStorage , setStorage, removeFromStorage} from '../utilities/storageMaker';

const MoviePage = () => {
        // Grabs the id from query string
        let movieId = useParams()

        // Create state for movies
        const [Movie, setMovie] = useState([])

        // Add to/remove from favourites
        const [faved , setFaved ] = useState(isItemInStorage(Movie));
        const addToFavs = () =>  {

            setStorage(Movie);
            setFaved(true);
            }

        const removeFavs = () =>{
            removeFromStorage(Movie);
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
            <img src={`${IMAGE_URL}/w1280${Movie.backdrop_path && Movie.backdrop_path}`} alt={Movie.original_title}/>
        </div>
        {/* end banner image */}

        <div className="wrapper">
        <main>
       
        {/* Movie Info */}
        <h1>{Movie.original_title}</h1>

        {/* Favourite Button */}
        { faved === false ? <button className="heart add" onClick={addToFavs} > Add to Favourites ❤</button> :
                    <button className="heart remove" onClick={removeFavs} > Remove from Favourites ❤</button>}

        <h2>Release Date</h2>
        <p>{formatDate(Movie.release_date)}</p>
        <h2>Rating</h2>
        <p>{Movie.vote_average*10}%</p>
        <h2>Summary</h2>
        <p>{Movie.overview}</p>

        </main>

        </div>{/* <!-- end of wrapper --> */}
    </div>

    );

}

export default MoviePage;
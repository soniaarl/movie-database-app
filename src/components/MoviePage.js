import React, { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { IMAGE_URL, API_URL, API_KEY_NOPAGE } from '../globals/variables'

const MoviePage = () => {
        let movieId = useParams()
        console.log (movieId);
    
        useEffect(() => {
            const fetchMovies = async () => {
                const allData = await fetch(`${API_URL}${movieId}${API_KEY_NOPAGE}`)
                let results = await allData.json();
                console.log(results);
                }
                fetchMovies();
        

    }, [])
    return(
    <div>
        <div className="wrapper">
        <main className="moviepage">
            <h1>Movie Title</h1>
            <img src={require("../images/profile-pics/sonia.png")} alt="Sonia"/><br/>
            <button>Add to favourites</button>
            <h2>Overview</h2>
            <p>This is a page with information about the movie you selected</p>
            <div className="releasedRating">
                <h2>Released</h2>
                <p>Jan 08, 2020</p>
                <h2>Rating</h2>
                <p>8/10</p>
            </div>
            <h2>Genre</h2>
            <p>Drama, comedy, Fiction</p>
        </main>
        </div>{/* <!-- end of wrapper --> */}
    </div>

    );

}

export default MoviePage;
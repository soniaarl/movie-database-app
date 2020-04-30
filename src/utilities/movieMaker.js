import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import star from '../images/icons/star.jpg';
import comingsoon from '../images/movies/placeholder-poster.png';
import {IMAGE_URL} from '../globals/variables';
import  {isItemInStorage , setStorage, removeFromStorage} from './storageMaker';

// Format date
function formatDate(string){
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}


function MovieMaker({movie}){
    const [faved , setFaved ] = useState(isItemInStorage(movie));
    const addToFavs = () =>  {

        setStorage(movie);
        setFaved(true);
        }

     const removeFavs = () =>{
          removeFromStorage(movie);
          setFaved(false);
     }
    return(
        <article> 
            <div className="box">
                <div className="container">
                <Link to={`/movie/${movie.id}`}>
                <img src={`${movie.poster_path}` !== null ? `${IMAGE_URL}/w300${movie.poster_path}` : comingsoon } alt={movie.original_title}/>
                </Link>
                
                {/* adding overlay */}
                <div className ="overlay">
                  <div className="info"> 
                     <h3 className="info-header">{movie.original_title}</h3>
                     <p className="release-date">{formatDate(movie.release_date)}</p>
                     <p className="MovieExplain" >{movie.overview}</p>
                     <Link className="btn" to={`/movie/${movie.id}`}> More info</Link>
                  </div>

                 </div> 
                {/* end of overlay */}
                </div>
                {/* end of container */}
                <div className="rating">
                    <p>  <img src={star} alt="star"/>  {movie.vote_average}</p>
                   { faved === false ? <button className="heart add" onClick={addToFavs} > ❤</button> :
                    <button className="heart remove" onClick={removeFavs} > ❤ </button>}
                </div> 
                
            </div>
        </article>
    );
}

export default MovieMaker
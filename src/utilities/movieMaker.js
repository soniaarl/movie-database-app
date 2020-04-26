import React from 'react';

function MovieMaker(props){
    return(
        <article> 
            <div className="box">
                <a href={`/movie/${props.movieId}`}>
                <img src={props.poster} alt={props.title}/>
                </a>
                
                <div className="rating">
                    <p>{props.rating}</p>
                    <button className="heart">❤</button>
                </div> 
                
            </div>
        </article>
    );
}

export default MovieMaker
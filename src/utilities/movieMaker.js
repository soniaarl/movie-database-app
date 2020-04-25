import React from 'react';

function movieMaker(props){
    return(
        <article> 
            <div class="box">
                <a href={`/movie/${props.movieId}`}>
                <img src={props.poster} alt={props.title}/>
                <div class="rating">
                    <p>{props.rating}</p>
                    <button class="heart">❤</button>
                </div> 
                </a>
            </div>
        </article>
    );
}

export default movieMaker
import React from 'react';


const toggleFavAction = (props) =>  {
    console.log ("ids" , props);
    localStorage.setItem(props, props);

}



function MovieMaker(props){
    return(
        <article> 
            <div className="box">
                <div className="container">
                <a href={`/movie/${props.movieId}`}>
                <img src={props.poster} alt={props.title}/>
                </a>
                
                {/* adding overlay */}
                <div className ="overlay">
                  <div className="info"> 
                     <h3 className="info-header">{props.title}</h3>
                     <p className="MovieExplain" >{props.text}</p>
                     <button><a href={`/movie/${props.movieId}`}> More info</a></button>
                  </div>

                 </div> 
                {/* end of overlay */}
                </div>
                {/* end of container */}
                <div className="rating">
                    <p>  <img src={require("../images/icons/star.jpg")} alt="Sonia"/>  {props.rating}</p>
                    <button class="heart" onClick={toggleFavAction(props.movieId)}>❤</button>
                </div> 
                
            </div>
        </article>
    );
}

export default MovieMaker
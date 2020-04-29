import React from 'react'
import { Link } from 'react-router-dom';

const Banner = (props) =>(
 
   
    <div>
        <Link to={`/movie/${props.id}`}>
        <div className="banner-container">
            <div    className="banner-image">
                    <img src={props.image} alt={props.title}/>
            </div>

            <div className="banner-title">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <p> {props.test}</p>
            </div>
        </div>{/* end banner container */}
        </Link>
    </div>
  
)

export default Banner;
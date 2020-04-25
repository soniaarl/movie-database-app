
import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { IMAGE_URL, API_KEY, MOST_POPULAR, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../globals/variables'
import {movieSection} from '../utilities/movieMaker';
import Banner from './Banner';

// Use Effect for getting the movies 

 
 function Home() {
    const [Movies, setMovies] = useState([]);

    useEffect(() => {

        fetch(`${MOST_POPULAR}${API_KEY}`)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setMovies(response.results);
            })

    }, [])
  


  return (
    <div>
      {/* Banner Image */}
        {Movies[0] && 
          <Banner image={`${IMAGE_URL}/w1280${Movies[5].backdrop_path && Movies[5].backdrop_path}`} 
          title={Movies[5].original_title} 
          text={Movies[5].overview}/>
      }

        <NavLink to={'/moviepage'}><a>Link to sample movie page (temporary)</a></NavLink>
        
    </div>
  );

  }


export default Home;


import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../globals/variables'
import {movieSection} from '../utilities/movieMaker';
// Use Effect for getting the movies 

 
 function Home() {
  const [Movies, setMovies] = useState([])
  useEffect(() => {
      fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response=>response.json())
      .then (response =>{
          // console.log(response);
          setMovies(response.results);
          const movieResult = response.results;
          console.log(movieResult);
          console.log(Movies);
          movieSection(movieResult);

      })
  }, [])
  


  return (
    <div>
        <h1>This is the home page</h1>
        <NavLink to={'/moviepage'}><a>Link to sample movie page (temporary)</a></NavLink>
        
    </div>
  );

  }


export default Home;

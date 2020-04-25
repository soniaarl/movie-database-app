
//Sonia's code starts here 

// import React from 'react';
// import { NavLink } from 'react-router-dom';

// function Home() {
//   return (
//     <div>
//         <h1>This is the home page</h1>
//         <div className="moviepage">
//         <NavLink to={'/moviepage'}><a>Link to sample movie page (temporary)</a></NavLink>
//         </div>
//     </div>
//   );
// }

// My code comes here and sonia's end ... 

import React, { useEffect, useState, useRef } from 'react'
import { API_URL, API_KEY, IMAGE_BASE_URL, IMAGE_SIZE, POSTER_SIZE } from '../globals/variables'
import MovieSectionMaker from './MovieSectionMaker';
function Home() {

  const [Movies, setMovies] = useState([])
  useEffect(() => {
      fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response=>response.json())
      .then (response =>{
          console.log(response)
          setMovies(response.results)
          // let OneMovie = response.results.id;
      })
  }, [])



  return(
    <main>
    <div className="app">
       <h1>Most Populars</h1>
       
       {Movies && <MovieSectionMaker results={Movies}/>}
    </div>
    </main>
  );

}






export default Home;

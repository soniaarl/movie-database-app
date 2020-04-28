
import React, { useEffect, useState } from 'react';
import { IMAGE_URL, API_KEY, MOST_POPULAR } from '../globals/variables'
import Banner from './Banner';
import MovieMaker from '../utilities/MovieMaker';
import SortBy from './SortBy';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [sort, setSort] = useState(`${MOST_POPULAR}`);

    useEffect(() => {
        const fetchMovies = async () => {
        const allData = await fetch(`${sort}${API_KEY}`)
            let results = await allData.json();
            setMovies(results.results);
            console.log( results.results);
          }
          fetchMovies();
    }, [sort])
  
  const handleSortChange = (sort) => {
    setSort(sort);
  }

  return (
    <div>
      {/* Banner Image */}
        {movies[1] && 
          <Banner image={`${IMAGE_URL}/w1280${movies[1].backdrop_path && movies[1].backdrop_path}`} 
          title={movies[1].original_title} 
          text={movies[1].overview}/>
        }{/* end banner */}

      {/* Sort Options */}
      <SortBy sort={sort} handleSortChange={handleSortChange}/>

      {/* Rest of movies */}
      <section className="movies restOfMovies">
        {movies && movies.map((movie, index) => (
             
                  <MovieMaker key={index}
                      movie={movie}

                  />
           
        ))}
      </section> {/* end rest of movies */}


        
    </div>
  );

  }


export default Home;

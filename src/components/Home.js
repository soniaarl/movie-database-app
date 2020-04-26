
import React, { useEffect, useState } from 'react';
import { IMAGE_URL, API_KEY, MOST_POPULAR } from '../globals/variables'
import Banner from './Banner';
import MovieMaker from '../utilities/MovieMaker';
import SortBy from './SortBy';

const Home = () => {
    const [Movies, setMovies] = useState([]);
    const [sort, setSort] = useState(`${MOST_POPULAR}`);

    useEffect(() => {
        const fetchMovies = async () => {
        const allData = await fetch(`${sort}${API_KEY}`)
            let results = await allData.json();
            setMovies(results.results);
            console.log(allData);
          }
          fetchMovies();
    }, [sort])
  
  const handleSortChange = (sort) => {
    setSort(sort);
  }

  return (
    <div>
      {/* Banner Image */}
        {Movies[1] && 
          <Banner image={`${IMAGE_URL}/w1280${Movies[1].backdrop_path && Movies[1].backdrop_path}`} 
          title={Movies[1].original_title} 
          text={Movies[1].overview}/>
        }{/* end banner */}

      {/* Sort Options */}
      <SortBy sort={sort} handleSortChange={handleSortChange}/>

      {/* Rest of movies */}
      <section className="movies restOfMovies">
        {Movies && Movies.map((movie, index) => (
              <React.Fragment key={index}>
                  <MovieMaker 
                    poster={movie.poster_path && `${IMAGE_URL}/w300${movie.poster_path}`}
                    movieId={movie.id}
                  />
            </React.Fragment>
        ))}
      </section> {/* end rest of movies */}


        
    </div>
  );

  }


export default Home;

import React from 'react';
import {TOP_RATED, MOST_POPULAR, NOW_PLAYING, UPCOMING_MOVIES} from '../globals/variables';

const sortURL = [MOST_POPULAR, TOP_RATED, NOW_PLAYING, UPCOMING_MOVIES];
const sortOptions = ['Popular', 'Top Rated', 'Now Playing', 'Upcoming'];

const makeSortOptions = (sortURL) => {
    return sortURL.map((movieType, i) => {  
        return (
            <option key={i} value={movieType} >{sortOptions[i]}</option>
            )});
}

const SortBy = (props) => {
    const handleSortChange = (e) => {
        props.handleSortChange(e.target.value);
        console.log(handleSortChange);
    }
    
    return (
            <form>
                <select name="sort-movies" 
                        id="sort-movies" 
                        className="sortby desktop-sort"
                        onChange={handleSortChange}>
                        {makeSortOptions(sortURL, props.sort)}  
                </select>
            </form>
    );

};

export default SortBy;



// <select className="sortby desktop-sort" 
//         name="sort-movies" 
//         id="sort-movies"
//         onChange={handleSortChange}>
//     <option value="Default">Sort</option>
//     <option value="Popular">Popular</option>
//     <option value="Top Rated">Top Rated</option>
//     <option value="Now Playing">Now Playing</option>
//     <option value="Upcoming">Upcoming</option>
// </select>
import { FAVS_MOVIES } from '../globals/variables';

export const isItemInStorage = (newItem) => {
    let currentMovies = getStorage();
    if(!currentMovies){
        return false;
    }
    if(currentMovies.find(currentMovie => currentMovie.id === newItem.id)){
        return true;
    }else {
        return false;
    }
}

export const setStorage = (newItem, storageItem = FAVS_MOVIES) => {

    let currentMovies = getStorage();
    if( currentMovies !== false){
       
        currentMovies.push(newItem);

    }else{
        currentMovies = [newItem];

    }

    currentMovies = JSON.stringify(currentMovies);
    localStorage.setItem(storageItem, currentMovies);

}

export const getStorage = (storageItem = FAVS_MOVIES) => {
    let item = localStorage.getItem(storageItem);
    if(item){
        item = JSON.parse(item);
        return item;
    }else {
        return false;
    }
}

export const removeFromStorage = (movie, storageItem = FAVS_MOVIES) => {
    let items = getStorage();
    const isMovie = (current) => current.id === movie.id;
    let indexOfItemToRemove = items.findIndex(isMovie);
    items.splice(indexOfItemToRemove, 1);
    let itemsForStorage = JSON.stringify(items);
    localStorage.setItem(storageItem, itemsForStorage);
    return items;
}

export default getStorage
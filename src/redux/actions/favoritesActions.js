import { ADD_FAVORITE, DELETE_FAVORITE } from '../constants';

export const addFavorite = favoriteId => {
    return {
        type: ADD_FAVORITE,
        payload: favoriteId
    }
}

export const deleteFavorite = favoriteId => {
    return {
        type: DELETE_FAVORITE,
        payload: favoriteId
    }
}
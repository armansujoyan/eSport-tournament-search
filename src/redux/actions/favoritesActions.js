import { ADD_FAVORITE, DELETE_FAVORITE } from '../constants/favorites';

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
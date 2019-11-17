import { ADD_FAVORITE, DELETE_FAVORITE } from '../constants';

export const addFavorite = favorite => {
    return {
        type: ADD_FAVORITE,
        payload: favorite
    }
}

export const deleteFavorite = favoriteId => {
    return {
        type: DELETE_FAVORITE,
        payload: favoriteId
    }
}
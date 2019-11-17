import { ADD_FAVORITE, DELETE_FAVORITE } from '../constants/favorites';

const localFavorites = localStorage.getItem('favorites');

const initialState = localFavorites && localFavorites.length > 0 ? localFavorites : [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_FAVORITE:
        return [ ...state, payload ];
    case DELETE_FAVORITE:
        const itemIndex = state.findIndex(id => id === payload);
        return [
            ...state.slice(0, itemIndex),
            ...state.slice(itemIndex+1, state.lenght)
        ]
    default:
        return state
    }
}

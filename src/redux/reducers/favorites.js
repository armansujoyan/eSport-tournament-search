import { ADD_FAVORITE, DELETE_FAVORITE } from '../constants/favorites';

const localFavorites = JSON.parse(localStorage.getItem('favorites'));

const initialState = localFavorites && localFavorites.length > 0 ? localFavorites : [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_FAVORITE:
        localStorage.setItem('favorites', JSON.stringify([...state, payload]));
        return [ ...state, payload ];
    case DELETE_FAVORITE:
        const itemIndex = state.findIndex(id => id === payload);
        const nextState = [
            ...state.slice(0, itemIndex),
            ...state.slice(itemIndex+1, state.lenght)
        ];
        localStorage.setItem('favorites', JSON.stringify(nextState))
        return nextState;
    default:
        return state
    }
}

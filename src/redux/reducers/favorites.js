import { ADD_FAVORITE, DELETE_FAVORITE } from '../constants/favorites';
import { union } from 'lodash';

const localFavorites = JSON.parse(localStorage.getItem('favorites'));

const initialState = localFavorites && localFavorites.length > 0 ? localFavorites : [];

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_FAVORITE:
        const addNextState = union(state, [ payload ]);
        return addNextState;
    case DELETE_FAVORITE:
        const itemIndex = state.findIndex(id => id === payload);
        const delNextState = [
            ...state.slice(0, itemIndex),
            ...state.slice(itemIndex+1, state.lenght)
        ];
        return delNextState;
    default:
        return state
    }
}

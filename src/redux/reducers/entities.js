import { GET_TOURNAMENTS_SUCCESS } from '../constants/tournaments';

const localFavoriteEntities = localStorage.getItem('tournamentEntities');

const initialState = {
    tournaments: localFavoriteEntities &&
        localFavoriteEntities.length > 0 ? { ...localFavoriteEntities } : {},
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case GET_TOURNAMENTS_SUCCESS:
        return { ...state, favorites: Object.assign({}, ...payload)}
    default:
        return state
    }
}

import {
    ADD_TOURNAMENT_ENTITIES,
    REMOVE_TOURNAMENT_ENTITIES
} from '../constants/entities';

const localTourEntities = localStorage.getItem('tournamentEntities');

const initialState = {
    tournaments: localTourEntities &&
        localTourEntities.length > 0 ? { ...localTourEntities } : {},
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_TOURNAMENT_ENTITIES:
        return { ...state, tournaments: {...state.tournaments, ...payload}}
    case REMOVE_TOURNAMENT_ENTITIES:
        const tournaments = Object.assign({}, state);
        payload.map(id => delete tournaments[id]);
        return { ...state, tournaments }
    default:
        return state
    }
}

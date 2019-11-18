import {
    ADD_TOURNAMENT_ENTITIES,
    REMOVE_TOURNAMENT_ENTITIES
} from '../constants/entities';

const localEntities = JSON.parse(localStorage.getItem('tournaments:entities'));

const initialState = localEntities ? localEntities : {
    tournaments: {}
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_TOURNAMENT_ENTITIES:
        const nextState = { ...state, tournaments: {...state.tournaments, ...payload}};
        return nextState;
    case REMOVE_TOURNAMENT_ENTITIES:
        const tournaments = Object.assign({}, state);
        payload.map(id => delete tournaments[id]);
        return { ...state, tournaments }
    default:
        return state
    }
}

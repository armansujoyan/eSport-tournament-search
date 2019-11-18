import {
    ADD_TOURNAMENT_ENTITIES
} from '../constants/entities';

const localEntities = JSON.parse(localStorage.getItem('tournaments:entities'));

const initialState = localEntities ? localEntities.tournaments : {};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_TOURNAMENT_ENTITIES:
        return {...state, ...payload};
    default:
        return state
    }
}

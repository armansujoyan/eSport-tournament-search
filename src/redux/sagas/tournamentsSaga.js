import { put } from 'redux-saga/effects';
import { apiUrl } from '../../config'
import { setDropdownLoaderVisibiliy } from '../actions/uiActions';
import {
    GET_TOURNAMENTS_ERROR,
    GET_TOURNAMENTS_SUCCESS
} from '../constants/tournaments'
import {
    ADD_TOURNAMENT_ENTITIES
} from '../constants/entities';

export function* getTournamentsSaga({type, payload}) {
    try {
        yield put(setDropdownLoaderVisibiliy(true));
        const tournamentsRequest = yield fetch(`${apiUrl}search?q=${payload}&index=tournament`);
        const tournamentsData = yield tournamentsRequest.json();

        if(tournamentsData.length === 0)  {
            yield put({ type: GET_TOURNAMENTS_SUCCESS, payload: []})
        } else {
            const tournaments = tournamentsData[0].documents;

            yield put({
                type: ADD_TOURNAMENT_ENTITIES,
                payload: tournaments.reduce((obj, item) => {
                    obj[item.id] = item;
                    return obj;
                }, {})
            });

            yield put({ type: GET_TOURNAMENTS_SUCCESS, payload: tournaments.map(t => t.id)})
        }
        yield put(setDropdownLoaderVisibiliy(false));
    } catch (error) {
            console.log(error);
            yield put({ type: GET_TOURNAMENTS_ERROR, payload: error.message })
    }
}
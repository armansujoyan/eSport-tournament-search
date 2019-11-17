import { put } from 'redux-saga/effects';
import {
    GET_TOURNAMENTS_ERROR,
    GET_TOURNAMENTS_SUCCESS
} from '../constants/tournaments'

export function* getTournamentsSaga(query) {
    try {
        const tournamentsRequest = yield fetch();
        const tournamentsData = yield tournamentsRequest.json();

        console.log(tournamentsData);

        //     put({ tyoe: GET_TOURNAMENTS_SUCCESS, })
    } catch (error) {
            console.log(error);
            yield put({ type: GET_TOURNAMENTS_ERROR, payload: error.message })
    }
}
import { takeEvery } from 'redux-saga/effects'
import { getTournamentsSaga } from './tournamentsSaga'
import types from '../constants';

export function* watchTournamentsActions() {
    yield takeEvery(types.GET_TOURNAMENTS, getTournamentsSaga);
}
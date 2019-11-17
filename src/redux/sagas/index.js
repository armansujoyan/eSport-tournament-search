import { fork } from 'redux-saga/effects';
import { watchTournamentsActions } from './watcher';

export function* tournaments() {
    yield fork(watchTournamentsActions);
}
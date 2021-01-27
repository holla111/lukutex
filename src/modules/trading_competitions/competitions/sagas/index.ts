import { takeLatest } from 'redux-saga/effects';
import {
    COMPETITIONS_LIST_ACTIVE, COMPETITIONS_LIST_ENDED,
} from '../constants';
import { activeCompetionsListSaga, endedCompetionsListSaga } from './competitionsSaga';

export function* rootCompetionsListSaga() {
    yield takeLatest(COMPETITIONS_LIST_ACTIVE, activeCompetionsListSaga);
    yield takeLatest(COMPETITIONS_LIST_ENDED, endedCompetionsListSaga);

}

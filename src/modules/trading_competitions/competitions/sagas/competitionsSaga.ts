import { put } from 'redux-saga/effects';
import { CompetitionItem } from '../types';
// import { API, RequestOptions } from '../../../../../api';
import pluginsAPI from '../../../../plugins/api/index';

import {
    competitionsListData,
    competitionsListError,
    ActiveCompetionsListFetch,
    EndedCompetionsListFetch,
} from '../actions';

export function* activeCompetionsListSaga(action: ActiveCompetionsListFetch) {
    try {
        const competitionsList = yield pluginsAPI.get<CompetitionItem[]>('trading-competition/fetch/active');
        yield put(competitionsListData(competitionsList.data));
    } catch (error) {
        yield put(competitionsListError(error));
    }
}

export function* endedCompetionsListSaga(action: EndedCompetionsListFetch) {
    try {
        const competitionsList = yield pluginsAPI.get<CompetitionItem[]>('trading-competition/fetch/ended');
        yield put(competitionsListData(competitionsList.data));
    } catch (error) {
        yield put(competitionsListError(error));
    }
}
import { put } from 'redux-saga/effects';
import { Competition } from '../types';
// import { API, RequestOptions } from '../../../../../api';
import pluginsAPI from '../../../../plugins/api/index';

import {
    CompetionListFetch,
    competitionListData,
    competitionListError,
} from '../actions';

export function* competionsListFetchSaga(action: CompetionListFetch) {
    try {
        const competitionsList = yield pluginsAPI.get<Competition[]>('competitions/fetch/all');
        yield put(competitionListData(competitionsList.data));
    } catch (error) {
        yield put(competitionListError(error));
    }
}
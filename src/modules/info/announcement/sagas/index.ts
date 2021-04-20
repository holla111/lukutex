import { takeLatest } from 'redux-saga/effects';
import {
    ANNOUNCMENT_CREATE, ANNOUNCMENT_FETCH
} from '../constants';
import { announcementCreateSaga, announcementFetchSaga} from './announcementsSaga';

export function* rootAnnouncementSaga() {
    yield takeLatest(ANNOUNCMENT_CREATE, announcementCreateSaga);
    yield takeLatest(ANNOUNCMENT_FETCH, announcementFetchSaga);
}

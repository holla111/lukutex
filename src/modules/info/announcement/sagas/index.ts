import { takeLatest } from 'redux-saga/effects';
import {
    ANNOUNCMENT_CREATE
} from '../constants';
import { announcementCreate } from './announcementsSaga';

export function* rootEventSaga() {
    yield takeLatest(ANNOUNCMENT_CREATE, announcementCreate);
}

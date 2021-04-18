import { put } from 'redux-saga/effects';
// import { API, RequestOptions } from '../../../../../api';
import axios from 'axios';
import {
  AnnouncementCreate,
  announcementData,
  announcementError
} from '../actions';
import { Announcement } from '../types';


export function* announcementCreate(action: AnnouncementCreate) {
    try {
        const events = yield axios.post<Announcement[]>('https://lukutex-api-test.herokuapp.com/events/fetch');
        yield put(announcementData({
            payload: events.data.events,
            loading: false
        }));
    } catch (error) {
        yield put(announcementError(error));
    }
}


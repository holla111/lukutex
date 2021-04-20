import { put } from 'redux-saga/effects';
// import { API, RequestOptions } from '../../../../../api';
import axios from 'axios';
import {
  AnnouncementCreate,
  announcementData,
  announcementError,
  AnnouncementFetch,
  announcementsData,
} from '../actions';
import { Announcement } from '../types';


export function* announcementCreateSaga(action: AnnouncementCreate) {
    try {
        const announcement = yield axios.post<Announcement>('http://localhost:4000/announcement/create', action.payload);
        yield put(announcementData(announcement.data.announcement as Announcement));
    } catch (error) {
        yield put(announcementError(error));
    }
}

export function* announcementFetchSaga(action: AnnouncementFetch) {
    try {
        const announcements = yield axios.get<Announcement>('http://localhost:4000/announcement/fetch');
        yield put(announcementsData(announcements.data.announcements as Announcement[]));
    } catch (error) {
        yield put(announcementError(error));
    }
}

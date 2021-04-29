import { put } from 'redux-saga/effects';
// import { API, RequestOptions } from '../../../../../api';
import pluginsAPI from '../../../../plugins/api/index';

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
        const announcement = yield pluginsAPI.post<Announcement>('announcement/create', action.payload);
        yield put(announcementData(announcement.data.announcement as Announcement));
    } catch (error) {
        yield put(announcementError(error));
    }
}

export function* announcementFetchSaga(action: AnnouncementFetch) {
    try {
        const announcements = yield pluginsAPI.get<Announcement[]>('announcement/fetch');
        yield put(announcementsData(announcements.data.announcements as Announcement[]));
    } catch (error) {
        yield put(announcementError(error));
    }
}

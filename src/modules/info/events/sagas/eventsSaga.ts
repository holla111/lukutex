import { put } from 'redux-saga/effects';
// import { API, RequestOptions } from '../../../../../api';
import axios from 'axios';
import {
    eventData,
    eventError,
    EventFetch,
} from '../actions';
import { EventItem } from '../types';


export function* eventFetchSaga(action: EventFetch) {
    try {
        const events = yield axios.get<EventItem[]>('https://lukutex-api-test.herokuapp.com/events/fetch');
        yield put(eventData({
            payload: events.data.events,
            loading: false
        }));
    } catch (error) {
        yield put(eventError(error));
    }
}


import { put } from 'redux-saga/effects';
/* import pluginsAPI from '../../../../plugins/api/index'; */
import axios from 'axios';
import {
    eventData,
    eventError,
    EventFetch,
} from '../actions';
import { EventItem } from '../types';


export function* eventFetchSaga(action: EventFetch) {
    try {
        const events = yield axios.get<EventItem[]>('http://api-lukutex.herokuapp.com/events/fetch');
        yield put(eventData({
            payload: events.data.events,
            loading: false
        }));
    } catch (error) {
        yield put(eventError(error));
    }
}


import { AnnouncementActions } from './actions';
import {
    ANNOUNCMENT_CREATE,
    ANNOUNCMENT_DATA,
    ANNOUNCMENTT_ERROR
} from './constants';
import {
    AnnouncementState,
} from './types';

export const initialEvent: AnnouncementState = {
    payload: [],
    loading: false,
};

export const eventReducer = (state = initialEvent, action: AnnouncementActions): AnnouncementState => {
    switch (action.type) {
        case ANNOUNCMENT_CREATE:
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        case ANNOUNCMENT_DATA:
            const { payload } = action.payload;

            return {
                ...state,
                payload: payload,
                loading: false,
                error: undefined,
            };
        case ANNOUNCMENTT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

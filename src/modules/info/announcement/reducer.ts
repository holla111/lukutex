import { AnnouncementActions } from './actions';
import {
    ANNOUNCMENT_CREATE,
    ANNOUNCMENT_DATA,
    ANNOUNCMENT_ERROR,
    ANNOUNCMENT_FETCH,
    ANNOUNCMENTS_DATA,
} from './constants';
import {
    AnnouncementState,
} from './types';

export const initialAnnouncement: AnnouncementState = {
    data: [],
    loading: false,
};

export const announcementReducer = (state = initialAnnouncement, action: AnnouncementActions): AnnouncementState => {
    switch (action.type) {
        case ANNOUNCMENT_CREATE:
            return {
                ...state,
                loading: true,
                error: undefined,
            };

        case ANNOUNCMENT_DATA:
            const { payload } = action;
            state.data.unshift(payload);

            return {
                ...state,
                loading: false,
                error: undefined,
            };

        case ANNOUNCMENT_FETCH:
            return {
                ...state,
                loading: true,

            };

        case ANNOUNCMENTS_DATA:
            
            return {
                ...state,
                data : action.payload,
                loading: false,
            }

        case ANNOUNCMENT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

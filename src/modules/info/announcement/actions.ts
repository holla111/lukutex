import { CommonError } from '../../../modules/types';
import {
    ANNOUNCMENT_CREATE,
    ANNOUNCMENT_FETCH,
    ANNOUNCMENT_ERROR,
    ANNOUNCMENTS_DATA,
    ANNOUNCMENT_DATA
} from './constants';
import {
    Announcement
} from './types';

export interface AnnouncementCreate {
    type: typeof ANNOUNCMENT_CREATE;
    payload: {
        title: string;
        content: string;
    };
}

export interface AnnouncementData {
    type: typeof ANNOUNCMENT_DATA;
    payload: Announcement;
}

export interface AnnouncementFetch {
    type: typeof ANNOUNCMENT_FETCH;
}

export interface AnnouncementsData {
    type: typeof  ANNOUNCMENTS_DATA,
    payload: Announcement[];
}

export interface AnnouncementError {
    type: typeof ANNOUNCMENT_ERROR;
    error: CommonError;
}

export type AnnouncementActions =
AnnouncementCreate | AnnouncementData
    | AnnouncementError | AnnouncementFetch  | AnnouncementsData;

export const announcementFetch = (): AnnouncementFetch => ({
    type: ANNOUNCMENT_FETCH,
});

export const announcementsData = (payload: Announcement[]): AnnouncementsData => ({
    type: ANNOUNCMENTS_DATA,
    payload,
});



export const announcementCreate = (payload:{
    title: string;
    content: string;
}):AnnouncementCreate => ({
    type: ANNOUNCMENT_CREATE,
    payload,
});

export const announcementData = (payload:Announcement): AnnouncementData => ({
    type: ANNOUNCMENT_DATA,
    payload,
});

export const announcementError = (error: AnnouncementError['error']): AnnouncementError => ({
    type: ANNOUNCMENT_ERROR,
    error,
});

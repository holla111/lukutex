import { CommonError } from '../../../modules/types';
import {
    ANNOUNCMENT_CREATE,
    ANNOUNCMENT_DATA,
    ANNOUNCMENTT_ERROR
} from './constants';
import {
    AnnouncementState,
} from './types';

export interface AnnouncementCreate {
    type: typeof ANNOUNCMENT_CREATE;
}

export interface AnnouncementData {
    type: typeof ANNOUNCMENT_DATA;
    payload: AnnouncementState;
}

export interface AnnouncementError {
    type: typeof ANNOUNCMENTT_ERROR;
    error: CommonError;
}

export type AnnouncementActions =
AnnouncementCreate
    | AnnouncementData
    | AnnouncementError;

export const announcementCreate = (): AnnouncementCreate => ({
    type: ANNOUNCMENT_CREATE,
});

export const announcementData = (payload: AnnouncementData['payload']): AnnouncementData => ({
    type: ANNOUNCMENT_DATA,
    payload,
});

export const announcementError = (error: AnnouncementError['error']): AnnouncementError => ({
    type: ANNOUNCMENTT_ERROR,
    error,
});

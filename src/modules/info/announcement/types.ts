import { CommonState } from '../../../modules/types';

export interface Announcement {
    id: number;
    title: string;
    content: string;
    created_at: string;
}


export interface AnnouncementState extends CommonState {
    data: Announcement[];
    loading: boolean;
}

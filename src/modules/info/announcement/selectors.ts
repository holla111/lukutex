import { RootState } from '../../index';
import { AnnouncementState } from './types';

export const selectEvents = (state: RootState): AnnouncementState => state.info.events;

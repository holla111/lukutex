import { CommonError } from '../../../modules/types';
import {
    COMPETITIONS_LIST_DATA,
    COMPETITIONS_LIST_ERROR,
    COMPETITIONS_LIST_ACTIVE,
    COMPETITIONS_LIST_ENDED,
} from './constants';
import {
    CompetionListState,
} from './types';

export interface ActiveCompetionsListFetch {
    type: typeof COMPETITIONS_LIST_ACTIVE;
}


export interface EndedCompetionsListFetch {
    type: typeof COMPETITIONS_LIST_ENDED;
}

export interface CompetionsListData {
    type: typeof COMPETITIONS_LIST_DATA;
    payload: CompetionListState;
}

export interface CompetionsListError {
    type: typeof COMPETITIONS_LIST_ERROR;
    error: CommonError;
}

export type CompetionsListActions =
ActiveCompetionsListFetch
    | EndedCompetionsListFetch
    | CompetionsListData
    | CompetionsListError;

export const activeCompetionsListFetch = (): ActiveCompetionsListFetch => ({
    type: COMPETITIONS_LIST_ACTIVE,
});


export const endedCompetionsListFetch = (): EndedCompetionsListFetch => ({
    type: COMPETITIONS_LIST_ENDED,
});

export const competitionsListData = (payload: CompetionsListData['payload']): CompetionsListData => ({
    type: COMPETITIONS_LIST_DATA,
    payload,
});

export const competitionsListError = (error: CompetionsListError['error']): CompetionsListError => ({
    type: COMPETITIONS_LIST_ERROR,
    error,
});

// import { sliceArray } from '../../../../helpers';
import { CompetionsListActions } from './actions';
import {
    COMPETITIONS_LIST_DATA,
    COMPETITIONS_LIST_ERROR,
    COMPETITIONS_LIST_ACTIVE,
    COMPETITIONS_LIST_ENDED,
} from './constants';
import {
    CompetionListState,
} from './types';

export const initialCompetionsList: CompetionListState = {
    payload: [],
    loading: false,
};

export const competitionsListReducer = (state = initialCompetionsList, action: CompetionsListActions): CompetionListState => {
    switch (action.type) {
        case COMPETITIONS_LIST_ACTIVE:
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        case COMPETITIONS_LIST_ENDED:
            return {
                ...state,
                loading: true,
                error: undefined,
            };
        case COMPETITIONS_LIST_DATA:
            const { payload } = action.payload;

            return {
                ...state,
                payload: payload,
                loading: false,
                error: undefined,
            };
        case COMPETITIONS_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

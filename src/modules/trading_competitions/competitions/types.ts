import { CommonState } from '../../../modules/types';

export interface CompetitionItem {

}

export interface CompetionListState extends CommonState {
    payload: CompetitionItem[];
    loading: boolean;
}
